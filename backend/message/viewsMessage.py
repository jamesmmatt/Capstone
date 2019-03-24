from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import MessageSerializer      # add this
from .models import Message             # add this

class MessageView(viewsets.ModelViewSet):       # add this
    serializer_class = MessageSerializer          # add this
    queryset = Message.objects.all()              # add this