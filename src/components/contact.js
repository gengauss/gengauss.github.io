import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../avatar.png'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anh Nguyen</h2>
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello, my name is Anh. Nice to meet you!</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+81) 070-4035-8554
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+84) 0989-393-853
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        nguyenqanh1804@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                {/*<ListItem>*/}
                                {/*    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>*/}
                                {/*        <i className="fa fa-skype" aria-hidden="true"/>*/}
                                {/*        MySkypeID*/}
                                {/*    </ListItemContent>*/}
                                {/*</ListItem>*/}


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;