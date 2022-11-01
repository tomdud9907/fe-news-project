import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopicPage from "./components/TopicPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:topic" element={<TopicPage />} />
      </Routes>
    </div>
  );
}

export default App;
