from django.urls import path

from .views import CategoryListAPIView, CategoryRetrieveAPIView

urlpatterns = [
    path('', CategoryListAPIView.as_view()),
    path('<int:pk>/', CategoryRetrieveAPIView.as_view())
]
