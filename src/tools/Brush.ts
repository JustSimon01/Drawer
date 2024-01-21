import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen()//после создания наш канвас будет слушать все эти функции
  }

  listen() {
    //байндим функции к контексту this
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx?.beginPath();
    this.ctx?.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  draw(x, y) {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
    console.log('asd')
  }

}
