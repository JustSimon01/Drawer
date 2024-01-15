type TBrush = {
  img?: string;
  alt?: string;
}

const Brush = ({ img, alt }: TBrush) => {
  return (
    <button className="w-8 h-8 rounded-md bg-slate-300 border border-[black]">
      <img className="m-auto" src={img} alt={alt} />
    </button>
  );
}

export default Brush;
