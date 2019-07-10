//% weight=0 color=#3CB371 icon="\uf2b9" block="IR Thermometer"

namespace irthermoblock {
    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x00 command 0x80 return byte */
    //% blockId="irthermoStart" block="IRThermo Start"
    //% blockGap=2 weight=89
    export function irthermoStart(): boolean {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	pins.i2cWriteNumber(90,46,NumberFormat.UInt8LE,false)
	return true
    }

}

