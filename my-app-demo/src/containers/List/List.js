import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import './List.css';

class List extends Component {
  render(){
    return(
      <div>
        <h2>This is list posts from server</h2>
        <section>
          <Post />
          <Post />
          <Post />
        </section>
      </div>
    )
  }
}

export default List;