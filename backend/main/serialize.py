from rest_framework import serializers
from main.models import Expense,ExpenseLin


class ExpenseLinSerialize(serializers.ModelSerializer):
    class Meta:
        model = ExpenseLin
        fields = (
            ['id', 'amount', 'description', 'date']
        )

class ExpenseSerializer(serializers.ModelSerializer):
    expense_lines = ExpenseLinSerialize(many=True,required=False)
    total = serializers.DecimalField(max_digits=10,decimal_places=2,read_only=True)
    class Meta:
        model = Expense
        fields = (
            ['id', 'limit', 'description', 'date','category','expense_lines','total']
        )

    def to_representation(self,instance):
        print(instance.description)
        instance["d_category"] = ("Comida" if instance.category =="FOOD" else "nose")
        return super().to_representation(instance)
