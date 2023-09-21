from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Product, ProductIngredient


class IngredientTabularInline(admin.TabularInline):
    model = ProductIngredient
    extra = 3


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'price', 'product_image']
    list_editable = ['category']
    list_display_links = ['id', 'name']
    inlines = [IngredientTabularInline]

    fieldsets = (
        ('Main', {'fields': ('name', 'category', 'price_decimal')}),
        ('Detail', {'fields': ('image', 'description')}),
        ('Weight', {'fields': ('weight_grams', 'weight_kilocalories')})
    )

    def product_image(self, instance):
        if instance.image:
            return mark_safe(f'<img src="{instance.image.url}" width="100" height="100" />')

    product_image.short_description = 'Product image'
