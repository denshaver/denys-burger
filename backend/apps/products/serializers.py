from rest_framework import serializers

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'description',
                  'image', 'price_decimal', 'weight_grams',
                  'weight_kilocalories']
