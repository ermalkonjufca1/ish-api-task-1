import { Person, PersonInterface } from "../src/Person";
import { Room, RoomInterface } from "../src/Room";
import { LightBulb } from "../src/LightBulb";

describe("Person tests", () => {
  let person: PersonInterface;
  let room: RoomInterface;

  beforeEach(() => {
    const lightBulb = new LightBulb("blue");
    room = new Room(lightBulb);
    person = new Person();
  });

  test("Enter Room", () => {
    person.enterRoom(room);
    expect(person.currentRoom).toEqual(room);
    expect(room.door).toBe(true);
  });

  test("Leave Room", () => {
    person.enterRoom(room);
    person.leaveRoom();
    expect(person.currentRoom).toBeNull();
    expect(room.door).toBe(false);
  });

  test("Check light bulb status when person is inside room", () => {
    person.enterRoom(room);
    const status = person.checkLightBulbStatus();
    expect(status).toBe(false);
  });

  test("Check light bulb status when person is not inside room", () => {
    const status = person.checkLightBulbStatus();
    expect(status).toBe(false);
  });

  test("Turn ON the light when person is inside room", () => {
    person.enterRoom(room);
    person.switchLightBulb("ON");
    expect(room.lightBulb.getStatus()).toBe(true);
  });

  test("Turn ON the light when person is not in room, status to be false", () => {
    person.switchLightBulb("ON");
    expect(room.lightBulb.getStatus()).toBe(false);
  });
});
