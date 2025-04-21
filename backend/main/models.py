from django.db import models


class Expense(models.Model):
    """
    Model representing an expense.
    """

    description = models.CharField(max_length=255)
    limit = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    date = models.DateTimeField(auto_created=True)
    category = models.CharField(
        max_length=100,
        choices=[
            ("FOOD", "Food"),
            ("TRAN", "Transport"),
            ("ENTR", "Entertainment"),
            ("UTIL", "Utilities"),
            ("OTHR", "Other"),
        ],
    )

    def __str__(self):
        return f"{self.description}"
