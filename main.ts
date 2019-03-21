let p1: positions.create(0, 0, 0)
let p2: positions.create(0, 0, 0)

player.onChat(":mcedit.p1", function () {
    p1 = player.position()
    p1 = positions.add(p1, positions.create(0, -1, 0))
    player.say("p1 is " + p1)
})


player.onChat(":mcedit.p1", function () {
    p1 = player.position()
    p1 = positions.add(p1, positions.create(0, -1, 0))
    player.say("p1 is " + p1)
})

player.onChat(":mcedit.fill", function (num1: numbers) {

})