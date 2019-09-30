import React from 'react';
import '../App.css'; //..level up
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function MyTemplate(props) {
  return (
    <div>
      <div className="container">
        <div className="page_content">
          <h2>{props.content.rubric}</h2>
          <img className="imgsvg" src={props.content.image} alt="" />
          <div class="page_oriview">
            <h3>Обзор</h3>
            <p>{props.content.content}></p>
            <Link to={props.content.path}>
              <Button variant="contained" color="primary">
                <li>{props.content.linkButton}</li>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTemplate;
