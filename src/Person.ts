import { RoomInterface } from "./Room";

interface PersonMethods {
  enterRoom(room: RoomInterface): void;
  leaveRoom(): void;
  checkLightBulbStatus(): boolean;
  switchLightBulb(status: string): void;
}

export interface PersonInterface extends PersonMethods {
  currentRoom: RoomInterface | null;
}

export class Person implements PersonInterface {
  currentRoom: RoomInterface | null = null;

  enterRoom(room: RoomInterface): void {
    this.currentRoom = room;
    this.currentRoom.openDoor();
    console.log(`You entered the room`);
  }

  leaveRoom(): void {
    if (this.currentRoom) {
      this.currentRoom.closeDoor();
      this.currentRoom = null;
      console.log("You left the room");
    }
  }

  checkLightBulbStatus(): boolean {
    if (this.currentRoom) return this.currentRoom.lightBulb.getStatus();
    console.log(`You are not in any room`);
    return false;
  }

  switchLightBulb(status: string): void {
    if (this.currentRoom) {
      console.log(`You turned ${status} the light`);
      this.currentRoom.lightBulb.turn(status === "ON" ? true : false);
    } else {
      console.log(`You are not in any room`);
    }
  }
}
