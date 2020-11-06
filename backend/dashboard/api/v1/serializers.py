from rest_framework import serializers
from dashboard.models import Exercises


class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercises
        fields = "__all__"
