import { BrowserRouter as Router } from 'react-router-dom';
import PortfolioRouter from '@routers/portfolio-routers';

function App() {
  return (
    <Router>
        <PortfolioRouter />
    </Router>
  );
}

export default App;
