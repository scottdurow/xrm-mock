import { ControlMock } from "../control/control.mock";

export class TimelineWallMock extends ControlMock implements Xrm.Controls.TimelineWall {
  public refresh(): void {
    throw new Error("Not implemented.");
  }

  public getDisabled(): boolean {
    throw new Error("Method not implemented.");
  }

  public setDisabled(value: boolean): void {
    throw new Error("Method not implemented.");
  }

  public setFocus(): void {
    throw new Error("Method not implemented.");
  }

  public setVisible(visible: boolean): void {
    throw new Error("Method not implemented.");
  }

}
