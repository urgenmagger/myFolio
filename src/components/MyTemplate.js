import React from 'react';
import '../App.css'; //..level up
//import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function MyTemplate(props) {
  const handlerIcons = props.content.topIcons;
  const handlerTech = props.content.technologies;

  const icons = handlerIcons.map(i => (
    <li key={i.id}>
      <img className="top" src={i.icon} alt="icons" />
    </li>
  ));

  const tech = handlerTech.map(i => <li key={i.id}>{i.tech}</li>);

  return (
    <div>
      <div className="container">
        <div className="page_content">
          <div className="icons">
            <ul>{icons}</ul>
          </div>
          <h2>{props.content.rubric}</h2>
          <div className="page_oriview">
            <h3>Обзор</h3>
            <p>{props.content.content}</p>
            <a href={props.content.linkDetail}>{props.content.detail}</a>
            <ul className="review_project">
              <li>
                <a href={props.content.path}>
                  <Button
                    className="main-button"
                    variant="contained"
                    color="primary"
                    size="large">
                    {props.content.linkButton}
                  </Button>
                </a>
              </li>
              <li>
                <a href="https://github.com/urgenmagger/svg_optim">
                  <img src={props.content.iconSource} alt="" />
                  <span>{props.content.textSource}</span>
                </a>
              </li>
            </ul>

            {/*
             *<Link to={props.content.path}>
             *  <Button variant="contained" color="primary" size="large">
             *    {props.content.linkButton}
             *  </Button>
             *</Link>
             */}
            <div className="technologies">
              <strong>technologies:</strong>
              <ul>{tech}</ul>
            </div>
          </div>
          <div className="note">
            <p>{props.content.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTemplate;
