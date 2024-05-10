import { LightBulb, LightBulbInterface } from "../src/LightBulb";

describe("LightBulb tests", () => {
  let lightBulb: LightBulbInterface;

  beforeEach(() => {
    lightBulb = new LightBulb("blue");
  });

  test("Turn the light bulb on when is not broken", () => {
    lightBulb.turn(true);
    expect(lightBulb.getStatus()).toBe(true);
  });

  test("Turn the light bulb on when is broken", () => {
    lightBulb.break();
    lightBulb.turn(true);
    expect(lightBulb.getStatus()).toBe(false);
  });

  test("Check color of light bulb", () => {
    expect(lightBulb.isColor("blue")).toBe(true);
    expect(lightBulb.isColor("yellow")).toBe(false);
  });

  test("Light bulb is OFF", () => {
    expect(lightBulb.getStatus()).toBe(false);
  });

  test("Get color of light bulb", () => {
    expect(lightBulb.getColor()).toBe("blue");
  });

  test("Light bulb is not broken", () => {
    expect(lightBulb.isLightBulbBroken()).toBe(false);
  });

  test("Break light bulb", () => {
    lightBulb.break();
    expect(lightBulb.isLightBulbBroken()).toBe(true);
  });
});
