import React from "react";
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Language from '@material-ui/icons/Language';


const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "#ffffff",
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
        <BottomNavigation width="auto" style={{background: "#457b9d"}}>
            <BottomNavigationAction
                href="https://www.linkedin.com/in/nguyenquynhanh99/"
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedIn/>}
            />
            <BottomNavigationAction
                href="https://github.com/gengauss"
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHub/>}
            />
            <BottomNavigationAction
                href="http://gengauss.github.io/"
                className={classes.root}
                style={{padding: 0}}
                icon={<Language/>}
            />
        </BottomNavigation>
    )
}

export default Footer;