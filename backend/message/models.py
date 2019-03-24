from django.db import models

# Create your models here.
class Message(models.Model):
    group = models.CharField(max_length=120)
    name = models.CharField(max_length=120)
    message = models.CharField(max_length=300)

    def _str_(self):
        return self.group