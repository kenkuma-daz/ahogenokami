controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    pause(500)
})
let mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....2222...2222.....
    ...222222.222222....
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ...2222222222222....
    ....22222222222.....
    .....222222222......
    ......2222222.......
    .......22222........
    ........222.........
    .........2..........
    ....................
    ....................
    `, SpriteKind.Food)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(61, 48)
scene.cameraFollowSprite(mySprite)
stage.setSpriteInTilemap(tilemap`level1`, [assets.tile`a skull`], function (aSprite) {
    behavior.setFollower(aSprite, mySprite)
    behavior.setPattern(aSprite, behavior.MovePattern.BounceAndTurnOnSideWall, 50, 200)
    behavior.setAttacker(aSprite, mySprite, sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile))
})
game.onUpdate(function () {
    if (0 == 0) {
    	
    }
})
game.onUpdateInterval(10, function () {
    info.changeScoreBy(1)
})
forever(function () {
	
})