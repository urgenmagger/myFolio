import React from 'react';
import '../App.css';
import store from '../content/store.js';
import MyTemplate from '../components/MyTemplate.js';

function Home() {
  const content = store._state.contentPage.map(item => (
    <MyTemplate key={item.id} content={item} />
  ));
  return <div>{content}</div>;
}

export default Home;
