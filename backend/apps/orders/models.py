from django.db import models

from apps.products.models import Product


class Order(models.Model):
    ORDER_STATUSES = (
        ('NEW', 'NEW'),
        ('PROCESSING', 'PROCESSING'),
        ('COMPLETED', 'COMPLETED'),
        ('CANCELED', 'CANCELED'),
    )
    DELIVERY_METHODS = (
        ('PICKUP', 'PICKUP'),
        ('DELIVERY', 'DELIVERY'),
    )
    customer_name = models.CharField(max_length=250,
                                     verbose_name='Name of customer')
    customer_phone = models.CharField(max_length=150,
                                      verbose_name='Customer phone')
    session_id = models.CharField(max_length=250,
                                  verbose_name='User session ID')
    status = models.CharField(
        max_length=100,
        verbose_name='Status',
        choices=ORDER_STATUSES)
    delivery_method = models.CharField(
        max_length=100,
        verbose_name='Delivery method',
        choices=DELIVERY_METHODS)
    total_amount = models.IntegerField(verbose_name='Total amount',
                                       default=0)
    full_address = models.CharField(max_length=450,
                                    verbose_name='Street, house, flat',
                                    blank=True,
                                    null=True)
    floor = models.IntegerField(verbose_name='Floor',
                                blank=True,
                                null=True)
    intercom = models.CharField(max_length=250,
                                verbose_name='Intercom',
                                blank=True,
                                null=True)

    class Meta:
        db_table = 'orders'
        verbose_name = 'order'
        verbose_name_plural = 'Orders'

    def __str__(self) -> str:
        return f'Order: {self.id}. Status: {self.status}'


class OrderProducts(models.Model):
    product = models.ForeignKey(Product,
                                on_delete=models.CASCADE,
                                verbose_name='Product')
    order = models.ForeignKey(Order,
                              on_delete=models.CASCADE,
                              verbose_name='Order',
                              related_name='products')
    quantity = models.IntegerField(verbose_name='Quantity')
    total_price = models.IntegerField(verbose_name='Total price of product')

    def save(self, *args, **kwargs):
        self.total_price = int(self.product.price_decimal * self.quantity)
        super().save(*args, **kwargs)

    class Meta:
        db_table = 'order_products'
        verbose_name = 'product'
        verbose_name_plural = 'Order Products'

    def __str__(self) -> str:
        return f'Order: {self.order}. Product: {self.product.name}'
