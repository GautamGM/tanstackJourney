import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearningPathPage from "./components/pages/LearningPath";
import Layout from "./components/layout";
import DocumentationPage from "./components/pages/DocumentationPage";
import ExamplesPage from "./components/pages/ExamplesPage";
import CommunityPage from "./components/pages/CommunityPage";
import "./index.css";
import PostFeed from "./components/pages/Code";
import HomePage from "./components/HomePage";
import PostDetailPage from "./components/PostDetailPage";
import Cars from "./components/CarsList";
import InfiniteScroll from "./components/InfiniteScroll";
import Todo from "./components/Todo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="path" element={<LearningPathPage />} />
          <Route path="docs" element={<DocumentationPage />} />
          <Route path="examples" element={<ExamplesPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="code" element={<PostFeed />} />
          <Route path="post-detail/:id" element={<PostDetailPage />} />
          <Route path="cars" element={<Cars />} />
          <Route path="infinite-scroll" element={<InfiniteScroll />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
