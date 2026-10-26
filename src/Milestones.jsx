const milestones = [
  {
    year: "2003",
    title: "Early animations",
    description: "Edd's first Newgrounds entry",
    id: "career",
  },
  {
    year: "2004",
    title: "Eddsworld",
    description: "The animated series takes shape",
    id: "career",
  },
  {
    year: "2012",
    title: "Eddsworld Legacy",
    description: "The series continues after Edd's death",
    id: "legacy",
  },
  {
    year: "2020",
    title: "Eddsworld Beyond",
    description: "A new chapter begins",
    id: "legacy",
  },
];

function Milestones() {
  return (
    <section className="milestones">
      <h2>Eddsworld through the years</h2>

      <div className="milestones-list">
        {milestones.map((milestone) => (
          <div className="milestone" key={milestone.year}>
            <a href={`#${milestone.id}`} className="milestone-link">
              <h3>{milestone.year}</h3>
              <h4>{milestone.title}</h4>
              <p>{milestone.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Milestones;
