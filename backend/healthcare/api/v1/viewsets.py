from rest_framework import authentication
from healthcare.models import Choice, Question, Step
from .serializers import ChoiceSerializer, QuestionSerializer, StepSerializer
from rest_framework import viewsets


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Question.objects.all()


class StepViewSet(viewsets.ModelViewSet):
    serializer_class = StepSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Step.objects.all()


class ChoiceViewSet(viewsets.ModelViewSet):
    serializer_class = ChoiceSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Choice.objects.all()
