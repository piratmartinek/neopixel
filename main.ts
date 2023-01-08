input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 25; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.setPixelColor(number - 1, neopixel.colors(NeoPixelColors.Blue))
    basic.showString("" + (number))
    basic.pause(2000)
    strip.clear()
    number = randint(1, 8)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
let number = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.setBrightness(100)
let range = strip.range(0, 8)
number = randint(1, 8)
basic.showString("" + (number))
basic.forever(function () {
    strip.setBrightness(input.soundLevel())
    for (let index = 0; index <= 8; index++) {
        strip.show()
    }
})
