from django.db import models

# Create your models here.

class Roomies(models.Model):
    bill = models.CharField(max_length=120)
    price = models.CharField(max_length=120
    )

    def _str_(self):
        return self.bill