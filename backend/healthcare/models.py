from django.conf import settings
from django.db import models


class Question(models.Model):
    "Generated Model"
    type = models.CharField(
        max_length=256,
    )
    data_type = models.CharField(
        max_length=256,
    )
    step = models.ForeignKey(
        "healthcare.Step",
        on_delete=models.CASCADE,
        related_name="question_step",
    )
    order = models.IntegerField()
    title = models.CharField(
        null=True,
        blank=True,
        max_length=1000,
    )


class Step(models.Model):
    "Generated Model"
    order = models.IntegerField()
    title = models.CharField(
        max_length=256,
    )


class Choice(models.Model):
    "Generated Model"
    question = models.ForeignKey(
        "healthcare.Question",
        on_delete=models.CASCADE,
        related_name="choice_question",
    )
    title = models.CharField(
        max_length=256,
    )
    value = models.CharField(
        max_length=256,
    )


# Create your models here.
