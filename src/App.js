import React, { Component } from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Home from "./components/";

class App extends Component {
    render() {
        return (
            <>
            <CssBaseline/>
                <Home />
            </>
            // <div className="demo-big-content">
            //     <Home />
            //     <Layout>
            //         <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">ANH NGUYEN</Link>} scroll>
            //             <Navigation>
            //                 <Link to="/resume">Resume</Link>
            //                 <Link to="/aboutme">About Me</Link>
            //                 <Link to="/projects">Projects</Link>
            //                 <Link to="/contact">Contact</Link>
            //             </Navigation>
            //         </Header>
            //         <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">ANH NGUYEN</Link>}>
            //             <Navigation>
            //                 <Link to="/resume">Resume</Link>
            //                 <Link to="/aboutme">About Me</Link>
            //                 <Link to="/projects">Projects</Link>
            //                 <Link to="/contact">Contact</Link>
            //             </Navigation>
            //         </Drawer>
            //         <Content>
            //             <div className="page-content" />
            //             <Main/>
            //         </Content>
            //     </Layout>
            // </div>

        );
    }
}

export default App;