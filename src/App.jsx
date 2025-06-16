import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LearningPathPage from './components/pages/LearningPath';
import Layout from './components/layout';
import DocumentationPage from './components/pages/DocumentationPage';
import ExamplesPage from './components/pages/ExamplesPage';
import CommunityPage from './components/pages/CommunityPage';
import "./index.css"
import HomePage from './components/Homepage';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;