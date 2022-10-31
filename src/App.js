import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header'
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList />
    </div>
  );
}

export default App;
