from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import RoomiesSerializer      # add this
from .models import Roomies                     # add this

# Create your views here.

class RoomiesView(viewsets.ModelViewSet):
    serializer_class = RoomiesSerializer
    queryset = Roomies.objects.all()