//% weight=0 color=#3CB371 icon="\uf2b9" block="Sensors"

namespace selfblock {
    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x00 command 0x80 return byte */
    //% blockId="G54enable" block="G54 Enable"
    //% blockGap=2 weight=89
    export function G54enable() {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,128,NumberFormat.UInt8LE,false)
	basic.pause(200)
	pins.i2cWriteNumber(41,3,NumberFormat.UInt8LE,false)
    }

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x12 command 0x92 return byte */
    //% blockId="G54getIDno" block="G54 get IDno"
    //% blockGap=2 weight=88
    export function G54getIDno(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,146,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let IDno = pins.i2cReadNumber(41, NumberFormat.UInt8LE, false)
        return IDno
    }

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x13 command 0x93 return byte */
    //% blockId="G54getStatus" block="G54 get Status"
    //% blockGap=2 weight=87
    export function G54getStatus(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,147,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Status = pins.i2cReadNumber(41, NumberFormat.UInt8LE, false)
        return Status
    }

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x14-15 command 0x94-95 return byte */
    //% blockId="G54getClear" block="G54 get Clear data"
    //% blockGap=2 weight=86
    export function G54getClear(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,180,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Clrdata = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
        return Clrdata
    }

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x16-17 command 0x96-97 return byte */
    //% blockId="G54getRed" block="G54 get Red data"
    //% blockGap=2 weight=85
    export function G54getRed(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,182,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Red = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
        return Red
    }

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x18-19 command 0x98-99 return byte */
    //% blockId="G54getGreen" block="G54 get Green data"
    //% blockGap=2 weight=84
    export function G54getGreen(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,184,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Green = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
        return Green
    }

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x1A-1B command 0x9A-9B return byte */
    //% blockId="G54getBlue" block="G54 get Blue data"
    //% blockGap=2 weight=83
    export function G54getBlue(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(41,186,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Blue = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
        return Blue
   }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0xFF return 0x1050 */
    //% blockId="CJMCUTHIDno" block="CJMCU8118 TH IDno"
    //% blockGap=2 weight=79
    export function CJMCUTHIDno(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,255,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let THIDno = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return THIDno
    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x02 return 2 bytes */
    //% blockId="CJMCUTHConfig" block="CJMCU8118 TH Config"
    //% blockGap=2 weight=78
    export function CJMCUTHConfig(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,2,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let THConfig = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return THConfig
    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x00 return 2 bytes */
    //% blockId="CJMCUTHgetTemp" block="CJMCU8118 TH get Temperature"
    //% blockGap=2 weight=77
    export function CJMCUTHgetTemp(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,0,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Temperature = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return Math.round(Temperature * 165 / 65536 - 40)
    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x00 return 2 bytes */
    //% blockId="CJMCUTHgetHumid" block="CJMCU8118 TH get Humidity"
    //% blockGap=2 weight=76
    export function CJMCUTHgetHumid(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,1,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Temperature = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return Math.round(Temperature / 65536 * 100)
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0x20 return 1 byte */
    //% blockId="CJMCUGasIDno" block="CJMCU8118 Gas IDno"
    //% blockGap=2 weight=75
    export function CJMCUGasIDno(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,32,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let GasIDno = pins.i2cReadNumber(90, NumberFormat.UInt8LE, false)
	basic.pause(200)
	return GasIDno
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0xF4 */
    //% blockId="CJMCUGasAppStart" block="CJMCU8118 Gas AppStart"
    //% blockGap=2 weight=74
    export function CJMCUGasAppStart() {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,244,NumberFormat.UInt8LE,false)
	basic.pause(200)
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0x00 return 1 byte */
    //% blockId="CJMCUGasStatus" block="CJMCU8118 Gas Status"
    //% blockGap=2 weight=73
    export function CJMCUGasStatus(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,0,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let GasStatus = pins.i2cReadNumber(90, NumberFormat.UInt8LE, false)
	basic.pause(200)
	return GasStatus
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0xE0 return 1 byte */
    //% blockId="CJMCUGasErrID" block="CJMCU8118 Gas ErrorID"
    //% blockGap=2 weight=72
    export function CJMCUGasErrID(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,224,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let GasErrID = pins.i2cReadNumber(90, NumberFormat.UInt8LE, false)
	basic.pause(200)
	return GasErrID
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0x01 */
    //% blockId="CJMCUGasDrvMode" block="CJMCU8118 Gas DrvMode1"
    //% blockGap=2 weight=71
    export function CJMCUGasDrvMode() {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,1,NumberFormat.UInt8LE,false)
	basic.pause(200)
	pins.i2cWriteNumber(90,16,NumberFormat.UInt8LE,false)
	basic.pause(200)
    }

}

