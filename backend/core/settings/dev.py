from .base import *

print('DEVELOPMENT!')

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

MEDIA_URL = "/media/"
MEDIA_ROOT = path.join(BASE_DIR, "../", "mediafiles")

STATIC_URL = "static/"
STATIC_ROOT = path.join(BASE_DIR, "../", "staticfiles")