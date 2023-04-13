import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  return (
    <div className="button">
     <Link to="/bot"><button>AI BOT</button></Link>
     <Link to="/About"><button>I am SAD</button></Link>
    </div>
  );
}

export default Home;