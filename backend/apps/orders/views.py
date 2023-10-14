from rest_framework import viewsets, mixins
from rest_framework.decorators import action

from .serializers import OrderSerializer
from .models import Order


class OrderViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    


