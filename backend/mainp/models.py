from django.db import models

# Create your models here.
class Expense(models.Model):
    """
    Model representing an expense
    """
    description = models.CharField(max_length=255)
    limit = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    date = models.DateField(auto_created=True)
    category = models.CharField(max_length=100, 
        choices=[
            ('FOOD', 'Food'),
            ('TRANS', 'Transport'),
            ('ENTR', 'Entretainment'),
            ('UTIL', 'Utilities'),
            ('OTHR', 'Other'),
        ],
    )

    def __str__(self):
        return f"{self.description} - {self.limit} - {self.date} - {self.category}"