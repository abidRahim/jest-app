import React, { useState } from 'react';
import Header from './Header';
import Headline from './Headline';
import ListItem from './ListItem';
import './App.scss';

function App() {
  const [postList, setPostList] = useState([]);

  const fetchPosts = async () => {
    const fetchedPost = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(blob => blob.json());

    if (fetchedPost && fetchedPost.length !== 0) {
      setPostList(fetchedPost);
    }
  }

  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Please click the button to fetch posts" />
        {postList.map(post => {
          const { id, title, body } = post;
          return (
            <ListItem key={id} title={title} desc={body} />
          );
        })}
        <button className="btn" onClick={fetchPosts}>Fetch Posts</button>
        <button className="btn clr" onClick={() => setPostList([])}>Clear</button>
      </section>
    </div>
  );
}

export default App;
