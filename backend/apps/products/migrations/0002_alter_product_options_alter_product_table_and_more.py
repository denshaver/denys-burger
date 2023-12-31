# Generated by Django 4.2.5 on 2023-09-21 11:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ['price_decimal'], 'verbose_name': 'product', 'verbose_name_plural': 'Products'},
        ),
        migrations.AlterModelTable(
            name='product',
            table='products',
        ),
        migrations.CreateModel(
            name='ProductIngredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingredient', models.CharField(max_length=250, verbose_name='Ingredient')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='compositions', to='products.product', verbose_name='Product')),
            ],
            options={
                'verbose_name': 'ingredient',
                'verbose_name_plural': 'Ingredients',
                'db_table': 'products_ingredients',
            },
        ),
    ]
