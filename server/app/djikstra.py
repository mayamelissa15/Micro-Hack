import heapq

class Task:
    def __init__(self, name, duration=0):
        self.name = name
        self.duration = duration
        self.dependencies = []  

def build_graph(tasks_data):
    graph = {}
    for task_data in tasks_data:
        task_name = task_data["name"]
        task_duration = task_data.get("duration", 0)
        task = Task(task_name, task_duration)
        graph[task_name] = task

        for dependency in task_data.get("dependencies", []):
            if isinstance(dependency, dict):
                dep_name = dependency["name"]
                dep_duration = dependency["duration"]
                task.dependencies.append((dep_name, dep_duration))
    return graph

def dijkstra_project_optimization(graph, start_node):
    priority_queue = []
    distances = {node: float("inf") for node in graph}
    predecessors = {}  

    distances[start_node] = 0
    heapq.heappush(priority_queue, (0, start_node))

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        if current_distance > distances[current_node]:
            continue

        for dependency, duration in graph[current_node].dependencies:
            new_distance = current_distance + duration
            if new_distance < distances[dependency]:
                distances[dependency] = new_distance
                predecessors[dependency] = current_node
                heapq.heappush(priority_queue, (new_distance, dependency))

    end_node = max(distances, key=distances.get)  
    optimal_sequence = []
    node = end_node

    # Trace back from the end node to the start node to build the optimal sequence
    while node in predecessors:
        optimal_sequence.append(node)
        node = predecessors[node]

    # Reverse the optimal sequence to get the correct order
    optimal_sequence.reverse()

    # Calculate the total project time
    total_time = distances[end_node]

    return {"optimal_sequence": optimal_sequence, "total_time": total_time}



tasks_data = [
    {"name": "A", "duration": 2, "dependencies": []},
    {"name": "B", "duration": 3, "dependencies": [{"name": "A", "duration": 2}]},
    {"name": "C", "duration": 1, "dependencies": [{"name": "A", "duration": 1}]},
    {"name": "D", "duration": 2, "dependencies": [{"name": "B", "duration": 3}, {"name": "C", "duration": 1}]},
]   




