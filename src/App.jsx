function App() {
  return (
    <div>
      <h1>Resume</h1>
      <Objective />
      <Education />
      <Skills />
    </div>
  );
}
function Objective() {
  return (<div><br/><h2>Objective</h2><p>To become a successful fullstack developer proficient in modern web technologies.</p>
  <p>To contribute to the development of innovative web applications.</p></div>);
}
function Education() {
  return (<div><br/><h2>Education</h2><p>Master in Scientific Calculus</p><p>Master in Statistical Physics</p></div>);
}
function Skills() {
  return (<div><br/><h2>Skills</h2><ul><li>HTML/CSS/JavaScript</li><li>Java</li><li>C++</li></ul></div>);
}
export default App;