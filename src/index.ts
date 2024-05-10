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

function solutionTwo(): void {
  const person = new Person();

  const redLB = new LightBulb("red");
  const greenLB = new LightBulb("green");
  const blueLB = new LightBulb("blue");
  const rooms = [new Room(greenLB), new Room(blueLB), new Room(redLB)];

  rooms.forEach((room) => {
    person.enterRoom(room);
    person.switchLightBulb("ON");
  });

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * rooms.length);
    rooms[randomIndex].lightBulb.break();
  }, 10000);

  setTimeout(() => {
    rooms.forEach((room, i) => {
      person.enterRoom(room);
      if (person.currentRoom?.lightBulb.isLightBulbBroken()) {
        console.log(`Light bulb on room (${i}) is broken, changing it`);
        const newBulb = new LightBulb("red");
        person.currentRoom.changeLightBulb(newBulb);
      } else {
        console.log(`Light bulb on room (${i}) is not broken`);
      }
      person.leaveRoom();
    });
  }, 60000);
}

function solutionThree(): void {
  const person = new Person();
  const colors = ["red", "green", "blue"];

  colors.forEach((color) => {
    const lb = new LightBulb(color);
    const room = new Room(lb);
    person.enterRoom(room);
    console.log(`Light bulb color is: ${color}`);
    person.switchLightBulb("ON");
    person.leaveRoom();
  });
}

// solutionOne();
// solutionTwo();
// solutionThree();