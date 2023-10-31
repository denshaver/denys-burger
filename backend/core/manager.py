from django.db import models
from django.db.models import QuerySet


class BaseManager(models.Manager):

    def get_all(self):
        return self.all()

    def filter_by_data(self, data):
        """Returns filtered queryset by
        data dict. In data dict must be
        provided names of model fields
        and values of them for filtering.
        If an Exception will be raised,
        method will return None instead of
        queryset.

        For example: {'name': 'Yummy burger', 'category_id': 2}

        :param data: dict with data for queryset filtering
        :return: QuerySet or None
        """
        try:
            return self.filter(**data)
        except (Exception,):
            return None

    def get_one_by_id(self, instance_id):
        return self.filter_by_data({'id': instance_id}).get()

    @classmethod
    def get_query_with_prefetch(
            cls,
            queryset: QuerySet,
            prefetched: list
    ):
        """
        This method returns query with
        'prefetch_related' method is calling
        for optimization when it's needed. We
        don't need to call it in every place,
        cause 'prefetch_related' in places
        where we don't need it, this method can
        create more unnecessary queries.

        In 'prefetched' list you can provide something
        like this: ['ingredients'] or
        [Prefetch('ingredients', queryset=Ingredients.objects.filter(id__gte=3)]


        :param queryset: QuerySet object
        :param prefetched: list with 'str' or 'Prefetch' objects.
        """
        return queryset.prefetch_related(*prefetched)
