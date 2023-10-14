from django.contrib import admin

from .models import Order, OrderProducts


class OrderProductsTabularInline(admin.TabularInline):
    model = OrderProducts
    extra = 2


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'total_amount', 'status', 'delivery_method']
    list_display_links = ['id']
    list_editable = ['status', 'delivery_method']
    search_fields = ['id', 'total_amount', 'status', 'delivery_method']
    list_filter = ['status', 'delivery_method']
    inlines = [OrderProductsTabularInline]

    fieldsets = (
        ('Main', {'fields': ('customer_name',
                             'customer_phone',
                             'status',
                             'delivery_method',
                             'total_amount',
                             'session_id')}),
        ('Shipping info', {'fields': (
            'full_address',
            'floor',
            'intercom')})
    )
