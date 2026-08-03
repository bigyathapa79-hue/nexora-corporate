import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { image, category, title, description } = project;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600">{category}</span>

        <h3 className="mt-3 text-2xl font-semibold text-slate-900">{title}</h3>

        <p className="mt-4 leading-7 text-slate-600">{description}</p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
          View Case Study
          <FaArrowRight />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
