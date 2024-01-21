import Tool from "./Tool";

export default class Rect extends Tool {
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
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL()//что бы фигура не рисовалась при перетаскивании созраняем данные канваса
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw(x, y, w, h) {
    const img = new Image()//создаем новое изображение
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath();
      this.ctx?.rect(x, y, w, h)
      this.ctx?.fill()
      this.ctx?.stroke()
    }
  }
}
