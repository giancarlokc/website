require("./interests.less");

const React = require("react");
const Page = require("../Page");

class Interests extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className="interests">interests</div>
      </Page>
    );
  }
}

module.exports = Interests;
