from rest_framework import serializers
from main.models import Expense, ExpenseLin, Label


class LabelSerializer(serializers.ModelSerializer):
    """
    Serializer for the Label model.
    """

    class Meta:
        model = Label
        fields = ['id', 'name', 'user', 'date']
        read_only_fields = ['user', 'date']

class ExpenseLinSerializer(serializers.ModelSerializer):
    labels = LabelSerializer(many=True, read_only=True)  
    label_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Label.objects.all(),
        write_only=True, 
    )

    class Meta:
        model = ExpenseLin
        fields = (
            "id",
            "description",
            "amount",
            "date",
            "labels",
            "label_ids",
        )


class ExpenseSerializer(serializers.ModelSerializer):
    """
    Serializer for the Expense model.
    """

    lines = ExpenseLinSerializer(many=True, required=False)
    total = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True
    )
    total_pedidos = serializers.DecimalField(
        max_digits=10, decimal_places=2, read_only=True
    )

    class Meta:
        model = Expense
        fields = (
            "id",
            "description",
            "category",
            "limit",
            "date",
            "total",
            "total_pedidos",
            "lines",
        )

    def to_representation(self, instance):

        ret = super().to_representation(instance)

        ret["d_category"] = ("Comida" if instance.category == "FOOD" else "No sé")

        return ret
    
    def create(self, validated_data):
        label_ids = validated_data.pop("label_ids", [])
        expense_line = super().create(validated_data)
        expense_line.labels.set(label_ids) 
        return expense_line

    def update(self, instance, validated_data):
        label_ids = validated_data.pop("label_ids", [])
        instance = super().update(instance, validated_data)
        instance.labels.set(label_ids)  
        return instance
