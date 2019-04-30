namespace jacdac {
    //% fixedInstances
    export class TouchButtonClient extends SensorClient {
        constructor(name: string) {
            super(name, jacdac.TOUCHBUTTON_DEVICE_CLASS);
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockId=jacadactouchispressed block="jacdac %button value"
        //% group="Touch"
        value(): number {
            const s = this.state;
            if (!s || s.length < 2) return 0;
            return s.getNumber(NumberFormat.UInt16LE, 0);
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacadactouchonevent block="jacdac %button on %event"
        //% group="Touch"
        onEvent(event: JDButtonEvent, handler: () => void) {
            this.registerEvent(event, handler);
        }
    }

    //% fixedInstance whenUsed block="touch button client"
    export const touchButtonClient = new TouchButtonClient("touch");
}