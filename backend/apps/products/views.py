from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import mixins, viewsets, status

from .models import Product
from .serializers import ProductSerializer


class ProductsViewSet(mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      viewsets.GenericViewSet):
    queryset = Product.objects.get_all()
    serializer_class = ProductSerializer

    @action(
        methods=['get'],
        detail=False,
    )
    def filter_by_category(self, request, category_id):
        products = Product.objects.get_by_category(category_id)
        if products is None:
            return Response({
                'error': 'No such products by provided data'
            }, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.serializer_class(
            many=True,
            instance=products
        )
        return Response(serializer.data, status=status.HTTP_200_OK)
