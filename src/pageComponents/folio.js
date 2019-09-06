import React from 'react';
import '../App.css';
import pageContent from '../content/pageContent.js';
import MyTemplate from '../components/MyTemplate.js';

function folio() {
  const content = pageContent.map(item =>( 
    <MyTemplate key={item.id} content={item} />
  ));
  return (
    <div>
      <h1>Folio Page</h1>
      {content}
    </div>
  );
}

export default folio;
