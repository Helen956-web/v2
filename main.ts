let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    for (let Index = 0; Index <= 29; Index++) {
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
})
