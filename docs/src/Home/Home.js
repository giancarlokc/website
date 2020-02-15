require('./home.less')

const React = require('react')
const Page = require('../Page')

class Home extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className='home'>
          home
        </div>
      </Page>
    )
  }
}

module.exports = Home
