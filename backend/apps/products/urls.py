from django.urls import path, include

from .views import ProductsAPIView


urlpatterns = [
    path('', ProductsAPIView.as_view())
]
