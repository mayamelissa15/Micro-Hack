import statistics

# Define skills and their maximum levels
max_skill_levels = {
    'Python': 100,
    'Project Management': 100,
    'Java': 100,
    'JavaScript': 100,
}

# Define individuals with their skills and levels
individuals = [
    {'name': 'Alice', 'skills': {'Python': 80, 'Project Management': 70}},
    {'name': 'Bob', 'skills': {'Java': 90, 'Python': 60}},
    {'name': 'Charlie', 'skills': {'Python': 70, 'JavaScript': 80}},
    {'name': 'Diane', 'skills': {'Project Management': 85, 'Python': 90}},
]

# Define required skills for the team
required_skills = {'Python': 60, 'Project Management': 70}

# Function to select teams based on required skills
def select_teams(individuals, required_skills):
    selected_team = []
    for individual in individuals:
        meets_requirements = all(
            individual['skills'].get(skill, 0) >= level
            for skill, level in required_skills.items()
        )
        if meets_requirements:
            selected_team.append(individual)
    return selected_team

# Function to calculate the skill percentage for a team
def calculate_skill_percentage(team, max_skill_levels):
    skill_percentages = {}
    for skill in max_skill_levels:
        skill_scores = [individual['skills'].get(skill, 0) for individual in team]
        avg_skill_score = statistics.mean(skill_scores)
        skill_percentage = (avg_skill_score / max_skill_levels[skill]) * 100
        skill_percentages[skill] = skill_percentage
    return skill_percentages

# Function to label teams by their skill percentage
def label_team_by_skills(team, skill_percentages):
    avg_percentage = statistics.mean(skill_percentages.values())
    label = f"Team - Skill Level: {avg_percentage:.2f}%"
    return label

selected_team = select_teams(individuals, required_skills)

skill_percentages = calculate_skill_percentage(selected_team, max_skill_levels)

# Label the team by their skill percentage
team_label = label_team_by_skills(selected_team, skill_percentages)

# Output the results
print("Selected Team:", [individual['name'] for individual in selected_team])
print("Skill Percentages:", skill_percentages)
print("Team Label:", team_label) 