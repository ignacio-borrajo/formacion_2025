from rest_framework import viewsets
from main.controllers import get_expenses
from main.serialize import ExpenseSerializer
from rest_framework import permissions

class ExpenseViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        query=get_expenses(connected_user=self.request.user)
        return query
    
    serializer_class = ExpenseSerializer