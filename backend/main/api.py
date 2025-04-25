from rest_framework import viewsets
from main.controllers import get_expenses
from main.serializers import ExpenseSerializer, ExpenseLinSerializer
from main.models import ExpenseLin



class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer

    def get_queryset(self):
        queryset = get_expenses(self.request.user)
        return queryset

class ExpenseLinesViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseLinSerializer
    lookup_field = "expense" 

    def get_queryset(self):
        expense_id = self.kwargs.get("expense")
        label_param = self.request.query_params.get("labels")
        queryset = ExpenseLin.objects.filter(expense_id=expense_id)

        if label_param:
            label_ids = label_param.split(",")
            queryset = queryset.filter(labels__id__in=label_ids).distinct()
            
        return queryset