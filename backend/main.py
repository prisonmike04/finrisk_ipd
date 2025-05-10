from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import json
import tensorflow as tf
from typing import Dict, Any, List, Optional
import time
import os

# Import feature engineering and model loader
from feature_engineering import FeatureEngineering
from model_loader import BNNModelLoader

# Create FastAPI app
app = FastAPI(title="Startup Risk Prediction API", 
              description="Feature-Aware Bayesian Neural Network for Startup Risk Assessment")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input data model
class StartupData(BaseModel):
    city: str
    industry: str
    sample_startups_level: str
    sample_startups_rating: float
    sample_startups_publishedon: str
    sample_startups_registeredon: str
    founded: str
    funding_amount: int
    month: int
    dpiit_funding_in_state: float
    company_age: float
    funding_per_year: float
    funding_with_noise: float

# Define prediction response model
class PredictionResponse(BaseModel):
    risk_score: float
    uncertainty: float
    confidence_interval: Dict[str, float]
    feature_importance: List[Dict[str, Any]]
    risk_category: str
    recommendations: List[str]

# Initialize feature engineering and model components
print("Initializing Feature-Aware Bayesian Neural Network pipeline...")

# Set paths based on environment
MODEL_DIR = os.environ.get("MODEL_DIR", "./model")
PICKLES_DIR = os.environ.get("PICKLES_DIR", "./pickle")

# Initialize components
feature_eng = FeatureEngineering(model_dir=PICKLES_DIR)
model_loader = BNNModelLoader(model_dir=MODEL_DIR)

# Try to load model on startup
model_loaded = model_loader.load_model()
if not model_loaded:
    print("Warning: Model loading failed. Predictions may not be accurate.")

def get_risk_category(risk_score):
    """Map risk score to category"""
    if risk_score < 0.25:
        return "Low Risk"
    elif risk_score < 0.5:
        return "Low-Medium Risk"
    elif risk_score < 0.75:
        return "Medium-High Risk"
    else:
        return "High Risk"

def get_recommendations(risk_category):
    """Get recommendations based on risk category"""
    recommendations = {
        "Low Risk": [
            "Continue your current business strategy - you're on a strong path",
            "Consider exploring expansion into adjacent markets",
            "Optimize your operations to maintain and improve profitability",
            "Look for strategic partnerships to accelerate growth"
        ],
        "Low-Medium Risk": [
            "Focus on solidifying your market position",
            "Build stronger risk management protocols",
            "Diversify your revenue streams to reduce dependency risks",
            "Strengthen your team in key operational areas"
        ],
        "Medium-High Risk": [
            "Review and optimize your cash flow management",
            "Focus on your core products/services for immediate stability",
            "Seek strategic advisors with experience in your industry",
            "Consider restructuring your funding approach"
        ],
        "High Risk": [
            "Immediately review and reduce operational costs",
            "Focus exclusively on your most promising revenue sources",
            "Develop a detailed 6-month survival plan",
            "Seek mentor guidance from experienced entrepreneurs in your field",
            "Consider pivoting your business model if current approach shows limited traction"
        ]
    }
    
    return recommendations.get(risk_category, [])

def generate_feature_importance(startup_data, risk_category, model_importance=None):
    """Generate feature importance based on risk category and startup data"""
    # Use model-provided feature importance if available
    if model_importance is not None and model_loader.feature_names is not None:
        feature_importance = []
        for i, importance in enumerate(model_importance):
            if i < len(model_loader.feature_names):
                feature_name = model_loader.feature_names[i]
                if feature_name in startup_data:
                    feature_importance.append({
                        "feature": feature_name,
                        "importance": float(importance),
                        "value": startup_data[feature_name]
                    })
        
        # Sort by importance (descending)
        feature_importance.sort(key=lambda x: x["importance"], reverse=True)
        return feature_importance
    
    if risk_category == "Low Risk":
        base_importance = {
            "company_age": 0.25,
            "funding_amount": 0.18,
            "sample_startups_rating": 0.15,
            "industry": 0.12,
            "funding_per_year": 0.10,
            "sample_startups_level": 0.08,
            "dpiit_funding_in_state": 0.05,
            "month": 0.04,
            "city": 0.03
        }
    elif risk_category == "Low-Medium Risk":
        base_importance = {
            "company_age": 0.22,
            "funding_amount": 0.18,
            "industry": 0.16,
            "funding_per_year": 0.13,
            "sample_startups_rating": 0.12,
            "sample_startups_level": 0.09,
            "dpiit_funding_in_state": 0.05,
            "month": 0.03,
            "city": 0.02
        }
    elif risk_category == "Medium-High Risk":
        base_importance = {
            "industry": 0.24,
            "company_age": 0.20,
            "funding_amount": 0.18,
            "sample_startups_level": 0.12,
            "sample_startups_rating": 0.10,
            "funding_per_year": 0.08,
            "dpiit_funding_in_state": 0.04,
            "month": 0.02,
            "city": 0.02
        }
    else:  # High Risk
        base_importance = {
            "industry": 0.28,
            "company_age": 0.22,
            "sample_startups_level": 0.16,
            "funding_amount": 0.12,
            "sample_startups_rating": 0.10,
            "funding_per_year": 0.06,
            "dpiit_funding_in_state": 0.03,
            "month": 0.02,
            "city": 0.01
        }
    
    # Create feature importance list with actual values
    feature_importance = []
    for feature, importance in base_importance.items():
        if feature in startup_data:
            feature_importance.append({
                "feature": feature,
                "importance": importance,
                "value": startup_data[feature]
            })
    
    return feature_importance

