import canvasState from "@store/canvasState";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";


//Обертка для mobX
const Canvas = observer(() => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log(canvasRef.current)
    canvasState.setCanvas(canvasRef.current)
  }, [])

  return (
    <div className="flex align-middle w-full h-3/4 bg-slate-400 rounded-md">
      <canvas ref={canvasRef} className="bg-white m-auto rounded-md border" width={1200} height={650} />
    </div>
  );
});

export default Canvas;
