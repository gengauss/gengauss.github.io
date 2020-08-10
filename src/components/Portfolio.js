import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@material-ui/core"
import Navbar from "./Navbar";
import project1 from "../images/dnatracker.png"
import project2 from "../images/cslearning.jpeg"
import project3 from "../images/findingfriend.jpeg"


const useStyles = makeStyles({
    mainContainer: {
        background: "#1b2735",
        minHeight: "100vh"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    },
    particlesCanva: {
        position: "fixed"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center" alignItems="center">
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    FindingFriendApp (2019)
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is a platform to help people finding friends base on their preferences. <br/>
                                    University group project.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/*<CardActions>*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Share*/}
                        {/*    </Button>*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Live Demo*/}
                        {/*    </Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    CSLearning (2018)
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A website that helps people who are interested in programming can study by themselves. <br/>
                                    University group project.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/*<CardActions>*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Share*/}
                        {/*    </Button>*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Live Demo*/}
                        {/*    </Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    DNA Tracker (2016)
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A website that helps identify the DNA sequence of the wild animals to prevent the illegal exploitation and trade in wildlife.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/*<CardActions>*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Share*/}
                        {/*    </Button>*/}
                        {/*    <Button size="small" color="primary">*/}
                        {/*        Live Demo*/}
                        {/*    </Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;