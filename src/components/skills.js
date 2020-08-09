import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex', fontSize: "1.4rem", color: "white"}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '70%'}} progress={this.props.progress} /> </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;