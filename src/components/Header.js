import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box} from "@material-ui/core"
import Typed from "react-typed"
import avatar from "../avatar.png"

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vm",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["NGUYEN ANH"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h4">
                <Typed strings={["a full-time student", "a part-time data scientist", "photographer"]}
                       typeSpeed={40}
                       backSpeed={80}
                       loop/>
            </Typography>
        </Box>
    )
}

export default Header;