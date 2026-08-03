import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Category Badge */}
          <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {project.title}
          </h3>

          <p className="flex-1 text-sm leading-7 text-slate-600">
            {project.description}
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-slate-200"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-blue-600">View Case Study</span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
