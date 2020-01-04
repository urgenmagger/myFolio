import React from 'react';
import '../App.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import Logo from '../img/logo.jsx';
import {Link} from 'react-router-dom';

function nav() {
  return (
    <nav>
      <div className="container">
        <div className="container-grid">
          <div className="nav_img">
            <Link to="/">
              <Logo color="#a87952" />
            </Link>
          </div>
          <div className="nav_info">
            <ul className="nav-links">
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/">
                <li>Home</li>
              </Link>
            </ul>
            <h1>Привет ворлд...</h1>
            <p>
              Я Евгений, друзья зовут меня Urgen. Это мое первое SPA написаное с
              нуля на React JS. Вобщем lorem ipsum товарищи.
            </p>
            <p>
              <em>Эй, сей веселей, вправо сей, влево сей… (АБС)</em>
            </p>
            <ul className="nav_social">
              <li>
                <a href="https://www.linkedin.com/in/evgen-megger-5aa783125/">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MEGGER_I">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://github.com/urgenmagger/">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href="https://t.me/Magger_Urgen">
                  <TelegramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default nav;
