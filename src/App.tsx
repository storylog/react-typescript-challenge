import React, { Component } from 'react'
import CommentList from './components/CommentList';
import Pagination from './components/Pagination';

class App extends Component {
  render() {
    return (
      <div className="mx-auto p-24" style={{ maxWidth: 700 }}>
        <CommentList />
        <Pagination />
      </div>
    )
  }
}


export default App;
