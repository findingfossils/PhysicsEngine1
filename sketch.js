const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, ground, ball 

function setup(){
    var canvas = createCanvas(400,400)
    engine = Engine.create()
    world = engine.world

    var options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,options)
    World.add(world,ground)


    var options1 = {
        restitution: 1.07
    }
    ball = Bodies.circle(200,200, 20, options1)
    World.add(world, ball)

}

function draw(){
    background(00)

    Engine.update(engine)


    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)

    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20, 20)

    
}
