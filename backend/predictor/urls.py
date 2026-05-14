from django.urls import path
from predictor.views import home, predict

urlpatterns = [
    path('', home),
    path('predict/', predict),
]
