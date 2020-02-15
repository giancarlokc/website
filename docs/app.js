const React = require('react')
const ReactDom = require('react-dom')
const App = require('./src/App')

window.addEventListener("DOMContentLoaded", function() {
  const domContainer = document.getElementById("root");
  ReactDom.render(React.createElement(App), domContainer);
}, false);
