from rest_framework import serializers

from .models import Product, ProductIngredient


class ProductIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductIngredient
        fields = ['ingredient']


class ProductSerializer(serializers.ModelSerializer):
    ingredients = ProductIngredientSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'description',
                  'image', 'price_decimal', 'weight_grams',
                  'weight_kilocalories', 'ingredients']
        
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ingredients = []
        for ingredient in ret['ingredients']:
            ingredients.append(ingredient['ingredient'])
        ret['ingredients'] = ingredients
        return ret
