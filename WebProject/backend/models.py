from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User



class Expense(models.Model):
    """
    Representa un gasto general.
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
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Relación con el modelo User

    class Meta:
        verbose_name = _("Expense")
        verbose_name_plural = _("Expenses")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.description}"


# Modelo Tag (Etiqueta), asociada al usuario
class Tag(models.Model):
    """
    Etiqueta creada por un usuario para organizar sus gastos.
    """
    name = models.CharField(
        max_length=100,
        verbose_name=_("Tag Name"),
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # Relación con el usuario que crea la etiqueta
        on_delete=models.CASCADE,
        related_name="tags",
        verbose_name=_("User"),
    )

    class Meta:
        verbose_name = _("Tag")
        verbose_name_plural = _("Tags")
        unique_together = ('name', 'user')  # Un usuario no puede tener etiquetas duplicadas

    def __str__(self):
        return self.name


# Modelo ExpenseLin (Línea de gasto) relacionada con Expense y con Tags
class ExpenseLin(models.Model):
    """
    Línea de gasto, puede estar relacionada con varias etiquetas.
    """
    expense = models.ForeignKey(
        Expense,
        on_delete=models.CASCADE,
        related_name="lines",  # Permite acceder a las líneas desde Expense
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
        Tag,
        blank=True,
        related_name="expense_lines",  # Relación inversa para acceder desde Tag
        verbose_name=_("Tags"),
    )

    class Meta:
        verbose_name = _("Expense Line")
        verbose_name_plural = _("Expense Lines")
        ordering = ["-date"]

    def __str__(self):
        return self.description
