require('./topbar.less')

const React = require('react')

const TOP_BAR_ENTRIES = ['Home', 'Interests', 'Projects', 'Timeline', 'Contact']

class Topbar extends React.PureComponent {
  render() {
    return (
      <div className='top-bar'>
        {TOP_BAR_ENTRIES.map(entry => <TopBarEntry caption={entry} />)}
      </div>
    )
  }
}

function TopBarEntry({ caption, onClick }) {
  return (
    <div className='top-bar-entry' onClick={onClick}>{caption}</div>
  )
}

module.exports = Topbar
