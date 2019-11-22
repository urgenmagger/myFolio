import React from 'react';
import '../App.css'; //..level up
//import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
//import pageContent from '../content/pageContent.js';

function MyTemplate(props) {
  const handlerIcons = props.content.topIcons;
  const handlerTech = props.content.technologies;
  const icons = handlerIcons.map(i => (
    <li key={i.id}>
      <img className="top" src={i.icon} alt="" />
    </li>
  ));
  const tech = handlerTech.map(i => <div key={i.id}>{i.tech}</div>);

  return (
    <div>
      <div className="container">
        <div className="page_content">
          <div className="icons">
            <li>{icons}</li>
          </div>
          <h2>{props.content.rubric}</h2>
          {/*<img className="imgsvg" src={props.content.image} alt="" />*/}
          <div className="page_oriview">
            <div className="left_side">
              <h3>Обзор</h3>
              <p>{props.content.content}></p>
              <a href={props.content.path}>
                <Button variant="contained" color="primary" size="large">
                  {props.content.linkButton}
                </Button>
              </a>
              {/*
               *<Link to={props.content.path}>
               *  <Button variant="contained" color="primary" size="large">
               *    {props.content.linkButton}
               *  </Button>
               *</Link>
               */}
              <p> technologies: {tech}</p>
            </div>
            <div className="note">
              <p>{props.content.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTemplate;
