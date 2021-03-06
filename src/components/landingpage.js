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

                       <div className="social-links">
                           {/* LinkedIn */}
                           <div className="card">
                           <a href="https://www.linkedin.com/in/nguyenquynhanh99/" rel="noopener noreferrer" target="_blank">
                               <i className="fa fa-linkedin-square" aria-hidden="true" />
                           </a>
                           </div>

                           {/* Github */}
                           <div className="card">
                           <a href="https://github.com/gengauss" rel="noopener noreferrer">
                               <i className="fa fa-github-square" aria-hidden="true" />
                           </a>
                           </div>

                           {/* Facebook */}
                           <div className="card">
                           <a href="https://m.facebook.com/shiroemon.madeon.7" rel="noopener noreferrer">
                               <i className="fa fa-facebook-square" aria-hidden="true" />
                           </a>
                           </div>

                           {/* Instagram */}
                           <div className="card">
                           <a href="https://www.instagram.com/gaussshiroemon/" rel="noopener noreferrer">
                               <i className="fa fa-instagram" aria-hidden="true" />
                           </a>
                           </div>

                           {/* Twitter */}
                           <div className="card">
                           <a href="http://twitter.com/gaussshiroemon" rel="noopener noreferrer">
                               <i className="fa fa-twitter-square" aria-hidden="true" />
                           </a>
                           </div>

                           {/* Youtube */}
                           <div className="card">
                           <a href="https://www.youtube.com/channel/UChQUoXmV9lBOHR5JrtEO1GQ?view_as=subscriber">
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