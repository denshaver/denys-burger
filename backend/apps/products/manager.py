from core.manager import BaseManager


class ProductManager(BaseManager):

    def get_all(self):
        return super().get_all().select_related(
            'category'
        )

    def filter_by_data(self, data):
        queryset = super().filter_by_data(data)
        if queryset is not None:
            queryset = queryset.select_related(
                'category'
            )
        return queryset

    def get_by_category(self, category_id):
        return self.filter_by_data({
            'category_id': category_id
        })
