input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    basic.showIcon(IconNames.Happy)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    basic.showIcon(IconNames.Sad)
})
