require('./contact.less')

const React = require('react')
const Page = require('../Page')

class Contact extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className='contact'>
          contact
        </div>
      </Page>
    )
  }
}

module.exports = Contact
