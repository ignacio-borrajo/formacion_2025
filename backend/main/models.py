from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _
from main.managers import ExpenseManager

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
        verbose_name=_("Usuario"),
    )

    objects = models.Manager()
    with_totals = ExpenseManager()

    class Meta:
        verbose_name = _("Expense")
        verbose_name_plural = _("Expenses")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.description}"


class ExpenseLin(models.Model):
    """
    Model representing an expense line.
    """

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

    tags = models.ManyToManyField(
        "Tag",
        blank=True,
        related_name="expense_lines",
        verbose_name=_("Tags"),
    )

    class Meta:
        verbose_name = _("Expense Line")
        verbose_name_plural = _("Expense Lines")
        ordering = ["-date"]

    def __str__(self):
        tag_list = ", ".join([tag.name for tag in self.tags.all()])
        return (
            f"{self.description} ({tag_list})"
            if tag_list
            else f"{self.description}"
        )


class Tag(models.Model):
    """
    Model representing paid lines
    Solo visible y accesible por el usuario que la creo.
    """

    name = models.CharField(
        max_length=50,
        verbose_name=_("Tag Name"),
    )
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        related_name="tags",
        verbose_name=_("Usuario"),
    )

    class Meta:
        verbose_name = _("Tag")
        verbose_name_plural = _("Tags")
        unique_together = ("name", "user")

    def __str__(self):
        return self.name
