from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category_icon']
    list_display_links = ['id', 'name']
    search_fields = ['id', 'name']
    list_filter = ['id', 'name']

    def category_icon(self, instance):
        if instance.icon:
            return mark_safe(f'<img src="{instance.icon.url}" width="100" height="100" />')

    category_icon.short_description = 'Icon'
