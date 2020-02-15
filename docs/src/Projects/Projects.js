require('./projects.less')

const React = require('react')
const Page = require('../Page')

class Projects extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className='projects'>
          projects
        </div>
      </Page>
    )
  }
}

module.exports = Projects
