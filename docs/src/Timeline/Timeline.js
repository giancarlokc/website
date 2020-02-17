require("./timeline.less");
require("react-vertical-timeline-component/style.min.css");

const React = require("react");
const Page = require("../Page");
const {
  VerticalTimeline,
  VerticalTimelineElement
} = require("react-vertical-timeline-component");
const ProjectList = require("../../Projects.json");

class Timeline extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className="timeline">
          <VerticalTimeline>
            {getProjectsInOrder().map(project => (
              <VerticalTimelineElement
                key={project.title}
                className="timeline-project-entry"
                date={project.date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <img
                    src={
                      project.iconUrl ||
                      "https://cdn1.iconfinder.com/data/icons/education-set-3-3/74/15-512.png"
                    }
                  />
                }
              >
                <h3>{project.title}</h3>
                <div>{project.description}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Page>
    );
  }
}

function getProjectsInOrder() {
  const list = ProjectList.slice();
  list.sort((a, b) => new Date(a.date) - new Date(b.date));
  return list;
}

module.exports = Timeline;
