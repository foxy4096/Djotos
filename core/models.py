from django.db import models

class Photo(models.Model):
    file = models.ImageField(verbose_name="Photo", upload_to="images")
    name = models.CharField(max_length=255, verbose_name="Alt Text", default='', blank=True, null=True)
    
    def __str__(self):
        return f"{self.name if self.name else self.file.name}"

    def to_json(self):
        return {
            "file": self.file.url,
            "name": f"{self}"
        }