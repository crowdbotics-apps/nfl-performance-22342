from django.contrib import admin
from .models import Choice, Question, Step

admin.site.register(Question)
admin.site.register(Step)
admin.site.register(Choice)

# Register your models here.
