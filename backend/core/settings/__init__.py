from .base import *
from os import environ

if environ.get('DEBUG') == '0':
    from .prod import *
else:
    from .dev import *
