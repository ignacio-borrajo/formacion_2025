from django import forms
from main.models import ExpenseLin, Label, Expense

class ExpenseLinForm(forms.ModelForm):
    class Meta:
        model = ExpenseLin
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if "expense" in self.initial:
            # Obtener el usuario asociado al expense seleccionado
            expense_id = self.initial["expense"]
            try:
                # Obtener la instancia del Expense
                expense = Expense.objects.get(pk=expense_id)
                user = expense.user
                # Filtrar las etiquetas por el usuario del expense
                self.fields["labels"].queryset = Label.objects.filter(user=user)
            except Expense.DoesNotExist:
                # Si el Expense no existe, no mostrar etiquetas
                self.fields["labels"].queryset = Label.objects.none()
        else:
            # Si no hay un expense seleccionado, no mostrar etiquetas
            self.fields["labels"].queryset = Label.objects.none()