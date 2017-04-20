import React, { Component } from 'react';

import data from '../../data.json';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.renderPost = this.renderPost.bind(this);
    }

    renderPost() {
        let post;
        for(let i = 0; i < data.posts.length; i++) {
            if(data.posts[i].id === parseInt(this.props.match.params.post_id, 10)) {
                post = data.posts[i];
            }
        }
        console.log(data);
        if(post) {
            let userName;
            for(let i = 0; i < data.users.length; i++) {
                if(data.users[i].id === post.userId) {
                    userName = data.users[i].name;
                }
            }
            return (
                <div>
                    <h2>{ post.title }</h2>
                    <p>{ post.body }</p>
                    <p>{ userName }</p>
                </div>
            );
        }
        else {
            return (<h2>Such post doesn't exist</h2>);
        }
    }

    render() {
        return (
            <div className="post-container">
                { this.renderPost() }
            </div>
        );
    }
}