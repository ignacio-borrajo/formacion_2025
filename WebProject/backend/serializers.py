# serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Expense, ExpenseLin, Tag

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id', 'description', 'limit', 'date', 'category', 'user']
        read_only_fields = ['user']  # El campo user será solo lectura

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user  # Asigna el usuario autenticado
        return super().create(validated_data)

# Serializer para el usuario
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

# Nuevo serializer para registro
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    def create(self, validated_data):
        # Usamos create_user para que la contraseña se encripte correctamente
        return User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
    




    
class ExpenseLinSerializer(serializers.ModelSerializer):
    # Usamos SlugRelatedField para que los nombres de las etiquetas sean reconocidos
    tags = serializers.SlugRelatedField(slug_field='name', queryset=Tag.objects.all(), many=True)

    class Meta:
        model = ExpenseLin
        fields = ['expense', 'description', 'amount', 'date', 'tags']

    def create(self, validated_data):
        # Obtener el usuario autenticado
        user = self.context['request'].user
        
        # Crear la línea de gasto
        expense_line = super().create(validated_data)

        # Si hay tags, asociarlos
        if 'tags' in validated_data:
            tags = validated_data['tags']
            for tag in tags:
                tag, created = Tag.objects.get_or_create(name=tag, user=user)
                expense_line.tags.add(tag)

        return expense_line