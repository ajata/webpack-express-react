const React = require('react');
const ReactDOM = require('react-dom');
require('./style.scss');

class Profile extends React.Component {
	render() {
		return (<div>
					<h1>{this.props.name}</h1>
					<p>{this.props.title}</p>
				</div>);
	}
}


ReactDOM.render(<Profile name="karma" title="Head of sales"/>,document.getElementById('start'));