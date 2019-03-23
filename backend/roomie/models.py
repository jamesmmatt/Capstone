from django.db import models

# Create your models here.

class Roomie(models.Model):
    bill = models.CharField(max_length=120)
    price = models.CharField(max_length=6)

def _str_(self):
    return self.bill