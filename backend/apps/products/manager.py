from core.manager import BaseManager


class ProductManager(BaseManager):

    def get_all(self):
        return super().get_all().select_related(
            'category'
        ).prefetch_related(
            'ingredients'
        )

    def get_by_category(self, category_id):
        return self.filter_by_data({
            'category_id': category_id
        })
