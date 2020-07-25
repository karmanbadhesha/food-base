import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    media: {
        height: '100%',
        width: '100%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function Meals(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (


        <Card>
            <CardActionArea onClick={handleExpandClick}>
                <CardMedia
                    title={props.meal.strMeal}
                    src={props.thumbnail}
                    component="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.meal.strMeal}
                    </Typography>

                </CardContent>
                <CardActions>
                </CardActions>
            </CardActionArea>
            <CardActions disableSpacing>
                <Link href={props.meal.strSource}>
                    <Button size="small" color="primary">
                        Visit source
                </Button>
                </Link>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">Instructions</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.meal.strInstructions}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )

}

export default Meals;