from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.


class Category(models.Model):
    """
    Modelo Representando la categoria a la que puede pertenecer un gasto
    """
    code=models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=40,unique=True,)
    descripcion=models.CharField(max_length=255, verbose_name=("Description"))

    @classmethod
    def get_default_pk(cls):
        category,create = cls.objects.get_or_create(
            name="Base",
            descripcion="Falta Categoria por defecto"
        )
        return category.code


    class Meta:
        verbose_name=("Category")
        verbose_name_plural=("Categories")
        
   
    def __str__(self):
        return f"{self.name} - {self.code} - {self.descripcion}"

class Expense(models.Model):
    """
    Model representando un gasto
    """

    descripcion=models.CharField(max_length=255, verbose_name=("Description"))
    limit=models.DecimalField(max_digits=10,decimal_places=2)
    date=models.DateField(auto_now_add=True)
  

    category=models.ForeignKey(Category,on_delete=models.CASCADE,default=Category.get_default_pk)

    class Meta:
        verbose_name=("Expense")
        verbose_name_plural=("Expense")
        ordering=["-date"]
        

    def __str__(self):
        return f"{self.descripcion} - {self.limit} - {self.date} - {self.category}"
    

class ExpenseLin(models.Model):
    """
    Model representing an expense line.
    """
    #Creo el campo expense como foreign key
    #Defino un "alias" para aplicar agrupaciones a lin desde la expense
    expense = models.ForeignKey(
        Expense,
        on_delete=models.CASCADE,
        related_name="lines",
        verbose_name=_("Expense"),
    )
    description = models.CharField(
        max_length=255,
        verbose_name=_("Description"),
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name=_("Amount"),
    )
    date = models.DateTimeField(
        verbose_name=_("Date"),
    )

    class Meta:
        verbose_name = _("Expense Line")
        verbose_name_plural = _("Expense Lines")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.description}"


