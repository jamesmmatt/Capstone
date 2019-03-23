from rest_framework import serializers
from .models import Roomies

class RoomiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roomies
        fields = ('id', 'bill', 'price')