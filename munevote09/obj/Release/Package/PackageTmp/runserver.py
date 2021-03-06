"""
This script runs the munevote09 application using a development server.
"""

from os import environ
from munevote09 import app
import sys
reload(sys)
sys.setdefaultencoding("utf-8")
if __name__ == '__main__':
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
