import React, { Component } from 'react';
import Profile from '.'
import DataService from '../DataService'

class RenderProfile extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.service = this.props.service || DataService;
        this.service.getProfile(this.props.id).then((response) => {
            this.setState({
                loading: false,
                fullname: response.data.profile.fullname,
                company: response.data.profile.company,
                title: response.data.profile.title,
                url: response.data.profile.url
            });
        });
    }

    render() {
        return (
            <div>
                <div><a style={{cursor: 'pointer'}} role="button" onClick={() => this.props.onSelected(null)}>← Go back</a></div>
                <br/>
                {this.state.loading &&
                    <p>Loading Details...</p>
                }
                <br/>
                {!this.state.loading &&
                    <div>
                        <Profile 
                            fullname={this.state.fullname}
                            title={this.state.title}
                            url={this.state.url} 
                            company={this.state.company}>
                        </Profile>
                    </div>
                }
            </div>
        );
    }
}

export default RenderProfile;
