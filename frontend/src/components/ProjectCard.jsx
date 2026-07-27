const ProjectCard = ({
  num,
  title,
  description,
  tags,
  team,
  year,
  featured,
  wip,
  github,
  demo,
}) => {
  return (
    <div>
      <span>{num}</span>
      {featured && <span>Featured</span>}

      {wip && <span>In Progress</span>}

      {/* Tags */}
      <div>
        {tags.map((t) => (
          <span>{t}</span>
        ))}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
