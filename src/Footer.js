import logo from './logo.svg';
import git from './images/github.png';
const Footer = () => {
  return (
    <footer className="App-footer">   <a
        rel="noopener noreferrer"
        target="_blank"
        id='github-a'
        href="https://github.com/MrDonev/fe-tiny-react-apps"
      >
        <img id="github" src={git} alt="github" />
      </a>
      
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       <img src={logo} className="App-logo" alt="logo" /> Learn React
      </a>
   
    </footer>
  );
};

export default Footer;
