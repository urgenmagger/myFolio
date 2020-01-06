import React from 'react';
import '../App.css';

function about() {
  return (
    <div>
      <div className="container">
        <div className="about_content">
          <h1>Про меня</h1>
          <p>
            Не спешно ищу работу в сфере IT. Прежде всего интересуют предложения
            связанные с программированием в императивном стиле. Не люблю
            различные CMS, предпочитаю работать над проектом с нуля, либо
            поддерживать таковой. Программирование никогда не было связано с
            основным доходом, скорее это хобби, поэтому мои знания разрознены.
          </p>
          <h2>Что я знаю:</h2>
          <h3>HTML/CSS/SVG:</h3>
          <p>
            На уровне достаточном, чтобы написать простое приложение,{' '}
            <strong>SVG</strong> стоит выделить отдельно, долгое время считал,
            что за этим форматом будущее, поэтому проводил с ним различные
            эксперименты. Недавно познакомился с <strong>grid</strong> и{' '}
            <strong>flex</strong>, элементы в портфолио отпозиционированы и
            адаптированы с помощью этих технологий.
          </p>
          <h3>JavaScript/ES5/ES6:</h3>
          <p>
            Тут все сложно, специально чтобы понять как вообще программировать
            записался на курсы <strong>Java</strong>. На <strong>ES5</strong>{' '}
            написал начало небольшой игры, <strong>ES6</strong> начал осваивать
            после <strong>Java</strong>, так как стал понимать зачем нужны
            объекты, классы, конструкторы и вообще <strong>ООП</strong>. До
            этого программирование заключалось в поиске уже готового API для
            решения поставленных задач.
          </p>
          <h3>Java:</h3>
          <p>
            <strong>Java Core</strong> освоен не полностью, пока проходил курс
            по языку <strong>Java</strong> были добавлены(и продолжают вводится
            новые инструменты), успел освоить синтаксис, понял основы{' '}
            <strong>ООП</strong>, <strong>generic</strong>, курс прервал на
            упражненияx со{' '}
            <strong>
              <em>Stream API</em>
            </strong>{' '}
            и{' '}
            <strong>
              <em>lambda</em>
            </strong>
            .
          </p>
          <h3>CMS/E-Commerce:</h3>
          <p>
            <strong>WordPress</strong> в первую очередь, на нем написал первое
            портфолио. <strong>Opencart</strong> осваивал когда подрабатывал на
            фрилансе, на этой системе собрал три магазина, ни один из них уже не
            работает.
          </p>
          <h3>(Tools) экосистема:</h3>
          <p>
            Работаю на двух машинах, <strong>OS linux</strong>, на слабой{' '}
            <strong>Lubuntu</strong>, на той, что помощней{' '}
            <strong>Ubuntu Mate</strong>. Любимый редактор -{' '}
            <strong>Vim</strong>, понимаю, что на нем не все можно, поэтому
            ставлю <strong>vim mode</strong> на ту среду которая необходима.
            Много работал с <strong>Intellige IDE</strong> когда изучал{' '}
            <strong>Java</strong>, также использую <strong>Eclipse</strong>,{' '}
            <strong>Android Studio</strong>. Портфолио написано в{' '}
            <strong>Vim</strong>,немного писал в <strong>Visual Code</strong>,
            но понял, что <strong>Vim</strong> вполне достаточен для{' '}
            <strong>React</strong>. Не боюсь консоли, использую два эмулятора
            терминала ((<strong>tilda</strong> (аналог <strong>quake</strong>),{' '}
            <strong>mate terminal</strong>)). Для слежения за процессом
            разработки использую <strong>Tmux</strong> (разбиваю{' '}
            <strong>tilda</strong> на два экрана, в одном открыт{' '}
            <strong>git</strong>, во втором консоль <strong>react</strong>). Все
            настройки (<strong>git</strong>, <strong>bash</strong>,{' '}
            <strong>vim</strong> etc) храню в открытом доступе на{' '}
            <a href="https://github.com/urgenmagger/dotfiles">github</a>.
            Графику мастерил сам, <strong>Inkscape</strong> для вектора,{' '}
            <strong>Gimp</strong> для растра.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
