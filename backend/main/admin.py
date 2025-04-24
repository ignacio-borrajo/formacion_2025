from django.contrib import admin
from main.models import Expense, ExpenseLin, Tag

class ExpenseAdmin(admin.ModelAdmin):
    fields = ("description", "category", "limit", "user")
    list_display = (
        "description",
        "user",
        "category",
        "limit",
        "date",
    )
    list_filter = ("category", "limit")
    search_fields = ("description", "category")
    ordering = ("-date", "description")


class ExpenseLinAdmin(admin.ModelAdmin):
    list_display = (
        "description",
        "expense",
        "amount",
        "date",
        "get_tags",
    )
    list_filter = ("expense",)
    search_fields = ("description",)
    list_editable = ("amount",)

class TagAdmin(admin.ModelAdmin):
    list_display = ("name", "user")
    search_fields = ("name",)
    ordering = ("name",)

    def get_queryset(self, request):
        """
        Override to filter tags by the logged-in user.
        """
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs  # Superusuarios ven todas las etiquetas
        return qs.filter(user=request.user)  # Usuarios normales ven solo sus etiquetas

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(Tag,TagAdmin)
