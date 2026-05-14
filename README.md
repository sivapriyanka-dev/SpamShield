# SpamShield – AI-Powered SMS Spam Detection

![Python](https://img.shields.io/badge/Python-3.14-blue?logo=python)
![Django](https://img.shields.io/badge/Django-Backend-green?logo=django)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-38B2AC?logo=tailwindcss)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?logo=scikitlearn)
![NLP](https://img.shields.io/badge/NLP-Text%20Processing-green)
![Model](https://img.shields.io/badge/Model-MultinomialNB-red)
![Accuracy](https://img.shields.io/badge/Accuracy-97.13%25-brightgreen)
![Deployment](https://img.shields.io/badge/Deployment-Render-purple)

## Project Overview

**SpamShield** is a full-stack AI-powered web application that detects whether an SMS message is **Spam** or **Ham (Safe)** using Natural Language Processing and Machine Learning.

The project began as an NLP classification model and was later transformed into a production-ready full-stack web application with a modern responsive user interface.

Users can paste suspicious SMS messages and instantly receive spam detection predictions through a live deployed web application.

---

## Live Demo

🚀 https://sms-spam-detector-kzfg.onrender.com

---

## Features

- AI-powered SMS spam detection
- Real-time message classification
- NLP text preprocessing pipeline
- TF-IDF vectorization
- Multinomial Naive Bayes classification
- REST API backend using Django REST Framework
- Modern responsive frontend built with React
- Beautiful UI designed using Tailwind CSS + Stitch-inspired design
- Full-stack deployment on Render
- Production-ready frontend/backend integration

---

## Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS
- Lucide React Icons
- Vite

### Backend
- Python
- Django
- Django REST Framework
- django-cors-headers

### Machine Learning / NLP
- Pandas
- NumPy
- NLTK
- Scikit-learn
- TF-IDF Vectorizer
- Multinomial Naive Bayes

### Deployment
- Render

---

## Dataset

**SMS Spam Collection Dataset**

Dataset contains:

- 5,572 SMS messages
- Real-world spam/ham labeled messages
- Binary classification dataset

---

## NLP Pipeline

SMS Message Input  
→ Lowercase Conversion  
→ Remove Numbers  
→ Remove Punctuation  
→ Stopword Removal  
→ TF-IDF Vectorization  
→ Multinomial Naive Bayes Prediction  
→ Spam / Ham Output

---

## Model Performance

**Accuracy: 97.13%**

Model used:

**Multinomial Naive Bayes**

---

## Results

<img width="759" height="585" alt="image" src="https://github.com/user-attachments/assets/b5e2b8c2-7ec3-46a6-9b33-0be92d13e2fb" />
<img width="752" height="589" alt="image" src="https://github.com/user-attachments/assets/b625792c-ccfb-4cac-9c77-5affd5a1c243" />

---

## UI Preview

### Web Application Interface

<img width="1390" height="896" alt="image" src="https://github.com/user-attachments/assets/e8b1b703-ccf3-499d-851d-a292e911950f" />
<img width="781" height="933" alt="image" src="https://github.com/user-attachments/assets/33faca33-065b-49bc-abbf-20d4d731137e" />


---

## Example Predictions

**Spam**
```text
Congratulations! You won a free iPhone. Click now!
```

Result:
```text
🚨 Spam
```

**Ham**
```text
Hey, where are you? Call me when you're free.
```

Result:
```text
✅ Ham
```

---

## Project Structure

```bash
spamshield/
│
├── backend/
│   ├── config/
│   ├── predictor/
│   ├── model.pkl
│   ├── vectorizer.pkl
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── spam_classifier.py
├── README.md
```

---

## Run Locally

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

## Production Deployment

Frontend + Backend deployed on **Render**

Deployment includes:

- React frontend build using Vite
- Django backend hosting
- Static asset serving
- ML model pickle loading
- API integration
- Production build automation

---

## Future Improvements

- Email spam detection
- URL phishing detection
- User authentication
- Spam history dashboard
- Dark mode UI
- Mobile-first PWA version
- Confidence score display

---

## Author

### Siva Priyanka

GitHub: https://github.com/sivapriyanka-dev

Passionate about Machine Learning, NLP, full-stack development, and building real-world AI applications 🚀
