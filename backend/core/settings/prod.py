from .base import *

print('PRODUCTION!')

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

MEDIA_URL = "http://0.0.0.0/media/"
MEDIA_ROOT = path.join(BASE_DIR, "../", "mediafiles")

STATIC_URL = "http://0.0.0.0/static/"
STATIC_ROOT = path.join(BASE_DIR, "../", "staticfiles")
