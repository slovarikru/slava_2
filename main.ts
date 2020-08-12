let param1 = 0
basic.forever(function () {
    param1 = randint(0, 1000)
    basic.pause(1000)
    basic.showNumber(param1)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
