require('./timeline.less')

const React = require('react')
const Page = require('../Page')

class Timeline extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className='timeline'>
          timeline
        </div>
      </Page>
    )
  }
}

module.exports = Timeline
