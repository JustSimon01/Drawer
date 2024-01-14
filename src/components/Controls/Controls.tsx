import Brush from "./Buttons/Brush";

type TControls ={
  Class?: string
}

const Controls = ({Class}: TControls) => {
  return (
    <div className={`flex p-2 gap-2 w-full rounded-lg bg-slate-400 ${Class}`}>
      <Brush />
      <Brush />
      <Brush />
      <Brush />
    </div>
  );
}
 
export default Controls;
