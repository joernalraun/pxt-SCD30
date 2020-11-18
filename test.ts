//Blocks Test
basic.forever(function () {
    serial.writeLine("" + (SCD30.readCO2()))
    serial.writeLine("" + (SCD30.readTemperature()))
    serial.writeLine("" + (SCD30.readHumidity()))
    basic.pause(1000)
})
