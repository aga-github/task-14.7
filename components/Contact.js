Contact = React.createClass({
	propTypes: function() {
		item: React.PropTypes.object.isRequried;
	},
	render: function() {
		var propsItem = this.props.item;
		return (
			<li className='contactItem'>
				<img src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'} className={'contactImage'} />
				<div className='labelWrapper'>
					<p className='contactLabel'>Imię: {propsItem.firstName}</p>
					<p className='contactLabel'>Nazwisko: {propsItem.lastName}</p>
					<a href={'mailto:' + propsItem.email}>{propsItem.email}</a>
				</div>
			</li>
		)
	}
});

