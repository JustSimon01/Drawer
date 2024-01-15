import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  listen() {
    //байндим функции к контексту this
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e) {

  }

  mouseDownHandler(e){

  }

  mouseMoveHandler(e){

  }

}
