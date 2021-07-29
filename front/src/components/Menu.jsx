import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Home, Sync } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to="/">
                        <Home />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Listagem de usuarios
                    </Typography>
                    <IconButton color="inherit">
                        <Sync />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu