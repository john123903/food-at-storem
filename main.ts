namespace SpriteKind {
    export const Foreground = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Strawberry: Get them at the Store!", DialogLayout.Bottom)
    scene.cameraFollowSprite(mySprite2)
    info.startCountdown(10)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let mySprite2: Sprite = null
scene.setBackgroundImage(assets.image`BG`)
let mySprite = sprites.create(assets.image`Talking Strawberry`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
game.showLongText("Press Up to let the strawberry talk!", DialogLayout.Bottom)
music.knock.play()
mySprite2 = sprites.create(assets.image`smallDrumstick`, SpriteKind.Foreground)
let mySprite3 = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Player)
mySprite2.x = 1
mySprite3.y = 5
animation.runImageAnimation(
mySprite3,
assets.animation`bp`,
500,
true
)
forever(function () {
	
})
