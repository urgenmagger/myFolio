import React from 'react';
import '../App.css'; //..level up
import {Link} from 'react-router-dom';

function MyTemplate(props) {
  return (
    <div>
      <div className="container">
        <div className="page_content">
          <h2>{props.content.rubric}</h2>
          <div class="page_oriview">
            <h3>Обзор</h3>
            <p>
              <div>{props.content.content}</div>
            </p>
            <Link to={props.content.path}>
              <li>{props.content.linkButton}</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTemplate;
