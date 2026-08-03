const StatCard = ({ number, label }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <h3 className="text-3xl font-bold text-blue-600">{number}</h3>

      <p className="mt-2 text-slate-600">{label}</p>
    </div>
  );
};

export default StatCard;
