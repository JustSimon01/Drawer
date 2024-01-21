type TButton = {
  img?: string;
  alt?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({ img, alt, onClick }: TButton) => {
  return (
    <button className="w-8 h-8 rounded-md bg-slate-300 border border-[black]" onClick={onClick}>
      <img className="m-auto" src={img} alt={alt} />
    </button>
  );
}

export default Button;
