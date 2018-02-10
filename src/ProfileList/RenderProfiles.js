import React, { Component } from 'react';
import ProfileList from '.'
import DataService from '../DataService'

class RenderProfiles extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            profiles: []
        };
    }

    componentDidMount() {
        this.service = this.props.service || DataService;
        this.service.getAllProfiles().then((response) => {
            this.setState({
                loading: false,
                profiles: response.data.profiles
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.loading &&
                    <p>Loading People List...</p>
                }
                {!this.state.loading &&
                    <div>
                        <p>List of people I met:</p>
                        <ProfileList profiles={this.state.profiles} onSelected={this.props.onSelected}></ProfileList>
                    </div>                   
                }
            </div>
        );
    }
}

export default RenderProfiles;
