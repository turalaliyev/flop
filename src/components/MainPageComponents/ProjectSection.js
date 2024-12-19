import React from "react";

export const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Amazon Optimization Project",
      description:
        "We helped Amazon optimize their global logistics, improving efficiency and reducing delivery times significantly.",
      image:
        "https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea?auto=format&fit=crop&w=400&h=200&q=100",
    },
    {
      id: 2,
      title: "Google AI Integration",
      description:
        "Our collaboration with Google focused on integrating AI-driven solutions to enhance user experiences across products.",
      image:
        "https://images.unsplash.com/photo-1676277755906-ee20b312b036?auto=format&fit=crop&w=400&h=200&q=100",
    },
  ];

  return (
    <section className="py-16 px-3 md:px-20 bg-white">
      <div className=" mb-12 max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-[#070106]">Our Projects</h2>
        <p className="text-gray-700">
          We work with Amazon, Google, Netflix, and other big companies to
          deliver innovative solutions and remarkable results.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center overflow-hidden"
          >
            <div className="w-full md:w-1/2 h-72">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-3 text-[#070106]">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
