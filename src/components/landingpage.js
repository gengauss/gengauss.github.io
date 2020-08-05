import React, { Component } from "react";
import avatar from '../avatar.png'
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                       <img
                        src={avatar}
                        alt='avatar'
                        className="avatar-img"
                       />
                       <div className="banner-text">
                           <h1>welcome to my page</h1>

                           <div className="social-links">

                               {/* LinkedIn */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-linkedin-square" aria-hidden="true" />
                               </a>

                               {/* Github */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-github-square" aria-hidden="true" />
                               </a>

                               {/* Facebook */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-facebook-square" aria-hidden="true" />
                               </a>

                               {/* Instagram */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-instagram" aria-hidden="true" />
                               </a>

                               {/* Twitter */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-twitter-square" aria-hidden="true" />
                               </a>

                               {/* Youtube */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-youtube-square" aria-hidden="true" />
                               </a>

                           </div>
                       </div>
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default LandingPage;