# Generated by Django 4.0.3 on 2022-06-26 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='name',
            field=models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='Alt Text'),
        ),
    ]
