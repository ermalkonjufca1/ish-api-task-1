import { LightBulbInterface } from "./LightBulb";

interface RoomMethods {
  hasLightBulb(): boolean;
  openDoor(): void;
  closeDoor(): void;
  changeLightBulb(newLightBulb: LightBulbInterface): void;
}

export interface RoomInterface extends RoomMethods {
  lightBulb: LightBulbInterface;
  door: boolean;
}

export class Room implements RoomInterface {
  lightBulb: LightBulbInterface;
  door: boolean = false;

  constructor(lightBulb: LightBulbInterface) {
    this.lightBulb = lightBulb;
  }

  private isDoorOpen(): boolean {
    return this.door;
  }

  hasLightBulb(): boolean {
    return this.lightBulb ? true : false;
  }

  openDoor(): void {
    if (!this.isDoorOpen()) {
      this.door = true;
      console.log("Door opened");
    }
  }

  closeDoor(): void {
    if (this.isDoorOpen()) {
      this.door = false;
      console.log("Door closed");
    }
  }

  changeLightBulb(newLighBulb: LightBulbInterface): void {
    if (this.isDoorOpen()) {
      this.lightBulb = newLighBulb;
      console.log("Ligh bulb has been changed");
    } else {
      console.log("Get inside the room to change the light bulb");
    }
  }
}
