from rest_framework import serializers
from mainp.models import Expense, ExpenseLin

class ExpenseLinSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseLin
        fields = (
            'id',
            'description',
            'amount',
            'date',
        )

class ExpenseSerializer(serializers.ModelSerializer):
    """
    Serializer for the Expense model
    """
    lines = ExpenseLinSerializer(many=True, required=False)
    total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Expense
        fields = (
            'id',
            'description',
            'category',
            'date',
            'total',
            'lines',
        )
    def to_representation(self, instance):
        
        ret = super().to_representation(instance)

        ret["d_category"] = (
            "Comida" if instance.category == "FOOD" else "No se"
        )

        return ret