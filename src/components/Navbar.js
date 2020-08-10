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
import {Apps, AssignmentInd, ContactMail, Home, Menu } from "@material-ui/icons";
import avatar from '../avatar.png'
import Footer from './Footer'

// CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#457b9d",
        height: "100%",
        fontSize: 14
    },
    avatar: {
        display: "block",
        margin: "5rem auto",
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    listItem: {
        color: "#ffffff"
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
            <Avatar className={classes.avatar} src={avatar} alt="Anh Nguyen"/>
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
                <AppBar position="static" style={{background: "#ff9a8d"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <Menu style={{fontSize: 30, color: "#457b9d"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "#1b2735"}}>
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

