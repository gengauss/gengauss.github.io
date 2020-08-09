import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {Apps, ArrowBack, AssignmentInd, ContactMail, Home} from "@material-ui/icons";
import avatar from '../avatar.png'
import Footer from './Footer'

// CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        lilsticon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        lilsticon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        lilsticon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        lilsticon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }
    const classes = useStyles();
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div"
             onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.lilsticon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: "tomato"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "tan"}}>
                            NGUYEN ANH
                        </Typography>
                        <MobilRightMenuSlider
                            // anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                            <Footer/>
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar

