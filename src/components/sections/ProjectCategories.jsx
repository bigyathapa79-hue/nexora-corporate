import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import CategoryCard from "../common/CategoryCard";

import projectCategories from "../../data/projectCategories";

const ProjectCategories = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Categories"
          title="Solutions Across Industries"
          description="Our expertise spans multiple domains, helping organizations solve complex challenges with innovative technology."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projectCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectCategories;
