type TBrush = {
  children?: JSX.Element
}

const Brush = ({children}: TBrush) => {
  return (
    <button className="w-8 h-8 rounded-md bg-slate-800">
      {children}
    </button>
  );
}
 
export default Brush;
