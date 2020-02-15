require('./projectEntry.less')

const React = require('react')
const PropTypes = require('prop-types')

class ProjectEntry extends React.PureComponent {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    window.open(this.props.url)
  }

  render() {
    return (
      <div className='project-entry' onClick={this.onClick}>
        <div className='title'>{this.props.title}</div>
        <div className='icon'/>
        <div className='date'>{this.props.date}</div>
      </div>
    )
  }
}

ProjectEntry.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

module.exports = ProjectEntry
