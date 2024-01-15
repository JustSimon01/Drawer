//Хранение информации о инструменте которым мы пользуемся

import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this)
  }

  //Action, функция которая изменяет состояния
  setTool(tool) {
    this.tool = tool
  }
}

export default new ToolState();
