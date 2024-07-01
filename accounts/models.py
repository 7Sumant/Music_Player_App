from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='accounts_userprofile')
    # Add additional fields for user profile if needed, such as profile picture, bio, etc.

class Registration(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    # You might want to store additional information related to registration here

class Contact(models.Model):
     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts_contact_set')
    
    # Add fields related to the contact information if needed
   