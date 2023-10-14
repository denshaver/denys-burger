from rest_framework import serializers

from .models import Order, OrderProducts


class OrderProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderProducts
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        order = Order.objects.create(**validated_data)

        for product_data in products_data:
            OrderProducts.objects.create(order=order, **product_data)

        return order
