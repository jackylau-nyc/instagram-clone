import React, { useState } from 'react';
import './App.css';
import Post from './Post.js';

function App() {

  const [posts, setPosts] = useState([
    {
      username: "justjacky",
      caption: "King Tiger Panaque",
      imageUrl: "https://cdn.shopify.com/s/files/1/1163/2672/products/L401-Royal-King-Alenquer-Pleco-12_1024x1024.jpg?v=1518710426"
    }, 
    {
      username: "justjacky",
      caption: "King Tiger Panaque",
      imageUrl: "https://cdn.shopify.com/s/files/1/1163/2672/products/L401-Royal-King-Alenquer-Pleco-12_1024x1024.jpg?v=1518710426"
    }
  ]);

  return (

    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {
        posts.map(post => {
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        })
      }
      {/* <Post username="justjacky" caption="King Tiger Panaque" imageUrl="https://cdn.shopify.com/s/files/1/1163/2672/products/L401-Royal-King-Alenquer-Pleco-12_1024x1024.jpg?v=1518710426" />
      <Post username="dorea830" caption="Queen Arabesque" imageUrl="https://cdn.shopify.com/s/files/1/1163/2672/products/L260-Queen-Arabesque-Pleco-5_1024x1024.jpg?v=1510877535" />
      <Post username="steliftw" caption="Leopard Frog" imageUrl="https://www.tropicalfishsite.com/wp-content/uploads/2013/04/leopard_frog_pleco.jpg" /> */}
    </div>
  );
}

export default App;
