from django.db import models


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
