import requests
import json

def test_api():
    """Test the API with different startup profiles"""
    base_url = "http://localhost:8000"
    
    # Check if API is running
    try:
        response = requests.get(f"{base_url}/health")
        if response.status_code != 200:
            print(f"API health check failed with status code {response.status_code}")
            return
        print("API is healthy!")
        
        # Get model info
        response = requests.get(f"{base_url}/model-info")
        print("\nModel information:")
        print(json.dumps(response.json(), indent=2))
        
    except Exception as e:
        print(f"Error connecting to API: {e}")
        return
    
    # Test cases
    test_cases = [
        {
            "name": "Low Risk SaaS Startup",
            "data": {
                "city": "Bangalore",
                "industry": "SaaS",
                "sample_startups_level": "Series B",
                "sample_startups_rating": 4.8,
                "sample_startups_publishedon": "2021-03-15",
                "sample_startups_registeredon": "2021-02-28",
                "founded": "2018-06-10",
                "funding_amount": 12500000,
                "month": 70,
                "dpiit_funding_in_state": 18700000000,
                "company_age": 5.8,
                "funding_per_year": 2155172,
                "funding_with_noise": 2160000
            }
        },
        {
            "name": "Medium Risk E-commerce Startup",
            "data": {
                "city": "Delhi",
                "industry": "E-commerce",
                "sample_startups_level": "Seed",
                "sample_startups_rating": 3.5,
                "sample_startups_publishedon": "2023-04-10",
                "sample_startups_registeredon": "2023-03-25",
                "founded": "2022-09-05",
                "funding_amount": 900000,
                "month": 18,
                "dpiit_funding_in_state": 9800000000,
                "company_age": 1.5,
                "funding_per_year": 600000,
                "funding_with_noise": 610000
            }
        },
        {
            "name": "High Risk Crypto Startup",
            "data": {
                "city": "Hyderabad",
                "industry": "Cryptocurrency",
                "sample_startups_level": "Pre-seed",
                "sample_startups_rating": 2.6,
                "sample_startups_publishedon": "2023-12-15",
                "sample_startups_registeredon": "2023-11-30",
                "founded": "2023-10-20",
                "funding_amount": 180000,
                "month": 6,
                "dpiit_funding_in_state": 6400000000,
                "company_age": 0.5,
                "funding_per_year": 360000,
                "funding_with_noise": 370000
            }
        },
        {
            "name": "Custom HealthTech Startup",
            "data": {
                "city": "Pune",
                "industry": "HealthTech",
                "sample_startups_level": "Series A",
                "sample_startups_rating": 4.1,
                "sample_startups_publishedon": "2022-06-20",
                "sample_startups_registeredon": "2022-05-15",
                "founded": "2021-02-25",
                "funding_amount": 3500000,
                "month": 25,
                "dpiit_funding_in_state": 8500000000,
                "company_age": 2.2,
                "funding_per_year": 1590909,
                "funding_with_noise": 1600000
            }
        }
    ]
    
    # Run tests
    for test in test_cases:
        print(f"\n--- Testing {test['name']} ---")
        try:
            response = requests.post(f"{base_url}/predict", json=test["data"])
            if response.status_code == 200:
                result = response.json()
                print(f"Risk Score: {result['risk_score']:.2f} ± {result['uncertainty']:.2f}")
                print(f"Confidence Interval: [{result['confidence_interval']['lower']:.2f}, {result['confidence_interval']['upper']:.2f}]")
                print(f"Risk Category: {result['risk_category']}")
                print("\nTop 3 Feature Importance:")
                for feature in result['feature_importance'][:3]:
                    print(f"  {feature['feature']}: {feature['importance']:.2f}")
                print("\nRecommendations:")
                for rec in result['recommendations'][:2]:
                    print(f"  • {rec}")
            else:
                print(f"API request failed with status code {response.status_code}")
                print(response.text)
        except Exception as e:
            print(f"Error during API request: {e}")

if __name__ == "__main__":
    test_api()