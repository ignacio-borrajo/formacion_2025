from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Expense(models.Model):
    """
    Model representando un gasto
    """

    descripcion=models.CharField(max_length=255, verbose_name=("Description"))
    limit=models.DecimalField(max_digits=10,decimal_places=2)
    date=models.DateField(auto_now_add=True)
    category=models.CharField(max_length=100,choices=[
        ('FOOD',_('Food')),
        ('TRAN',_('Transport')),
        ('ENTR',_('Entertainmente'))
    ])

    class Meta:
        verbose_name=("Expense")
        verbose_name_plural=("Expense")
        ordering=["-date"]
        

    def __str__(self):
        return f"{self.descripcion} - {self.limit} - {self.date} - {self.category}"


class Category(models.Model):
    """
    Modelo Representando la categoria a la que puede pertenecer un gasto
    """
    code=models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=40,unique=True,)
    descripcion=models.CharField(max_length=255, verbose_name=("Description"))


    class Meta:
        verbose_name=("Category")
        verbose_name_plural=("Categories")
        
   
    def __str__(self):
        return f"{self.name} - {self.code} - {self.descripcion}"