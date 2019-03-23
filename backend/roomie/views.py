from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RoomieSerializer
from .models import Roomie

# Create your views here.

class RoomieView(viewsets.ModelViewSet):
    serializer_class = RoomieSerializer
    queryset = Roomie.objects.all()