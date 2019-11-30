import React from 'react';
import '../App.css'; //..level up
//import {Link} from 'react-router-dom';
import {styled} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
//import pageContent from '../content/pageContent.js';

function MyTemplate(props) {
  const handlerIcons = props.content.topIcons;
  const handlerTech = props.content.technologies;

  const icons = handlerIcons.map(i => (
    <li key={i.id}>
      <img className="top" src={i.icon} alt="icons" />
    </li>
  ));

  const tech = handlerTech.map(i => (
    <div key={i.id}>
      <li>{i.tech}</li>
    </div>
  ));

  //Castom button
  const MyButton = styled(Button)({
    background: '#A87952',
    order: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#000',
    height: 48,
    padding: '0 30px',
  });

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
            <h3>Обзор</h3>
            <p>{props.content.content}></p>
            <ul className="review_project">
              <li>
                <a href={props.content.path}>
                  <MyButton>{props.content.linkButton}</MyButton>
                </a>
              </li>
              <li>
                <a href="#url">
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
              <li> {tech}</li>
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
