from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100,
                            verbose_name='Name')
    icon = models.ImageField(upload_to='images/categories/',
                             verbose_name='Category icon',
                             null=True,
                             blank=True)
    slug = models.SlugField(unique=True,
                            blank=True,
                            null=True)

    class Meta:
        db_table = 'categories'
        verbose_name = 'category'
        verbose_name_plural = 'Categories'
        ordering = ['-id']

    def __str__(self):
        return f'Category: {self.name}'

    def save(self, *args, **kwargs):
        if self._state.adding and not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
