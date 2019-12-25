import React from 'react';
import '../App.css';
import folioContent from '../content/folioContent.js';
import MyTemplate from '../components/MyTemplate.js';

function Home() {
  const content = folioContent.map(item => (
    <MyTemplate key={item.id} content={item} />
  ));
  return <div>{content}</div>;
}

export default Home;
