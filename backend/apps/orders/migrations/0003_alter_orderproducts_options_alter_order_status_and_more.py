# Generated by Django 4.2.5 on 2023-10-14 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_order_customer_name_order_customer_phone_order_floor_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orderproducts',
            options={'verbose_name': 'product', 'verbose_name_plural': 'Order Products'},
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('NEW', 'NEW'), ('PROCESSING', 'PROCESSING'), ('COMPLETED', 'COMPLETED'), ('CANCELED', 'CANCELED')], max_length=100, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='order',
            name='total_amount',
            field=models.IntegerField(verbose_name='Total amount'),
        ),
    ]
