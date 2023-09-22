from core.manager import BaseManager


class ProductManager(BaseManager):

    def get_all(self):
        return super().get_all().select_related(
            'category'
        ).prefetch_related(
            'ingredients'
        )
