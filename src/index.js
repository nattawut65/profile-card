import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return(
    <>
      <div className='card'>
        <Avatar/>
        <div className='data'>
          <Intro/>
          <SkillList/>
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return(
    <div className='skill-list'>
      <Skill skill="Unity"emoji=" 😵‍💫 " color="cyan" />
      <Skill skill="PHP"emoji=" 😵‍💫 " color="orange" />
      <Skill skill="React"emoji=" 😵‍💫 " color="yellow" />
      <Skill skill="MySQL"emoji=" 😵‍💫 " color="orangered" />
    </div>
  );
}
function Skill(props) {
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return(
    <div>
      <h1>nattawut khempan</h1>
      <p>
        นักศึกษาที่เป็นลิงในคลาบคน จึงมาเรียนictเพื่อหวังเป็นคน เมื่อเรียนเสร็จจึงรู้ผล ไม่ใด้เป็นคนแต่เป็นลิงยิ่งกว่าเดิม
      </p>
    </div>
  );
}
function Avatar() {
  return <img className='Avatar' src='github_PNG28.png' width={360} height={360} alt='My Avatar'></img>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);