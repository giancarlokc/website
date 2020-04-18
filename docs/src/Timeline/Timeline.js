require("./timeline.less");
require("react-vertical-timeline-component/style.min.css");

const React = require("react");
const PropTypes = require("prop-types")
const Page = require("../Page");
const {VerticalTimeline, VerticalTimelineElement} = require("react-vertical-timeline-component");

class Timeline extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className="timeline">
          <VerticalTimeline>
            {this.props.entries.map(project => (
              <VerticalTimelineElement
                key={project.title}
                className="timeline-project-entry"
                date={project.date}
                iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
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

Timeline.propTypes = {
  entries: PropTypes.array.isRequired
}

module.exports = Timeline;
