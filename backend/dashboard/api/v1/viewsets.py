from rest_framework import viewsets
from dashboard.models import Exercises
from .serializers import ExercisesSerializer


class ExercisesViewSet(viewsets.ModelViewSet):
    serializer_class = ExercisesSerializer
    queryset = Exercises.objects.all()
