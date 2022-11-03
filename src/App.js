import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopicPage from "./components/TopicPage";
import Navi from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import LikeDislike from "./components/LikeDislike";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Navi />
      </div>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:topic" element={<TopicPage />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
