# SMS Spam Detector using NLP

![Python](https://img.shields.io/badge/Python-3.14-blue?logo=python)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?logo=scikitlearn)
![NLP](https://img.shields.io/badge/NLP-Text%20Processing-green)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-purple?logo=pandas)
![Model](https://img.shields.io/badge/Model-MultinomialNB-red)
![Accuracy](https://img.shields.io/badge/Accuracy-97.13%25-brightgreen)

## Project Overview

A machine learning NLP project that detects whether an SMS message is spam or ham.

## Dataset

SMS Spam Collection Dataset

- 5572 SMS messages
- Real-world dataset

## Technologies Used

- Python
- Pandas
- NLTK
- Scikit-learn
- Matplotlib
- Seaborn

## NLP Pipeline

Text Cleaning
→ Stopword Removal
→ TF-IDF Vectorization
→ Train/Test Split
→ Multinomial Naive Bayes
→ Prediction

## Model Performance

Accuracy: 97.13%

## Results

(Insert screenshots)

## Example Predictions

"Congratulations! You won ₹10000" → Spam
"Hey where are you?" → Ham

## Run Locally

```bash
pip install -r requirements.txt
python spam_classifier.py
```
