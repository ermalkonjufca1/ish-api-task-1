import { Person } from "./Person";
import { Room } from "./Room";
import { LightBulb } from "./LightBulb";

function solutionOne(): void {
  const person = new Person();
  const lightBulb = new LightBulb("green");
  const room = new Room(lightBulb);

  person.enterRoom(room);
  const redLB = new LightBulb("red");
  if (person.currentRoom?.hasLightBulb()) {
    !person.currentRoom.lightBulb.isColor("red") &&
      person.currentRoom.changeLightBulb(redLB);
    person.switchLightBulb("ON");
  }
  person.leaveRoom();
}
// solutionOne();