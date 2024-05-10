import { Room, RoomInterface } from "../src/Room";
import { LightBulb, LightBulbInterface } from "../src/LightBulb";

describe("Room tests", () => {
  let room: RoomInterface;
  let lightBulb: LightBulbInterface;

  beforeEach(() => {
    lightBulb = new LightBulb("blue");
    room = new Room(lightBulb);
  });

  test("Room has Light bulb", () => {
    expect(room.hasLightBulb()).toBe(true);
  });

  test("Open and Close the Door", () => {
    room.openDoor();
    expect(room.door).toBe(true);
    room.closeDoor();
    expect(room.door).toBe(false);
  });

  test("Change Light Bulb when inside Room", () => {
    room.openDoor();
    const newLightBulb = new LightBulb("blue");
    room.changeLightBulb(newLightBulb);
    expect(room.lightBulb).toEqual(newLightBulb);
  });

  test("Cannot change Light Bulb when outside Room", () => {
    const newLightBulb = new LightBulb("green");
    room.changeLightBulb(newLightBulb);
    expect(room.lightBulb.isColor("green")).toBe(false);
  });
});
