def calculate_critical_path(tasks):
    for task in tasks:
        if not task.dependencies:
            task.early_start = 0
            task.early_finish = task.duration
        else:
            task.early_start = max(pred.early_finish for pred in task.dependencies)
            task.early_finish = task.early_start + task.duration

    end_tasks = [task for task in tasks if not task.dependencies]
    for task in reversed(end_tasks):
        task.late_finish = task.early_finish
        task.late_start = task.late_finish - task.duration

    for task in reversed(tasks):
        if task.dependencies:
            task.late_finish = min(succ.late_start for succ in task.dependencies)
            task.late_start = task.late_finish - task.duration

def get_critical_path(tasks):
    return [task.name for task in tasks if task.early_start == task.late_start]