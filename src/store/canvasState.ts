//Хранение информации о канвасе, мы должны иметь возможность обращаться к нему из любого компонента

import { makeAutoObservable } from "mobx";

class CanvasState {
  //Тут мы храним ссылку на сам канвас
  canvas: HTMLCanvasElement | null = null;
  constructor() {
    makeAutoObservable(this)
  }

  //Action, функция которая изменяет состояния
  setCanvas(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas
  }
}

export default new CanvasState();
