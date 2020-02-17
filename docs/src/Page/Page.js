require("./page.less");

const React = require("react");

class Page extends React.PureComponent {
  render() {
    return <div className="page">{this.props.children}</div>;
  }
}

module.exports = Page;
