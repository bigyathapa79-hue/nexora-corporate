const StatCard = ({ number, label }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <h3 className="text-5xl font-bold text-blue-600">{number}</h3>

      <div className="mx-auto my-5 h-1 w-12 rounded-full bg-blue-600"></div>

      <p className="text-lg font-medium text-slate-600">{label}</p>
    </div>
  );
};

export default StatCard;
