from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, ListAPIView

from .models import Product
from .serializers import ProductSerializer


class ProductsAPIView(ListAPIView):
    queryset = Product.objects.get_all()
    serializer_class = ProductSerializer
