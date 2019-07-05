var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired,
	},
	render: function() {
		var propsContact = this.props.contact;
		return (
			<form className="form">
				<input type={'text'} placeholder={'Imię'} value={propsContact.firstName} />
				<input type={'text'} placeholder={'Nazwisko'} value={propsContact.lastName} />
				<input type={'text'} placeholder={'Email'} value={propsContact.email} />
				<button type={'submit'}>Dodaj kontakt</button>
			</form>
		)
	}
});