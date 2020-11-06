from django.db import models

# Create your models here.

LEVEL_CHOICES = (
    ('easy','Easy'),
    ('medium', 'Medium'),
    ('hard','Hard')
)

class Exercises(models.Model):
    name = models.CharField(max_length=256)
    duration = models.CharField(max_length=256)
    level = models.CharField(blank=True, null=True, max_length=24, choices=LEVEL_CHOICES)
    energy = models.CharField(max_length=256)

    def __str__(self):
        return self.name 
