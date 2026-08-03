const SectionTitle = ({ badge, title, description, align = "center" }) => {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mb-12 ${alignment}`}>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        {badge}
      </span>

      <h2 className="mt-3 text-4xl font-bold text-slate-900">{title}</h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
};

export default SectionTitle;
