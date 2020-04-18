const React = require("react");
const Topbar = require("./Topbar");
const Home = require("./Home");
const Timeline = require("./Timeline");
const Contact = require("./Contact");
const { AppStore, PAGES } = require("./Store/AppStore");
const ProjectList = require("../Projects.json");
const LifeEvents = require("../LifeEvents.json");

function sortEntriesChronologically(entries) {
  const list = entries.slice();
  list.sort((a, b) => new Date(a.date) - new Date(b.date));
  return list;
}

const CONTENT_PAGES = [
  { id: PAGES.HOME, content: <Home /> },
  { id: PAGES.PROJECTS, content: <Timeline entries={sortEntriesChronologically(ProjectList)} /> },
  { id: PAGES.ABOUT_ME, content: <Timeline entries={sortEntriesChronologically(LifeEvents)} /> },
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
