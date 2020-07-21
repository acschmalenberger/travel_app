import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import { typography } from '@material-ui/system';
import logo from './images/map.jpg';

const styles = theme => ({
    card: {
        maxWidth: 800,
        margin: 'auto',
        marginTop: theme.spacing(5)

    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme
            .spacing(2)}px`,
        color: theme.palette.text.secondary,
        fontSize: 24
    },
    media: {
        minHeight: 600
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card} >
                    <Typography type="headline" component="h2" className={classes.title} align="center" >
                        Welcome to the Covid Escape
					</Typography>
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        title="The Covid Escape"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.title} align="center">
                            "The smarter way to financially plan your travel"
						</Typography>
                    </CardContent>
                </Card >
            </div >
        );
    }
}

export default withStyles(styles)(Home);