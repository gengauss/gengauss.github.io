import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import Navbar from "./Navbar";
import {Cell, Grid} from "react-mdl";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#1b2735",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before" : {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #aed6dc",
            right: "40px",
            top: 0
        },
        "&:after" : {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")] : {
            padding: "2rem",
            "&:before" : {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem : {
        padding: "1rem",
        borderBottom: "2px solid #aed6dc",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before" : {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50%-5px)",
            borderStyle: "solid",
            borderColor: "#ff9a8d #ff9a8d transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")] : {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#aed6dc"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #ff9a8d #ff9a8d"
            }
        }
    },
    timeLineYear : {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.6rem",
        background: "#ff9a8d",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0.1rem",
        "&:before" : {
            display: "none"
        },
        [theme.breakpoints.up("md")] : {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)" : {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before" : {
                display: "none"
            }
        }
    },
    heading : {
        color: "#ff9a8d",
        padding: "2rem 0",
        fontSize: "1.8rem",
        textTransform: "uppercase"
    },
    subHeading : {
        color: "white",
        padding: "0",
        fontSize: "1.4rem",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles()
    return (
        <div style={{height: "100vh"}}>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    EDUCATION
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2014
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            HUS High School for Gifted Students
                        </Typography>
                        <Typography variant="body1" style={{color: "#ff9a8d"}}>
                            Informatics Specialized Class
                        </Typography>
                        <Typography variant="subtitle1" style={{color: "#aed6dc"}}>
                            GPA: 9.5/10
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            University of Engineering and Technology, VNU
                        </Typography>
                        <Typography variant="body1" style={{color: "#ff9a8d"}}>
                            Faculty of Information Technology
                        </Typography>
                        <Typography variant="subtitle1" style={{color: "#aed6dc"}}>
                            GPA: 3.6/4.0
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            Toyo University
                        </Typography>
                        <Typography variant="body1" style={{color: "#ff9a8d"}}>
                            Faculty of Information Networking for Innovation and Design (INIAD)
                        </Typography>
                        <Typography variant="subtitle1" style={{color: "#aed6dc"}}>
                            GPA: 4.16/4.3
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    WORK EXPERIENCE
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subHeading}>
                            株式会社atta
                        </Typography>
                        <Typography variant="body1" style={{color: "#ff9a8d"}}>
                            Data Science Intern
                        </Typography>
                        <Typography variant="subtitle1" style={{color: "#aed6dc"}}>
                            Flight and Hotel Price Prediction <br/>
                            Data visualization and models improvement for training data
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.mainContainer}>
                <Grid>
                    <Cell col={6}>
                        <Typography variant="h4" align="center" className={classes.heading}>
                            SKILLS
                        </Typography>
                        <ul>
                            <li class="html">Python</li>
                            <li class="css">C/C++</li>
                            <li class="js">Django</li>
                            <li className="html">Python</li>
                            <li className="css">C/C++</li>
                            <li className="js">Django</li>
                        </ul>
                    </Cell>
                    <Cell col={6}>
                        <Typography variant="h4" align="center" className={classes.heading}>
                            LANGUAGES
                        </Typography>
                        <ul>
                            <li class="html">Vietnamese</li>
                            <li class="css">English</li>
                            <li class="js">Japanese</li>
                        </ul>
                    </Cell>
                </Grid>
            </Box>
        </div>
    )
}

export default Resume;