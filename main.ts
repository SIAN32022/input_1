input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("…. Ich schau nach links …")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("… mir wird schlecht ….")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
})
