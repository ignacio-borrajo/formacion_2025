from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Expense(models.Model):
    """
    Model representing an expense
    """
    description = models.CharField(max_length=255, verbose_name =_("Description"))
    limit = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, verbose_name =_("Limit"))
    date = models.DateField(auto_now_add=True, verbose_name =_("Date"))
    category = models.CharField(max_length=100, 
        choices=[
            ('FOOD', _('Food')),
            ('TRANS', _('Transport')),
            ('ENTR', _('Entretainment')),
            ('UTIL', _('Utilities')),
            ('OTHR', _('Other')),
        ],
    verbose_name =_("Category"))

    class Meta:
        verbose_name =_("Expense")
        verbose_name_plural =_("Expenses")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.description} - {self.limit} - {self.date} - {self.category}"
    

    class Category (models.Model):
        pass
    class ExpenseLin(models.Model):
        pass