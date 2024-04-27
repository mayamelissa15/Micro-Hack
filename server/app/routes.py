from flask import jsonify, request , Blueprint , session
from .models import Task , Project , Team , User
from . import db
from .djikstra import dijkstra_project_optimization , build_graph


projects = {}

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/add_project', methods=['POST'])
def add_project():
    project_name = request.json['project_name']
    description = request.json['description']
    print(project_name)
    if not(project_name) or not(description):
        return jsonify({'error': 'Project name and description are required'}), 400

    new_project = Project(project_name=project_name, description=description)
    db.session.add(new_project)
    db.session.commit()

    return jsonify({'message': 'Project added successfully'}), 200
                      
    


    
    
    
   
@auth_bp.route('/add_task/<project_id>', methods=['POST'])
def add_task(project_id):
    task_name = request.json['task_name']
    duration = request.json['duration']
    dependencies = request.json.get('dependencies', [])
    zone = request.json.get('zone')
    team_id = request.json.get('team_id')
    task = Task(task_name=task_name, duration=duration, dependencies=dependencies, zone=zone, project_id=project_id, team_id=team_id)
    db.session.add(task)
    db.session.commit()

    return jsonify({'message': 'Task added successfully'}), 200


@auth_bp.route('/add_team', methods=['POST'])
def add_team():
    team_name = request.json['team_name']
    team_members = request.json['team_members']
    team = Team(team_name=team_name, team_members=team_members)
    db.session.add(team)
    db.session.commit()

    return jsonify({'message': 'Team added successfully'}), 200

@auth_bp.route('/optimize/<project_id>', methods=['POST'])
def optimize_project_schedule(project_id):
    project = Project.query.get_or_404(project_id)
    tasks = Task.query.filter_by(project_id=project_id).all()

    if not tasks:
        return jsonify({'error': 'No tasks found for the project'}), 404

    tasks_data = []
    for task in tasks:
        # Get task dependencies and extract their names
        dependencies = []
        for dependency in task.dependencies:
            dependency_data = {
                'name': dependency.name,
                'duration': dependency.duration
            }
            dependencies.append(dependency_data)

        task_data = {
            'name': task.task_name,
            'duration': task.duration,
            'dependencies': dependencies
        }
        tasks_data.append(task_data)

    # Extract the start node from the project
    start_node = "Task 1"

    # Calculate optimization using Dijkstra's algorithm
    graph = build_graph(tasks_data)
    result = dijkstra_project_optimization(graph, start_node)

    return jsonify(result)

@auth_bp.route('/get_projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    print('hh')
    project_list = []
    for project in projects:
        project_list.append({'id': project.id, 'project_name': project.project_name, 'creation_date': project.creation_date})
    print(project_list)
    return jsonify(project_list)

@auth_bp.route('/get_project/<project_id>', methods=['POST'])
def get_task():
    project_id = request.json['project_id']
    tasks = Task.query.filter_by(project_id=project_id).all()
    
    task_to_do_list = []
    task_in_progress_list = []
    task_done_list = []
    team = Team.query.get(project_id)

    for task in tasks:
        if task.status == 'to do':
            task_to_do_list.append({'id':task.id, 'task_name': task.task_name, 'duration': task.duration,   'status': task.status, 'team': team.team_name , 'description': task.description})
        elif task.status == 'in progress':
            task_in_progress_list.append({'id':task.id, 'task_name': task.task_name, 'duration': task.duration,   'status': task.status, 'team': team.team_name , 'description': task.description})
        else:
            task_done_list.append({'id':task.id, 'task_name': task.task_name, 'duration': task.duration,   'status': task.status, 'team': team.team_name , 'description': task.description})
    
    return jsonify({'to do': task_to_do_list, 'in progress': task_in_progress_list, 'done': task_done_list})
   

@auth_bp.route('/update_task_status/<task_id>', methods=['POST'])
def update_task_status(task_id):
    task = Task.query.get(task_id)
    task.status = request.json['status']
    db.session.commit()
    return jsonify({'message': 'Task status updated successfully'}), 200

