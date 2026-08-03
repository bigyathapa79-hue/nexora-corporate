const ProcessCard = ({ process }) => {
  const { number, icon: Icon, title, description } = process;

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <span className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 transition group-hover:text-blue-100">
        {number}
      </span>

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
};

export default ProcessCard;
