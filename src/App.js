import React, { useEffect, useState } from 'react';
import './App.css';

// Filter, since reddit always returns stickied posts up top
function nonStickiedOnly(post){
  return !post.data.stickied
}

function App({ domElement }) {
  const subreddit = domElement.getAttribute("data-story-url")
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from reddit
  //   setLoading(true)
  //   fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setData(data.data.children.slice(0, 10));
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //       setLoading(false);
  //       setError('error fetching from reddit');
  //     });
  // }, [ subreddit ])

  return (
    <div className="reddit_widget__app">
      <h1 className="reddit_widget__header">
        HELLO
      </h1>
    </div>
  );
}

export default App;
