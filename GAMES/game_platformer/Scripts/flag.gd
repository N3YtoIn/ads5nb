extends Area2D

@export var scene = ""



func _on_area_entered(area: Area2D) -> void:
	
	if area.is_in_group("Player"):
		await get_tree().create_timer(0.3).timeout
		get_tree().change_scene_to_file(scene)
	
	pass
