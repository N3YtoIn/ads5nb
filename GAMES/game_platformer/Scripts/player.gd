extends CharacterBody2D

var jump_velocity = -300.0
var gravity = 980
var jumps = 1
var dir
var speed = 160.0
var is_alive = true

func _physics_process(delta: float) -> void:
	
	move(delta)
	
	pass


func move(delta):
	if is_alive:
		dir = Input.get_axis("Left","Right")
	
	if dir:
		velocity.x = dir * speed
	elif dir == 0:
		velocity.x =0
	
	if not is_on_floor():
		velocity.y += gravity * delta
		
	if is_alive:
		if Input.is_action_just_pressed("Jump") and jumps > 0:
			velocity.y = jump_velocity
			jumps -= 1
	
	if is_on_floor():
		jumps = 1
	
	
	move_and_slide()
	
	pass


func die():
	
	is_alive = false
	$CollisionShape2D.queue_free()
	$Area2D.queue_free()
	velocity.y = jump_velocity
	
	pass
