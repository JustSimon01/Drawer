import Button from "./Buttons/Button";
import brushImage from "@assets/brush.svg";
import eraser from "@assets/eraser.svg";
import rect from "@assets/rect.svg";
import gradient from "@assets/gradient.svg";
import save from "@assets/save.svg";
import canvasState from "@store/canvasState";
import toolState from "@store/toolState";
import Brush from "@tools/Brush";
import Rect from "@tools/Rect";


type TControls = {
  Class?: string
}

const Controls = ({ Class }: TControls) => {
  return (
    <div className={`flex p-2 gap-2 w-full rounded-lg bg-slate-400 ${Class}`} >
      <Button img={brushImage} onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
      <Button img={rect} onClick={() => toolState.setTool(new Rect(canvasState.canvas))} />
      <Button img={eraser} />
      <Button img={gradient} />
      <Button img={save} />
    </div>
  );
}

export default Controls;
