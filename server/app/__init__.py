from flask import Flask
from .models import db
from .routes import *
from datetime import timedelta
from flask_cors import CORS


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@127.0.0.1/octotask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1)

db.init_app(app)


CORS(app, supports_credentials=True)
app.register_blueprint(auth_bp)

