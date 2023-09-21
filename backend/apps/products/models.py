from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=150,
                            verbose_name='Product name')
    description = models.TextField(max_length=10000,
                                   verbose_name='Description',
                                   blank=True,
                                   null=True)
    image = models.ImageField(upload_to='images/products/',
                              verbose_name='Image')
    price_decimal = models.DecimalField(default=0,
                                        max_digits=10,
                                        decimal_places=2,
                                        verbose_name='Product price (Decimal)')
    weight_grams = models.IntegerField(default=0,
                                       verbose_name='Weight in grams')
    weight_kilocalories = models.IntegerField(default=0,
                                              verbose_name='Weight in kilocalories')

    class Meta:
        db_table = 'products'
        verbose_name = 'product'
        verbose_name_plural = 'Products'
        ordering = ['price_decimal']

    def __str__(self):
        return f'Product: {self.name}. Price'

    @property
    def price(self):
        return int(self.price_decimal)


class ProductIngredient(models.Model):
    product = models.ForeignKey(Product,
                                on_delete=models.CASCADE,
                                verbose_name='Product',
                                related_name='compositions')
    ingredient = models.CharField(max_length=250,
                                  verbose_name='Ingredient')

    class Meta:
        db_table = 'products_ingredients'
        verbose_name = 'ingredient'
        verbose_name_plural = 'Ingredients'

    def __str__(self):
        return f'Ingredient: {self.ingredient} of "{self.product.name}"'
