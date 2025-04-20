import os
import pickle
import numpy as np
import tensorflow as tf
import joblib
from typing import Dict, Any, List, Tuple, Optional, Union

class BNNModelLoader:
    """
    Handles loading and prediction for the Feature-Aware Bayesian Neural Network model
    from saved files.
    """
    
    def __init__(self, model_dir: str = './model'):
        """
        Initialize the model loader.
        
        Args:
            model_dir: Directory containing model files
        """
        self.model_dir = model_dir
        self.model = None
        self.calibrator = None
        self.feature_importance = None
        self.feature_names = None
        self.model_config = None
        
        # Default configuration in case no saved config is found
        self.default_config = {
            'num_layers': 3,
            'units_0': 128, 
            'units_1': 64,
            'units_2': 32,
            'activation': 'elu',
            'kl_weight': 1e-5,
            'prior_sigma': 1.0,
            'use_dropout': True,
            'dropout_0': 0.2,
            'dropout_1': 0.2,
            'dropout_2': 0.1,
            'use_batch_norm': True,
            'batch_norm_input': True,
            'input_dropout': 0.1,
            'use_residuals': True,
            'use_attention': False,
            'model_aleatoric': False,
            'use_huber_loss': True,
            'huber_delta': 0.1,
            'optimizer': 'adamw',
            'learning_rate': 0.001,
            'weight_decay': 1e-5,
            'batch_size': 32
        }
    
    def load_model(self) -> bool:
        """
        Load the Bayesian NN model and related files.
        
        Returns:
            True if successful, False otherwise
        """
        try:
            # Try to load the TensorFlow model
            model_path = os.path.join(self.model_dir, "feature_aware_bnn")
            if os.path.exists(model_path):
                print(f"Loading model from {model_path}")
                self.model = tf.keras.models.load_model(model_path, compile=False)
                print("Model loaded successfully")
            else:
                print(f"Warning: Model not found at {model_path}")
                return False
            
            # Load calibrator
            calibrator_path = os.path.join(self.model_dir, "calibrator.pkl")
            if os.path.exists(calibrator_path):
                print(f"Loading calibrator from {calibrator_path}")
                self.calibrator = joblib.load(calibrator_path)
                print("Calibrator loaded successfully")
            
            # Load feature importance data
            feature_data_path = os.path.join(self.model_dir, "feature_data.pkl")
            if os.path.exists(feature_data_path):
                print(f"Loading feature data from {feature_data_path}")
                feature_data = joblib.load(feature_data_path)
                self.feature_names = feature_data.get('names', [])
                self.feature_importance = feature_data.get('importance', None)
                print(f"Loaded information for {len(self.feature_names)} features")
            
            # Load model configuration
            config_path = os.path.join(self.model_dir, "model_config.pkl")
            if os.path.exists(config_path):
                print(f"Loading model config from {config_path}")
                self.model_config = joblib.load(config_path)
                print("Model configuration loaded successfully")
            else:
                self.model_config = self.default_config
                print("Using default model configuration")
            
            return True
            
        except Exception as e:
            print(f"Error loading model: {str(e)}")
            return False
    
    def predict_with_uncertainty(self, X: np.ndarray, num_samples: int = 100) -> Tuple[float, float]:
        """
        Predict with the Bayesian Neural Network and get uncertainty estimates.
        
        Args:
            X: Preprocessed input features
            num_samples: Number of Monte Carlo samples for uncertainty estimation
            
        Returns:
            Tuple of (risk_score, uncertainty)
        """
        if self.model is None:
            print("Model not loaded. Loading now...")
            success = self.load_model()
            if not success:
                print("Failed to load model. Returning default prediction.")
                return 0.5, 0.1  # Default values
        
        try:
            # Perform Monte Carlo sampling for uncertainty estimation
            predictions = []
            
            for _ in range(num_samples):
                # Get prediction with training=True to enable dropout for MC sampling
                pred = self.model(X, training=True)
                predictions.append(pred)
            
            # Stack predictions and compute mean and std
            predictions = tf.stack(predictions, axis=0)
            mean_pred = tf.reduce_mean(predictions, axis=0).numpy().flatten()[0]
            std_pred = tf.math.reduce_std(predictions, axis=0).numpy().flatten()[0]
            
            # Apply calibration if available
            if self.calibrator is not None:
                calibrated_pred = self.calibrator.predict([[mean_pred]])[0]
                mean_pred = calibrated_pred
            
            return mean_pred, std_pred
            
        except Exception as e:
            print(f"Error during prediction: {str(e)}")
            return 0.5, 0.1  # Default values in case of error

    def get_confidence_interval(self, mean: float, std: float, confidence: float = 0.95) -> Dict[str, float]:
        """
        Calculate confidence interval for the prediction.
        
        Args:
            mean: Mean prediction
            std: Standard deviation of prediction
            confidence: Confidence level (default 0.95 for 95% confidence)
            
        Returns:
            Dictionary with lower and upper bounds
        """
        # For 95% confidence, use z-score of 1.96
        z_score = 1.96
        
        lower = max(0, mean - z_score * std)
        upper = min(1, mean + z_score * std)
        
        return {
            "lower": round(lower, 2),
            "upper": round(upper, 2)
        }

# Function to integrate the feature engineering and model loading
def load_and_prepare_prediction_pipeline():
    """
    Load and prepare the complete prediction pipeline including
    feature engineering and model loading.
    
    Returns:
        Tuple of (feature_engineering, model_loader)
    """
    from feature_engineering import FeatureEngineering
    
    # Load feature engineering components
    feature_eng = FeatureEngineering(model_dir='./pickles')
    
    # Load model
    model_loader = BNNModelLoader(model_dir='./model')
    success = model_loader.load_model()
    
    if success:
        print("Prediction pipeline loaded successfully")
    else:
        print("Warning: Issues encountered while loading the prediction pipeline")
    
    return feature_eng, model_loader