from rest_framework import viewsets
from main.controllers import get_expenses
from main.serialize import ExpenseSerializer
from rest_framework import permissions

class ExpenseViewSet(viewsets.ModelViewSet):
    
    serializer_class = ExpenseSerializer
    
    def get_queryset(self):
        print(self.request.user)
        query=get_expenses(connected_user=self.request.user)
        return query
    