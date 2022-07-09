@namespace
class SpriteKind:
    Foreground = SpriteKind.create()

def on_up_pressed():
    game.show_long_text("Strawberry: Get them at the Store!", DialogLayout.BOTTOM)
    info.start_countdown(10)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_countdown_end():
    game.over(True)
info.on_countdown_end(on_countdown_end)

scene.set_background_image(assets.image("""
    BG
"""))
mySprite = sprites.create(assets.image("""
        Talking Strawberry
    """),
    SpriteKind.player)
scene.camera_follow_sprite(mySprite)
game.show_long_text("Press Up to let the strawberry talk!", DialogLayout.BOTTOM)