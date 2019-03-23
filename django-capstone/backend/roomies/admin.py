from django.contrib import admin
from .models import Roomies

class RoomiesAdmin(admin.ModelAdmin):
    list_display=('bill', 'price')

# Register your models here.
admin.site.register(Roomies, RoomiesAdmin)