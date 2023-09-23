from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Category
from .serializers import CategorySerializer


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.get_all()
    serializer_class = CategorySerializer


class CategoryRetrieveAPIView(RetrieveAPIView):
    queryset = Category.objects.get_all()
    serializer_class = CategorySerializer
