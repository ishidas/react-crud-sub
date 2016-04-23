var UserInfo = React.createClass({
	getInitialState: function(){
		return {
			login: '',
			avatart_url: ''
		};
	},

	componentDidMount: function(){
		this.serverRequest = $.get("https://api.github.com/users/ishidas", function(result){
			// var dataComingOut = result[0];
			// console.dir('here is result ' + dataComingOut);
			// debugger;
			console.dir('here is result ' + result);
			this.setState({
				login: result.login,
				avatart_url: result.avatart_url
			});
		}.bind(this));
	},

	componentWillUnmount: function(){
		this.serverRequest.abort();
	},

	render: function(){
		return (
			<div>
				{this.state.login} is my login name.
				and {this.state.dataOut}
				<img src={this.state.avatart_url} />
			</div>
		);
	}
});

ReactDOM.render(<UserInfo />, document.getElementById('example'));
