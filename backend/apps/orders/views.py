from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import OrderSerializer
from .models import Order
from .services import get_orders_by_session_id


class OrderViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    @action(detail=False,
            methods=['get'],
            url_path='get_orders_by_session_id/(?P<session_id>[0-9ф]+)')
    def session_id_orders(self, request, session_id):
        orders = get_orders_by_session_id(session_id)
        serializer = self.serializer_class(instance=orders, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
