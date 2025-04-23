from django.db import models
from django.db.models import Sum

class ExpenseManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset().annotate(total=Sum("lines__amount"))