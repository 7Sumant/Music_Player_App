from django.db import models
from django.contrib.auth.models import User

class Contact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='login_contact_set')
    # other fields...

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='login_userprofile')
    # other fields...
