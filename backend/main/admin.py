from django.contrib import admin
from main.models import Expense, ExpenseLin, ExpenseTag


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
    list_filter = ("expense", "tags")  # Añadimos filtro por etiquetas
    search_fields = ("description",)
    list_editable = ("amount",)
    filter_horizontal = ("tags",)  # Interfaz más cómoda para seleccionar etiquetas
    def get_tags(self, obj):
        return ", ".join([tag.name for tag in obj.tags.all()])
    get_tags.short_description = "Tags"

@admin.register(ExpenseTag)
class ExpenseTagAdmin(admin.ModelAdmin):
    list_display = ("name", "user")
    search_fields = ("name",)

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser: # type: ignore
            return qs
        return qs.filter(user=request.user)

    def save_model(self, request, obj, form, change):
        if not obj.pk:  # Only set user on creation
            obj.user = request.user
        super().save_model(request, obj, form, change)


admin.site.register(Expense, ExpenseAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
admin.site.register(ExpenseTag, ExpenseTagAdmin)
