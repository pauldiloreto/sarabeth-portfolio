import React from 'react';
import Keys from "../keys";
import Masonry from 'react-masonry-component';
import Player from 'react-player';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

class Videos extends React.Component {
	constructor(props) {
		super(props);
		
		const Contentful = require('contentful');
		this.client = Contentful.createClient(Keys);
		
		this.state = {
			loading: true,
			videoActive: false,
			currentVideo: 0
		};
	}
	
	componentDidMount() {
		this.client.getEntries({ content_type: 'audio' }).then(res => {
			this.setState({
				audioGroups: res.items,
				loading: false
			});
		});
	}
	
	render() {
		const { classes, videos, ...other } = this.props;
		
		return (
			<Masonry className={classes.container} {...other}>
				
				
				{Array.isArray(videos) && videos.map((video, index) => (
					<div className={classes.videoContainer} key={index}>
						<img src={`${video.url}?w=400`}
						     alt={video.title}
						     className={classes.video}
						     onClick={() => this.setState({ videoActive: true, currentVideo: index })}
						/>
					</div>
				))}
			</Masonry>
		);
	}
}

const styles = theme => ({
	container: {
		margin: theme.spacing.unit * 4
	},
	video: {
		padding: theme.spacing.unit * 2,
		width: `calc(100% - ${theme.spacing.unit * 4}px)`,
		cursor: 'pointer',
		verticalAlign: 'top' // Removes bottom gutter for Masonry
	},
	videoContainer: {
		height: 'auto',
		padding: 0,
		margin: 0
	},
	// Breakpoints
	[`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
		videoContainer: {
			width: '50%'
		}
	},
	[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
		videoContainer: {
			width: '33.33%'
		}
	},
	[`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
		videoContainer: {
			width: '25%'
		}
	}
});

export default withStyles(styles)(Videos);