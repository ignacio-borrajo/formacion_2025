from main.controllers import get_expenses
from main.models import Expense, ExpenseLin
from main.serializers import ExpenseLinSerializer, ExpenseSerializer
from rest_framework import viewsets


class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Expense.objects.filter(user=user)

        tags = self.request.query_params.get("tags", None)

        if tags:
            tags_list = tags.split(",")
            queryset = queryset.filter(
                lines__tags__name__in=tags_list
            ).distinct()

        return queryset


class ExpenseLineViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseLinSerializer

    def get_queryset(self):
        user = self.request.user
        expense_pk = self.kwargs["expense_pk"]

        queryset = ExpenseLin.objects.filter(
            expense__user=user, expense__id=expense_pk
        )

        tags = self.request.query_params.get("tags", None)

        if tags:
            tags_list = tags.split(",")
            queryset = queryset.filter(tags__name__in=tags_list).distinct()

        return queryset
