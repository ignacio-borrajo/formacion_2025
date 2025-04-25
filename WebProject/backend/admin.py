from django.contrib import admin
from .models import Expense, Tag, ExpenseLin
from django.utils import timezone

class ExpenseAdmin(admin.ModelAdmin):
    # Configuración de los campos que aparecerán en la lista
    list_display = ('description', 'limit', 'date', 'category', 'user')
    list_filter = ('category', 'date', 'user')  # Filtros para la lista
    search_fields = ('description', 'category', 'user__username')  # Campos de búsqueda
    ordering = ('-date',)  # Ordenar por fecha de creación (más reciente primero)
    
    # Asegúrate de usar readonly_fields para hacer que 'date' sea solo lectura
    readonly_fields = ('date',)  # Hace que 'date' sea solo lectura
    
    # Para evitar mostrar 'date' en el formulario de creación, puedes usar 'exclude'
    # Aunque también podemos dejarlo visible y hacer que se asigne automáticamente desde el backend
    fieldsets = (
        (None, {
            'fields': ('description', 'limit', 'category', 'user')
        }),
        ('Fecha y detalles', {
            'fields': ('date',),
            'classes': ('collapse',),  # Este campo estará colapsado, pero aún visible
        }),
    )
    
    list_per_page = 10  # Paginación

    def save_model(self, request, obj, form, change):
        """Asegura que la fecha sea asignada automáticamente si no se proporciona"""
        if not obj.date:
            obj.date = timezone.now()  # Asigna la fecha actual si no tiene valor
        obj.save()

class TagAdmin(admin.ModelAdmin):
    # Configuración para la administración de etiquetas
    list_display = ('name', 'user')  # Campos en la lista de Tags
    list_filter = ('user',)  # Filtro por usuario
    search_fields = ('name', 'user__username')  # Campos de búsqueda
    ordering = ('name',)  # Orden por nombre

class ExpenseLinAdmin(admin.ModelAdmin):
    # Campos en la lista de Expense Line
    list_display = ('expense', 'description', 'amount', 'date')
    list_filter = ('expense', 'date')  # Filtro por gasto y fecha
    search_fields = ('expense__description', 'description')  # Campos de búsqueda
    ordering = ('-date',)  # Orden por fecha (más reciente primero)
    
    # Personaliza cómo se deben mostrar los campos en el formulario de detalle
    fieldsets = (
        (None, {
            'fields': ('expense', 'description', 'amount', 'tags')
        }),
        ('Detalles', {
            'fields': ('date',),
            'classes': ('collapse',),  # Colapsado, solo visible en el detalle
        }),
    )

# Registrar los modelos con sus configuraciones en el admin
admin.site.register(Expense, ExpenseAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(ExpenseLin, ExpenseLinAdmin)
