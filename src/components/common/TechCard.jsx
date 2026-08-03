const TechCard = ({ tech }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <h3 className="mb-6 text-2xl font-bold text-slate-900">
        {tech.category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {tech.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-600 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
