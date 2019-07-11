//% weight=0 color=#3CB371 icon="\uf2b9" block="IR Thermo"

namespace irthermo {
    /* GY-906 MLX90614B IR Thermometer addr 0x5A register 0x0E return boolean */
    //% blockId="irthermoStart" block="IRThermo Start"
    //% blockGap=2 weight=89
    export function irthermoStart() {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	pins.i2cWriteNumber(90,46,NumberFormat.UInt8LE,true)
	if (pins.i2cReadNumber(90, NumberFormat.UInt8LE, false) != 90) {
		return false
	}
	return true
    }

    /* GY-906 MLX90614B IR Thermometer addr 0x5A register 0x06 return ambient temperature */
    //% blockId="irthermoTa" block="IRThermo get Ta"
    //% blockGap=2 weight=88
    export function irthermoTa(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	pins.i2cWriteNumber(90,6,NumberFormat.UInt8LE,true)
	let Ta = pins.i2cReadNumber(90, NumberFormat.UInt16LE, false)
        return Math.round(Ta * 0.02 - 273.15)
    }

}

