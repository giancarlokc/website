const React = require('react')
const ReactDom = require('react-dom')

class App extends React.Component {
  render() {
    return <div>HELLO</div>
  }
}

window.addEventListener("DOMContentLoaded", function() {
  const domContainer = document.getElementById("root");
  ReactDom.render(React.createElement(App), domContainer);
}, false);
