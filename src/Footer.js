import logo from './logo.svg';
import git from './images/github.png';
const Footer = () => {
  return (
    <footer className="App-footer">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/MrDonev/fe-tiny-react-apps"
      >
        <img id="github" src={git} alt="github" />
      </a>
    </footer>
  );
};

export default Footer;
