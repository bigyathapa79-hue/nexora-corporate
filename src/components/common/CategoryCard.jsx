const CategoryCard = ({ category }) => {
  const { icon: Icon, title, projects, description } = category;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mt-2 font-medium text-blue-600">{projects}</p>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
};

export default CategoryCard;
