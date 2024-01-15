import Brush from "./Buttons/Brush";
import brushImage from "@assets/brush.svg";
import eraser from "@assets/eraser.svg";
import gradient from "@assets/gradient.svg";
import save from "@assets/save.svg";


type TControls = {
  Class?: string
}

const Controls = ({ Class }: TControls) => {
  return (
    <div className={`flex p-2 gap-2 w-full rounded-lg bg-slate-400 ${Class}`}>
      <Brush img={brushImage} />
      <Brush img={eraser} />
      <Brush img={gradient} />
      <Brush img={save} />
    </div>
  );
}

export default Controls;
