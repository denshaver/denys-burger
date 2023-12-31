# Generated by Django 4.2.5 on 2023-10-14 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer_name',
            field=models.CharField(default=1, max_length=250, verbose_name='Name of customer'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='customer_phone',
            field=models.CharField(default=1, max_length=150, verbose_name='Customer phone'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='floor',
            field=models.IntegerField(blank=True, null=True, verbose_name='Floor'),
        ),
        migrations.AddField(
            model_name='order',
            name='full_address',
            field=models.CharField(blank=True, max_length=450, null=True, verbose_name='Street, house, flat'),
        ),
        migrations.AddField(
            model_name='order',
            name='intercom',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Intercom'),
        ),
    ]
