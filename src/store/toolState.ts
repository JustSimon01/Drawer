//Хранение информации о инструменте которым мы пользуемся

import { makeAutoObservable } from "mobx";

class ToolState {
  tool: HTMLCanvasElement | null = null;
  constructor() {
    makeAutoObservable(this)
  }

  //Action, функция которая изменяет состояния
  setTool(tool: HTMLCanvasElement | null) {
    this.tool = tool
  }
}

export default new ToolState();
