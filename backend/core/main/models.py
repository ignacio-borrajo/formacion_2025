from django.db import models

# Create your models here.

class Expense(models.Model):
    """
    Model representando un gasto
    """

    descripcion=models.CharField(max_length=255)
    limit=models.DecimalField(max_digits=10,decimal_places=2)
    date=models.DateField(auto_created=True)
    category=models.CharField(max_length=100,choices=[
        ('FOOD','Food'),
        ('TRAN','Transport'),
        ('ENTR','Entertainmente')
    ])

    def __str__(self):
        return f"{self.descripcion} - {self.limit} - {self.date} - {self.category}"
