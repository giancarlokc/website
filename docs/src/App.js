const React = require("react");
const Topbar = require("./Topbar");
const Home = require("./Home");
const Interests = require("./Interests");
const Projects = require("./Projects");
const Timeline = require("./Timeline");
const Contact = require("./Contact");
const { AppStore, PAGES } = require("./Store/AppStore");

const CONTENT_PAGES = [
  { id: PAGES.HOME, content: <Home /> },
  { id: PAGES.INTERESTS, content: <Interests /> },
  { id: PAGES.PROJECTS, content: <Projects /> },
  { id: PAGES.TIMELINE, content: <Timeline /> },
  { id: PAGES.CONTACT, content: <Contact /> }
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { activePage: AppStore.getState().activePage };

    this.onAppStoreChanged = this.onAppStoreChanged.bind(this);
  }

  componentDidMount() {
    AppStore.on("changed", this.onAppStoreChanged);
  }

  componentWillUnmount() {
    AppStore.off("changed", this.onAppStoreChanged);
  }

  onAppStoreChanged(data) {
    this.setState({ activePage: data.activePage });
  }

  render() {
    console.log(this.state.activePage);
    return (
      <div>
        <Topbar />

        {CONTENT_PAGES.find(page => page.id === this.state.activePage).content}
      </div>
    );
  }
}

module.exports = App;
