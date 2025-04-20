import os
import pickle
import numpy as np
import pandas as pd
from typing import Dict, Any, List, Tuple, Optional, Union

class FeatureEngineering:
    """
    Feature Engineering class to preprocess and transform input features
    for the Bayesian Neural Network model.
    
    This class handles:
    1. Loading saved preprocessing transformers from pickle files
    2. Transforming categorical variables
    3. Normalizing/scaling numerical features
    4. Feature selection based on importance
    """
    
    def __init__(self, model_dir: str = './pickle'):
        """
        Initialize the feature engineering pipeline.
        
        Args:
            model_dir: Directory containing pickle files for transformers
        """
        self.model_dir = model_dir
        self.categorical_encoder = None
        self.numerical_scaler = None
        self.feature_names = None
        self.categorical_features = None
        self.numerical_features = None
        
        # Load transformers from pickle files
        self._load_transformers()
        
    def _load_transformers(self) -> None:
        """Load categorical and numerical transformers from pickle files"""
        try:
            # Load categorical encoder
            categorical_path = os.path.join(self.model_dir, 'categorical_encoder.pkl')
            if os.path.exists(categorical_path):
                with open(categorical_path, 'rb') as f:
                    self.categorical_encoder = pickle.load(f)
                print(f"Loaded categorical encoder from {categorical_path}")
            
            # Load numerical scaler
            numerical_path = os.path.join(self.model_dir, 'numerical_scaler.pkl')
            if os.path.exists(numerical_path):
                with open(numerical_path, 'rb') as f:
                    self.numerical_scaler = pickle.load(f)
                print(f"Loaded numerical scaler from {numerical_path}")
            
            # Load feature information if available
            feature_info_path = os.path.join(self.model_dir, 'feature_info.pkl')
            if os.path.exists(feature_info_path):
                with open(feature_info_path, 'rb') as f:
                    feature_info = pickle.load(f)
                    self.feature_names = feature_info.get('names', [])
                    self.categorical_features = feature_info.get('categorical_features', [])
                    self.numerical_features = feature_info.get('numerical_features', [])
                print(f"Loaded feature information from {feature_info_path}")
            else:
                # Default values if no feature info file is available
                self.categorical_features = ['city', 'industry', 'sample_startups_level']
                self.numerical_features = [
                    'sample_startups_rating', 'funding_amount', 'month',
                    'dpiit_funding_in_state', 'company_age', 'funding_per_year',
                    'funding_with_noise'
                ]
                self.feature_names = self.categorical_features + self.numerical_features
                
        except Exception as e:
            print(f"Error loading transformers: {str(e)}")
            # Set default behavior if transformers can't be loaded
            self.categorical_encoder = None
            self.numerical_scaler = None
    
    def transform(self, startup_data: Dict[str, Any]) -> np.ndarray:
        """
        Transform raw startup data into model-ready features.
        
        Args:
            startup_data: Dictionary containing raw startup features
            
        Returns:
            Numpy array of transformed features ready for model prediction
        """
        # Convert input dict to DataFrame for easier processing
        df = pd.DataFrame([startup_data])
        
        # Process categorical features
        if self.categorical_encoder and self.categorical_features:
            try:
                cat_features = df[self.categorical_features].astype(str)
                encoded_cats = self.categorical_encoder.transform(cat_features)
                
                # If encoder returns sparse matrix, convert to dense
                if hasattr(encoded_cats, 'toarray'):
                    encoded_cats = encoded_cats.toarray()
            except Exception as e:
                print(f"Warning: Could not transform categorical features: {str(e)}")
                # Fallback to zeros if transformation fails
                encoded_cats = np.zeros((1, 
                    len(self.categorical_features) if isinstance(self.categorical_encoder, dict) 
                    else self.categorical_encoder.get_feature_names_out().shape[0])
                )
        else:
            # If no encoder available, just use zeros as placeholder
            encoded_cats = np.zeros((1, len(self.categorical_features) if self.categorical_features else 0))
        
        # Process numerical features
        if self.numerical_scaler and self.numerical_features:
            try:
                num_features = df[self.numerical_features].values
                scaled_nums = self.numerical_scaler.transform(num_features)
            except Exception as e:
                print(f"Warning: Could not scale numerical features: {str(e)}")
                # Fallback to the original values if scaling fails
                scaled_nums = df[self.numerical_features].values
        else:
            # If no scaler available, use raw values
            scaled_nums = df[self.numerical_features].values if self.numerical_features else np.array([])
        
        # Combine categorical and numerical features
        if len(encoded_cats.shape) > 1 and encoded_cats.shape[1] > 0:
            if len(scaled_nums.shape) > 1 and scaled_nums.shape[1] > 0:
                transformed_features = np.hstack([encoded_cats, scaled_nums])
            else:
                transformed_features = encoded_cats
        else:
            transformed_features = scaled_nums
        
        print(f"Transformed input data from {len(startup_data)} features to {transformed_features.shape[1]} model features")
        return transformed_features
    
    def inverse_transform(self, X: np.ndarray) -> Dict[str, Any]:
        """
        Convert model-space features back to original feature space.
        
        Args:
            X: Transformed features
            
        Returns:
            Dictionary of features in original space
        """
        # This is a placeholder and would be implemented based on your specific transformers
        # For many transformers like one-hot encoders, inverse transformation is not straightforward
        # For now, return empty dict as this is primarily used for model inference, not for reverse engineering
        return {}
    
    def get_feature_names(self) -> List[str]:
        """Get the names of the transformed features"""
        if self.feature_names:
            return self.feature_names
        else:
            # Return default names if no specific names are available
            return [f"feature_{i}" for i in range(10)]  # Default to 10 features