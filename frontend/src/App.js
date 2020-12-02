import { GlobalStyles } from './GlobalStyles';
import Sidebar from './components/Sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonList from './components/Cards/cards';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Sidebar />
      <PersonList />
    </Router>
  );
}

export default App;
