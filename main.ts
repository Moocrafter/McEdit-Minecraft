let p1 = positions.create(0, -100, 0)
let p2 = positions.create(0, -100, 0)

player.onChat(":worldedit.p1", function () {
    p1 = player.position()
    p1 = positions.add(p1, positions.create(0, -1, 0))
    player.say("p1 is " + p1)
})


player.onChat(":worldedit.p2", function () {
    p2 = player.position()
    p2 = positions.add(p2, positions.create(0, -1, 0))
    player.say("p2 is " + p2)
})

player.onChat(":worldedit.fill", function (inputId: number) {
    blocks.fill(blocks.blockById(inputId), p1, p2)
})