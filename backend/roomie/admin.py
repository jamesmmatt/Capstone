from django.contrib import admin
from .models import Roomie

class RoomieAdmin(admin.ModelAdmin):
    list_display = ('bill', 'price')

# Register your models here.
admin.site.register(Roomie, RoomieAdmin)