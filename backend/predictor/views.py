from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
import pickle
import re
import string
from nltk.corpus import stopwords
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(BASE_DIR, "..", "model.pkl")
VECTORIZER_PATH = os.path.join(BASE_DIR, "..", "vectorizer.pkl")

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

with open(VECTORIZER_PATH, "rb") as f:
    vectorizer = pickle.load(f)

try:
    stop_words = set(stopwords.words('english'))
except:
    stop_words = {
        'a', 'an', 'the', 'is', 'are', 'was', 'were',
        'to', 'of', 'in', 'on', 'for', 'and', 'or',
        'at', 'by', 'with'
    }


def clean_text(text):
    text = text.lower()
    text = re.sub(r'\d+', '', text)
    text = text.translate(str.maketrans('', '', string.punctuation))
    words = text.split()
    words = [word for word in words if word not in stop_words]
    return " ".join(words)


def home(request):
    return render(request, "index.html")


@api_view(['POST'])
def predict(request):
    message = request.data.get("message", "")

    cleaned = clean_text(message)
    vectorized = vectorizer.transform([cleaned])

    prediction = model.predict(vectorized)[0]

    result = "🚨 Spam" if prediction == 1 else "✅ Ham"

    return Response({
        "prediction": result
    })
