from django.db import models

# Create your models here.

class User(models.Model):
    fullname = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)

    def _str_(self):
        return self.fullname