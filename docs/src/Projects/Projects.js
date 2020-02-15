require('./projects.less')

const React = require('react')
const Page = require('../Page')
const ProjectEntry = require('./ProjectEntry')
const ProjectList = require('../Projects')

class Projects extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className='projects'>
          {ProjectList.map(project =>
            <ProjectEntry
              key={project.title}
              title={project.title}
              url={project.url}
              date={project.date}
            />
          )}
        </div>
      </Page>
    )
  }
}

module.exports = Projects
