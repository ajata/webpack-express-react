const React = require('react');
const ReactDOM = require('react-dom');
require('./style.scss');

class App extends React.Component {
	constructor(){
		super();
		this.state = {title: "webpack", name: "karyara"}
	}
	render() {
		return (<div>
					<h1>{this.props.name}</h1>
					<p>{this.props.title}</p>
				</div>);
	}
}




ReactDOM.render(<App name="karya" title="webpack plus" />,document.getElementById('container'));
