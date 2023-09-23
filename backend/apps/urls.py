from django.urls import path, include

urlpatterns = [
    path('products/', include('apps.products.urls')),
    path('categories/', include('apps.categories.urls'))
]
