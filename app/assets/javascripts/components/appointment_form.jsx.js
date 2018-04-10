class AppointmentForm extends React.Component {
	render() {
		return (
			<div>
				<h2>Make a new Appointment</h2>
				<form>
					<input name='title' placeholder='Appointment Title' />
					<input name='appt_time' placeholder='Dane and Time' />
					<input type='submit' value='Make Appointment' />
				</form>
			</div>
			)
	}
}