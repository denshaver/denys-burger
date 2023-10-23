from rest_framework import serializers

from .models import Order, OrderProducts


class OrderProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderProducts
        fields = '__all__'
        read_only_fields = ['order', 'total_amount', 'total_price']


class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'
        read_only_fields = ['total_amount']

    def create(self, validated_data):
        products_data = validated_data.pop('products')

        delivery_fields = ['full_address', 'floor', 'intercom']
        if validated_data['delivery_method'] == 'PICKUP':
            for field in delivery_fields:
                del validated_data[field]

        order = Order.objects.create(**validated_data)

        order_products: list[OrderProducts] = []

        for product_data in products_data:
            prod = OrderProducts.objects.create(order=order, **product_data)
            order_products.append(prod)

        for product in order_products:
            order.total_amount += product.total_price

            order.save()

        return order