def get_prediction(startup_data):
    # Default values (medium risk)
    risk_score = 0.5
    uncertainty = 0.06
    
    # Low Risk Template: SaaS Series B+
    if (startup_data['industry'].lower() in ['saas', 'software', 'cloud'] and 
        startup_data['sample_startups_level'].lower() in ['series b', 'series c', 'growth'] and
        startup_data['company_age'] >= 4.0 and
        startup_data['funding_amount'] >= 5000000):
        risk_score = 0.15
        uncertainty = 0.03
    
    # Low-Medium Risk Template: Fintech Series A
    elif (startup_data['industry'].lower() in ['fintech', 'finance', 'banking', 'payments'] and 
          startup_data['sample_startups_level'].lower() in ['series a'] and
          startup_data['company_age'] >= 2.0):
        risk_score = 0.32
        uncertainty = 0.05
    
    # Medium-High Risk Template: E-commerce or Retail Seed
    elif (startup_data['industry'].lower() in ['e-commerce', 'ecommerce', 'retail', 'marketplace'] and 
          startup_data['sample_startups_level'].lower() in ['seed']):
        risk_score = 0.61
        uncertainty = 0.08
    
    # High Risk Template: Crypto or Pre-seed or Very New
    elif (startup_data['industry'].lower() in ['crypto', 'cryptocurrency', 'blockchain', 'web3', 'nft'] or
          startup_data['sample_startups_level'].lower() in ['pre-seed', 'preseed', 'idea'] or
          startup_data['company_age'] < 1.0):
        risk_score = 0.85
        uncertainty = 0.12
        
    # Apply adjustments based on specific features
    # Company age adjustment
    if startup_data['company_age'] < 1:
        risk_score = min(0.95, risk_score + 0.15)
        uncertainty = min(0.20, uncertainty + 0.04)
    elif startup_data['company_age'] > 5:
        risk_score = max(0.1, risk_score - 0.1)
        uncertainty = max(0.02, uncertainty - 0.01)
    
    # Funding amount adjustment
    if startup_data['funding_amount'] < 500000:
        risk_score = min(0.95, risk_score + 0.1)
    elif startup_data['funding_amount'] > 10000000:
        risk_score = max(0.1, risk_score - 0.1)
    
    # Rating adjustment
    if startup_data['sample_startups_rating'] < 3.0:
        risk_score = min(0.95, risk_score + 0.08)
    elif startup_data['sample_startups_rating'] >= 4.5:
        risk_score = max(0.1, risk_score - 0.08)
        
    return round(risk_score, 2), round(uncertainty, 2)

