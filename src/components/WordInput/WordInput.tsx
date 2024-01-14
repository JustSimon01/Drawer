type TWordInput = {
  Class?: string;
}

const WordInput = ({ Class }: TWordInput) => {
  return (
    <div className={`flex p-2 gap-1 w-full rounded-lg bg-slate-400 ${Class} justify-center`}>
      <span className="w-8 h-8 border-slate-900 border-2 rounded-md" />
      <span className="w-8 h-8 border-slate-900 border-2 rounded-md" />
      <span className="w-8 h-8 border-slate-900 border-2 rounded-md" />
      <span className="w-8 h-8 border-slate-900 border-2 rounded-md" />
    </div>
  );
}

export default WordInput;
