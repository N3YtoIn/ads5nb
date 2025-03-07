extends Sprite2D


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if Input.is_key_pressed(KEY_D):
		global_position += Vector2(10,0)
	
	if Input.is_key_pressed(KEY_A):
		global_position += Vector2(-10,0)
		
	if Input.is_key_pressed(KEY_W):
		global_position += Vector2(0,-10)
		
	if Input.is_key_pressed(KEY_S):
		global_position += Vector2(0,10)
	
	pass