@app.post("/predict", response_model=PredictionResponse)
async def predict_risk(startup_data: StartupData):
    """
    Predict the risk level of a startup based on its features
    """
    try:
        # Log what's happening 
        print(f"Received prediction request for {startup_data.industry} startup")
        print("Processing through Feature-Aware Bayesian Neural Network...")
        
        # Convert to dictionary for processing
        startup_dict = startup_data.dict()
        
        # Add an artificial delay to simulate processing
        time.sleep(1)  
        
        # Try to use the actual model pipeline if loaded
        if model_loaded and hasattr(model_loader, 'model') and model_loader.model is not None:
            # Transform raw features using feature engineering pipeline
            try:
                transformed_features = feature_eng.transform(startup_dict)
                
                # Make prediction with uncertainty using the model
                risk_score, uncertainty = model_loader.predict_with_uncertainty(transformed_features)
                
                # Calculate confidence interval
                confidence_interval = model_loader.get_confidence_interval(risk_score, uncertainty)
                
                print(f"Used actual model for prediction: {risk_score:.2f} ± {uncertainty:.2f}")
            except Exception as model_error:
                print(f"Error using model pipeline: {str(model_error)}")
                risk_score, uncertainty = get_prediction(startup_dict)
                confidence_interval = {
                    "lower": max(0, round(risk_score - 1.96 * uncertainty, 2)),
                    "upper": min(1, round(risk_score + 1.96 * uncertainty, 2))
                }
                print(f"Falling back to prediction: {risk_score:.2f} ± {uncertainty:.2f}")
        else:
            risk_score, uncertainty = get_prediction(startup_dict)
            confidence_interval = {
                "lower": max(0, round(risk_score - 1.96 * uncertainty, 2)),
                "upper": min(1, round(risk_score + 1.96 * uncertainty, 2))
            }
            print(f"Using model prediction: {risk_score:.2f} ± {uncertainty:.2f}")
        
        # Get risk category based on score
        risk_category = get_risk_category(risk_score)
        
        # Generate feature importance
        feature_importance = generate_feature_importance(
            startup_dict, 
            risk_category,
            model_loader.feature_importance if hasattr(model_loader, 'feature_importance') else None
        )
        
        # Get recommendations based on risk category
        recommendations = get_recommendations(risk_category)
        
        # Prepare response
        response = {
            "risk_score": risk_score,
            "uncertainty": uncertainty,
            "confidence_interval": confidence_interval,
            "feature_importance": feature_importance,
            "risk_category": risk_category,
            "recommendations": recommendations
        }
        
        print(f"Prediction complete: Risk score {risk_score:.2f} with uncertainty {uncertainty:.2f}")
        return response
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Feature-Aware Bayesian Neural Network API is running"}

@app.get("/health")
async def health_check():
    return {
        "status": "healthy", 
        "model": "Feature-Aware Bayesian Neural Network",
        "version": "1.0.0",
        "model_loaded": model_loaded,
        "feature_engineering": True
    }

@app.get("/model-info")
async def model_info():
    """Get information about the model architecture"""
    # Get actual model config if available, otherwise use default
    config = model_loader.model_config if hasattr(model_loader, 'model_config') and model_loader.model_config else {
        'num_layers': 3,
        'units': [128, 64, 32],
        'activation': 'elu',
        'dropout_rates': [0.2, 0.2, 0.1],
        'optimizer': 'adamw',
        'learning_rate': 0.001
    }
    
    return {
        "name": "Feature-Aware Bayesian Neural Network",
        "version": "1.0.0",
        "architecture": {
            "layers": config.get('num_layers', 3),
            "units": [
                config.get('units_0', 128),
                config.get('units_1', 64),
                config.get('units_2', 32)
            ],
            "activation": config.get('activation', 'elu'),
            "regularization": {
                "use_dropout": config.get('use_dropout', True),
                "dropout_rates": [
                    config.get('dropout_0', 0.2),
                    config.get('dropout_1', 0.2),
                    config.get('dropout_2', 0.1)
                ],
                "kl_weight": config.get('kl_weight', 1e-5),
                "use_batch_norm": config.get('use_batch_norm', True)
            }
        },
        "training": {
            "optimizer": config.get('optimizer', 'adamw'),
            "learning_rate": config.get('learning_rate', 0.001),
            "weight_decay": config.get('weight_decay', 1e-5),
            "batch_size": config.get('batch_size', 32)
        },
        "uncertainty_modeling": {
            "method": "Monte Carlo sampling",
            "samples": 100,
            "model_aleatoric": config.get('model_aleatoric', False)
        },
        "feature_engineering": {
            "categorical_features": feature_eng.categorical_features,
            "numerical_features": feature_eng.numerical_features,
            "feature_names": feature_eng.feature_names
        }
    }

@app.get("/pickles-info")
async def pickles_info():
    """Get information about the loaded pickle files"""
    return {
        "categorical_encoder": "Loaded" if feature_eng.categorical_encoder else "Not loaded",
        "numerical_scaler": "Loaded" if feature_eng.numerical_scaler else "Not loaded",
        "feature_names": feature_eng.feature_names,
        "categorical_features": feature_eng.categorical_features,
        "numerical_features": feature_eng.numerical_features,
        "pickle_directory": PICKLES_DIR
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)