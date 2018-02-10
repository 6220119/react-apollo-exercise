import React, { Component } from 'react';
import './ProfileList.css';

class ProfileList extends Component {
    render() {
        return (
            <section className="profileList">
                <ul>
                    {this.props.profiles.map(profile =>
                        <li key={profile.id}>
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.props.onSelected(profile)} role="button"
                                alt={profile.fullname}
                                aria-label={profile.fullname}>{profile.fullname}
                            </a>
                        </li>
                    )}
                </ul>
            </section>
        );
    }
}

export default ProfileList;
