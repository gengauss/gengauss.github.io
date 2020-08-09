import React from "react";
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "#4a536b",
            "&:hover": {
                fill: "#ff9a8d",
                fontsize: "2.8rem"
            }
        }
    },
});

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#aed6dc"}}>
            <BottomNavigationAction
                href="https://facebook.com/shiroemon.madeon.7"
                className={classes.root}
                style={{padding: 0}}
                icon={<Facebook/>}
            />
            <BottomNavigationAction
                href="https://twitter.com/gaussshiroemon"
                className={classes.root}
                style={{padding: 0}}
                icon={<Twitter/>}
            />
            <BottomNavigationAction
                href="https://www.instagram.com/gaussshiroemon/"
                className={classes.root}
                style={{padding: 0}}
                icon={<Instagram/>}
            />
        </BottomNavigation>
    )
}

export default Footer;