interface LightBulbMethods {
  turn(status: boolean): void;
  isColor(color: string): boolean;
  getStatus(): boolean;
  getColor(): string;
  isLightBulbBroken(): boolean;
  break(): void;
}

export interface LightBulbInterface extends LightBulbMethods {
  color: string;
  status: boolean;
  isBroken: boolean;
}

export class LightBulb implements LightBulbInterface {
  color: string;
  status: boolean = false;
  isBroken: boolean = false;

  constructor(color: string) {
    this.color = color;
  }

  turn(status: boolean): void {
    if (!this.isLightBulbBroken()) {
      this.status = status;
    }
  }

  isColor(color: string): boolean {
    return this.color === color;
  }

  getStatus(): boolean {
    return this.status;
  }

  getColor(): string {
    return this.color;
  }

  isLightBulbBroken(): boolean {
    return this.isBroken;
  }

  break(): void {
    this.isBroken = true;
    console.log("the light is broken now");
  }
}
