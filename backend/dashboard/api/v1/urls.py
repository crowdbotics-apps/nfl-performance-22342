from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ExercisesViewSet

router = DefaultRouter()
router.register("exercise", ExercisesViewSet)

urlpatterns = [path("", include(router.urls))]
