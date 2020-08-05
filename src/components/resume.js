import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../avatar.png'


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={avatar}
                                alt="avatar"
                                className="avatar-img"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Nguyen Quynh Anh</h2>
                        <h4 style={{color: 'grey'}}>Student | Data Science Intern</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>My name is Nguyen Quynh Anh. I'm from Vietnam. Currently, I am a student at INIAD, Toyo University. I am interested in Computer Science, especially in Machine Learning and Data Science.
                        I am also considering health and medicine, therefore, I want to apply the knowledge in the Technology field to improve health issues.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1-17-11 Akabanedai, Kita-ku, Tokyo, Japan</p>
                        <h5>Phone</h5>
                        <p>+81-70-4035-8554</p>
                        <h5>Email</h5>
                        <p>nguyenqanh1804@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2014}
                            endYear={2017}
                            schoolName="HUS High School for Gifted Students"
                            schoolDescription="Specialized Class in Informatics"
                        />

                        <Education
                            startYear={2017}
                            endYear={2018}
                            schoolName="University of Engineering and Technology, VNU"
                            schoolDescription="Faculty of Information Technology"
                        />

                        <Education
                            startYear={2018}
                            endYear={2022}
                            schoolName="Toyo University"
                            schoolDescription="Faculty of Information Networking for Innovation and Design"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2019}
                            endYear={"Current"}
                            jobName="Data Science Intern at atta Inc."
                            jobDescription=""
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Flight and Hotel Price Prediction, data visualization and improving models for training data"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={90}
                        />
                        <Skills
                            skill="C/C++"
                            progress={90}
                        />
                        <Skills
                            skill="Django"
                            progress={80}
                        />
                        <Skills
                            skill="PHP"
                            progress={50}
                        />
                        <Skills
                            skill="Laravel"
                            progress={50}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;