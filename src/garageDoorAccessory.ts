
import { Service, PlatformAccessory, CharacteristicValue } from 'homebridge';
import { AugustSmartLockPlatform } from './platform';

export class GarageDoorAccessory {
  private service: Service;
  private currentState: CharacteristicValue = this.platform.Characteristic.CurrentDoorState.CLOSED;
  private targetState: CharacteristicValue = this.platform.Characteristic.TargetDoorState.CLOSED;

  constructor(
    private readonly platform: AugustSmartLockPlatform,
    private readonly accessory: PlatformAccessory,
  ) {
    this.accessory.getService(this.platform.Service.AccessoryInformation)!
      .setCharacteristic(this.platform.Characteristic.Manufacturer, 'August')
      .setCharacteristic(this.platform.Characteristic.Model, 'Garage Door Virtual')
      .setCharacteristic(this.platform.Characteristic.SerialNumber, 'GDO-1234');

    this.service = this.accessory.getService(this.platform.Service.GarageDoorOpener)
      || this.accessory.addService(this.platform.Service.GarageDoorOpener);

    this.service.getCharacteristic(this.platform.Characteristic.CurrentDoorState)
      .onGet(() => this.currentState);

    this.service.getCharacteristic(this.platform.Characteristic.TargetDoorState)
      .onGet(() => this.targetState)
      .onSet(this.setTargetState.bind(this));
  }

  async setTargetState(value: CharacteristicValue) {
    this.targetState = value;
    this.currentState = this.platform.Characteristic.CurrentDoorState.OPENING;
    setTimeout(() => {
      this.currentState = value === this.platform.Characteristic.TargetDoorState.CLOSED
        ? this.platform.Characteristic.CurrentDoorState.CLOSED
        : this.platform.Characteristic.CurrentDoorState.OPEN;
      this.service.updateCharacteristic(this.platform.Characteristic.CurrentDoorState, this.currentState);
    }, 3000);
  }
}
