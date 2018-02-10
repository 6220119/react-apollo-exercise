import React, { Component } from 'react';
import styles from './Profile.css'

class Profile extends Component {
    render() {
        return (
            <section className={styles.Profile}>
                <dl>
                    <dt>Full Name: {this.props.fullname}</dt>
                    <dt>Title: {this.props.title}</dt>
                    <dt>Company: {this.props.company}</dt>
                    <dt>URL: <a href={this.props.url} target="_blank">{this.props.url}</a></dt>
                </dl>
            </section>
        );
    }
}

export default Profile;
