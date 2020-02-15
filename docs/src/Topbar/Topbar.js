require('./topbar.less')

const React = require('react')
const { AppStore, PAGES } = require('../Store/AppStore')

const TOP_BAR_ENTRIES = [PAGES.HOME, PAGES.INTERESTS, PAGES.PROJECTS, PAGES.TIMELINE, PAGES.CONTACT]

class TopBar extends React.PureComponent {
  render() {
    return (
      <div className='top-bar'>
        {TOP_BAR_ENTRIES.map(entry =>
          <TopBarEntry
            caption={entry}
            key={entry}
            onClick={() => AppStore.setActivePage(entry)}
          />
        )}
      </div>
    )
  }
}

function TopBarEntry({ caption, onClick }) {
  return (
    <div className='top-bar-entry' onClick={onClick}>{caption}</div>
  )
}

module.exports = TopBar
