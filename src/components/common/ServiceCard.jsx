const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mb-4 text-xl font-semibold text-slate-900">{title}</h3>

      <p className="leading-7 text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
