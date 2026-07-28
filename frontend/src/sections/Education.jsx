import { education } from "../data/education";
import FadeIn from "../components/ui/FadeIn";

const TimelineItem = ({ item }) => {
  return (
    <FadeIn>
      <div className="relative pl-9 mb-11"></div>
    </FadeIn>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-28 bg-bg2">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <div className="section-label">// 04 - Educations</div>
        <h2 className="section-title">
          My <em>Journey</em>
        </h2>

        <div className="relative timeline-line pl-0">
          {education.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
