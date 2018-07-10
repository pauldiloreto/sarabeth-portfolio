import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = props => (
	<div className={props.classes.container}>
		<CircularProgress color='secondary' size={75} thickness={8} />
	</div>
);

const styles = theme => ({
	container: {
		width: '100%',
		marginTop: theme.spacing.unit * 4,
		display: 'flex',
		justifyContent: 'center'
	}
});

export default withStyles(styles)(Loading);