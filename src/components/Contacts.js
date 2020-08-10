import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles"
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";


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
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#ff9a8d",
        },
        "& label": {
            color: "#aed6dc"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#aed6dc",
            },
            "&:hover fieldset": {
                borderColor: "#aed6dc"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#aed6dc"
            }
        }
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles()
    return (
        <Box component="div" style={{background: "#4a536b", height: "100vh"}}>
            <Navbar style={{position: "fixed"}}/>
            <Particles
                style={{backgroundColor: "#4a536b", position: "fixed"}}
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
            {/*<Grid container justify="center">*/}
            {/*    <Box component="form" className={classes.form} style={{position: "fixed"}}>*/}
            {/*        <Typography variant="h5"*/}
            {/*                    style={{*/}
            {/*                        color: "#ff9a8d",*/}
            {/*                        textAlign: "center",*/}
            {/*                        textTransform: "uppercase"*/}
            {/*                    }}>*/}
            {/*            contact me*/}
            {/*        </Typography>*/}
            {/*        <InputField fullWidth={true} label="Name" variant="outlined" margin="dense" size="medium"*/}
            {/*                    inputProps={{style: {color: "white"}}}/>*/}
            {/*        <br/>*/}
            {/*        <InputField fullWidth={true} label="Email" variant="outlined" margin="dense" size="medium"*/}
            {/*                    inputProps={{style: {color: "white"}}}/>*/}
            {/*        <br/>*/}
            {/*        <InputField fullWidth={true} label="Comment" variant="outlined" margin="dense" size="medium"*/}
            {/*                    inputProps={{style: {color: "white"}}}/>*/}
            {/*        <br/>*/}
            {/*        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>*/}
            {/*            send*/}
            {/*        </Button>*/}
            {/*    </Box>*/}
            {/*</Grid>*/}
        </Box>
    );
};

export default Contacts;