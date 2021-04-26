import React, { Component } from 'react'
import CommentItem from './CommentItem';

class Comments extends Component<unknown, unknown> {

  fetchComments = async () => {
    /*
    * http://localhost:3004/comments
    * _limit: number
    * _page: number
    */
    const response = await fetch('http://localhost:3004/comments?_limit=10&_page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const comments: IComment[] = await response.json();
    console.log(comments);
    return comments;
  }

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="space-y-3">
        <CommentItem name="Tim Motti" avatar="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" comment="Hello. Yes, the entire exterior, including the walls." />
        <CommentItem name="Tim Motti" avatar="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" comment="Hello. Yes, the entire exterior, including the walls." />
        <CommentItem name="Tim Motti" avatar="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" comment="Hello. Yes, the entire exterior, including the walls." />
        <CommentItem name="Tim Motti" avatar="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" comment="Hello. Yes, the entire exterior, including the walls." />
        <CommentItem name="Tim Motti" avatar="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" comment="Hello. Yes, the entire exterior, including the walls." />
      </div>
    )
  }
}

export default Comments;

