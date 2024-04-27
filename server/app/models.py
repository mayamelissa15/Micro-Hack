from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import date



db = SQLAlchemy()
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(255), nullable=False)
    creation_date = db.Column(db.Date, nullable=False,default=date.today())
    description = db.Column(db.Text, nullable=False)
    tasks = db.relationship('Task', backref='project', lazy=True)


class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(255), nullable=False)
    team_members = db.Column(db.String(255), nullable=False)
    tasks = db.relationship('Task', backref='team', lazy=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), default='user', nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)
    def check_password(self, password):
        return check_password_hash(self.password, password)
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_name = db.Column(db.String(255), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    description = db.Column(db.Text)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'), nullable=False)
    status = db.Column(db.String(20), default='to do', nullable=False)

    dependencies = db.relationship('Dependency', backref='task', lazy=True)

class Dependency(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'), nullable=False)
    

    


