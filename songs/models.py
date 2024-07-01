from django.db import models
from django.utils import timezone
# Create your models here.

class Song(models.Model):
    song_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=2000)
    artist = models.CharField(max_length=2000)
    tags = models.CharField(max_length=100, default=timezone.now)
    image = models.ImageField(upload_to='songs')
    song =  models.FileField(upload_to='songs')
    
    
    def __str__(self) -> str:
        return super().__str__()

