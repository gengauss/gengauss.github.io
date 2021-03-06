import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {Box, Grid, Typography} from "@material-ui/core";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from '@material-ui/icons/YouTube';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    form: {
        width: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "fixed"
    },
    button: {
        marginTop: "1rem",
        color: "#ff9a8d",
        borderColor: "#ff9a8d"
    },
    particlesCanva: {
        position: "fixed"
    },
    root : {
        color: "#aed6dc",
        fontSize: 50,
    }
}))

// const InputField = withStyles({
//     root: {
//         "& label.Mui-focused": {
//             color: "#ff9a8d",
//         },
//         "& label": {
//             color: "#aed6dc"
//         },
//         "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//                 borderColor: "#aed6dc",
//             },
//             "&:hover fieldset": {
//                 borderColor: "#aed6dc"
//             },
//             "&.Mui-focused fieldset": {
//                 borderColor: "#aed6dc"
//             }
//         }
//     },
// })(TextField);

const Contacts = () => {
    const classes = useStyles()
    return (
        <div style={{position: "fixed"}}>
        <Box component="div" style={{background: "#4a536b", height: "100vh", width: "200vh"}}>
            <Navbar style={{width: "200vh"}} />
            <Particles
                style={{backgroundColor: "#1b2735", position: "fixed"}}
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: false,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "#ff9a8d"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}/>
            <Grid container justify="center">
                <Box className={classes.form} style={{position: "fixed"}}>
                    <Typography variant="h5"
                                style={{
                                    color: "#e5e5e5",
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                }}>
                        contact info
                    </Typography>
                    <br/>
                    <Typography variant="h6"
                                style={{
                                    color: "#ff9a8d",
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                }}>
                        social media
                    </Typography>
                    {/*<InputField fullWidth={true} label="Name" variant="outlined" margin="dense" size="medium"*/}
                    {/*            inputProps={{style: {color: "white"}}}/>*/}
                    {/*<br/>*/}
                    {/*<InputField fullWidth={true} label="Email" variant="outlined" margin="dense" size="medium"*/}
                    {/*            inputProps={{style: {color: "white"}}}/>*/}
                    {/*<br/>*/}
                    {/*<InputField fullWidth={true} label="Comment" variant="outlined" margin="dense" size="medium"*/}
                    {/*            inputProps={{style: {color: "white"}}}/>*/}
                    {/*<br/>*/}
                    {/*<Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>*/}
                    {/*    send*/}
                    {/*</Button>*/}
                    <Grid container justify="center" alignItems="center" style={{margin: "6px"}}>
                        <Button
                            href="https://facebook.com/shiroemon.madeon.7"
                            className={classes.root}
                            target="_blank"
                            // style={{padding: 0}}
                            startIcon={<Facebook />}
                        />
                        <Button
                            href="https://twitter.com/gaussshiroemon"
                            className={classes.root}
                            target="_blank"
                            // style={{padding: 0}}
                            startIcon={<Twitter/>}
                        />
                        <Button
                            href="https://www.instagram.com/gaussshiroemon"
                            className={classes.root}
                            target="_blank"
                            // style={{padding: 0}}
                            startIcon={<Instagram/>}
                        />
                        <Button
                            href="https://www.youtube.com/channel/UChQUoXmV9lBOHR5JrtEO1GQ"
                            className={classes.root}
                            target="_blank"
                            // style={{padding: 0}}
                            startIcon={<YouTube/>}
                        />
                    </Grid>
                    <br/>
                    <Typography variant="h6"
                                style={{
                                    color: "#ff9a8d",
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                }}>
                        email
                    </Typography>
                    <Grid container justify="center" alignItems="center">
                        <Email style={{
                            color: "#ff9a8d",
                            textAlign: "center",
                            textTransform: "uppercase"}}/> <Typography style={{color: "#aed6dc", fontSize: 18}}>nguyenqanh1804@gmail.com</Typography>
                    </Grid>
                    <br/>
                    <Typography variant="h6"
                                style={{
                                    color: "#ff9a8d",
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                }}>
                        phone
                    </Typography>
                    <Grid container justify="center" alignItems="center">
                        <Phone style={{
                            color: "#ff9a8d",
                            textAlign: "center",
                            textTransform: "uppercase"}}/> <Typography style={{color: "#aed6dc", fontSize: 18}}>+84-989393853</Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Phone style={{
                        color: "#ff9a8d",
                        textAlign: "center",
                        textTransform: "uppercase"}}/> <Typography style={{color: "#aed6dc", fontSize: 18}}>+81-7040358554</Typography>
                    </Grid>
                </Box>
            </Grid>
        </Box>
        </div>
    );
};

export default Contacts;
