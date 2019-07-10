//% weight=0 color=#3CB371 icon="\uf2b9" block="IR Thermometer"

namespace irthermoblock {
    /* GY-906 MLXMLX90614B IR Thermometer addr 0x5A register 0x0E return boolean */
    //% blockId="irthermoStart" block="IRThermo Start"
    //% blockGap=2 weight=89
    export function irthermoStart(): boolean {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	pins.i2cWriteNumber(90,46,NumberFormat.UInt8LE,true)
	if (pins.i2cReadNumber(90,NumberFormat.UInt8LE,false) != 90) {
		return false
	}
	return true
    }

}

