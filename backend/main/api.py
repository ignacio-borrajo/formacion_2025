from main.controllers import get_expenses
from main.models import Expense
from main.serializers import ExpenseSerializer
from rest_framework import viewsets


class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Expense.objects.filter(user=user)

        # Obtener el parámetro 'tags' de la URL (si está presente)
        tags = self.request.query_params.get("tags", None)

        if tags:
            tags_list = tags.split(",")
            queryset = queryset.filter(
                lines__tags__name__in=tags_list
            ).distinct()

        return queryset
