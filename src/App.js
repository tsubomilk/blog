import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    
    <Router>
      <div>
        {/* ここにナビゲーションバーを配置することもできます */}
        {/* <Route path="/" exact component={HomePage} />
        <Route path="/articles" component={ArticlesPage} /> */}
        {/* 他のルートも同様に設定 */}
      <Navbar />
      {/* 他のコンポーネントや要素 */}
      </div>
    </Router>
  );
}

export default App;
