from django.db import models
from django.db.models import Sum

#Manager personalizado, clase con la que django ejecuta las consultas
class ExpenseManager(models.Manager):

    #En este caso a los queryset reslizados con este manager
    def get_queryset(self):
        #Les add un annotate para sumar el numero de lineas del expense
         #Usando el related_name definido en el modelo expenselin hace un "join" y suma los 
        # amount de las lineas del pedido guardadolo como total
        return super().get_queryset().annotate(total=Sum("lines__amount"))