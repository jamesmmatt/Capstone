    # backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from roomie import views                           # add this
from user import viewsUser
from message import viewsMessage

router = routers.DefaultRouter()                      # add this
router.register(r'messages', viewsMessage.MessageView, 'message')
router.register(r'users', viewsUser.UserView, 'user')
router.register(r'roomies', views.RoomieView, 'roomie')     # add this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]