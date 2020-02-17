const GlobalStore = require("./GlobalStore");

const PAGES = {
  HOME: "Home",
  INTERESTS: "Interests",
  PROJECTS: "Projects",
  TIMELINE: "Timeline",
  CONTACT: "Contact"
};

const STATE = {
  activePage: "activePage"
};

class AppStore extends GlobalStore {
  constructor() {
    super({
      [STATE.activePage]: PAGES.HOME
    });
  }

  setActivePage(activePage) {
    this.update(STATE.activePage, activePage);
  }
}

module.exports = { AppStore: new AppStore(), PAGES };
