import { useState } from "react";

const projects = [
  {
    year: "2002–2005",
    title: "Bendee Stick",
    involvement: "Creator, writer, animator, voice actor",
    roles: ["Animation", "Voice acting", "Creator / writer"],
  },
  {
    year: "2004–2012",
    title: "Eddsworld",
    involvement: "Creator, writer, animator, voice actor",
    roles: ["Animation", "Voice acting", "Creator / writer"],
  },
  {
    year: "2008–2011",
    title: "TomSka/asdfmovie",
    involvement: "Animator, voice actor",
    roles: ["Animation", "Voice acting"],
  },
  {
    year: "2009–2012",
    title: "Slomozovo",
    involvement: "Voice actor",
    roles: ["Voice acting"],
  },
];

function Filmography() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    return filter === "All" || project.roles.includes(filter);
  });

  return (
    <section id="filmography">
      <h2>Filmography</h2>

      <div className="filmography-filters">
        {["All", "Animation", "Voice acting", "Creator / writer"].map(
          (role) => (
            <button
              key={role}
              type="button"
              className={
                filter === role ? "filter-button active" : "filter-button"
              }
              onClick={() => setFilter(role)}
            >
              {role}
            </button>
          ),
        )}
      </div>

      <div className="filmography-table-wrapper">
        <table className="filmography-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th>Involvement</th>
            </tr>
          </thead>

          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.title}>
                <td>{project.year}</td>
                <td>{project.title}</td>
                <td>{project.involvement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="filmography-count">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>
    </section>
  );
}

export default Filmography;
