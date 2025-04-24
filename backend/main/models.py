from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from main.managers import ExpensesManager

UserModel = get_user_model()

class Expense(models.Model):
    """
    Model representing an expense.
    """

    description = models.CharField(
        max_length=255,
        verbose_name=_("Description"),
    )
    limit = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
        verbose_name=_("Limit"),
    )
    date = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_("Date"),
    )
    category = models.CharField(
        max_length=100,
        choices=[
            ("FOOD", _("Food")),
            ("TRAN", _("Transport")),
            ("ENTR", _("Entertainment")),
            ("UTIL", _("Utilities")),
            ("OTHR", _("Other")),
        ],
        verbose_name=_("Category"),
    )
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="expenses",
        verbose_name=_("User"),
    )

    objects = models.Manager()
    with_totals = ExpensesManager()
    class Meta:
        verbose_name = _("Expense")
        verbose_name_plural = _("Expenses")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.description}"
    
class ExpenseLin(models.Model):
    expense = models.ForeignKey(
        Expense,
        on_delete=models.CASCADE, 
        related_name="lines")
    
    description = models.CharField(
        max_length=255, 
        verbose_name=_("Description"))
    
    amount = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        verbose_name=_("Amount"))
    
    date = models.DateTimeField(
        verbose_name=_("Date"))
    
    class Meta:
        verbose_name = _("Expense Line")
        verbose_name_plural = _("Expense Lines")
        ordering = ["-date"]
    def __str__(self):
        return f"{self.description}"

class Tags(models.Model):
    expenselin = models.ManyToManyField(
        ExpenseLin,
        verbose_name=_('ExpensesLin'),
        related_name='expenseslin',
    )

    tag = models.CharField(
        max_length=3,
        choices=[
            ("Y", _("Yes")),
            ("N", _("No")),
            ("A",_("Acabado")),
        ],
        verbose_name=_("Tag"),
    )

    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="tag_user",
        verbose_name=_("User"),
    )

    class Meta:
        verbose_name=_("Tag")
        verbose_name_plural=_("Tags")

    def __str__(self):
        return f"{self.tag}"
