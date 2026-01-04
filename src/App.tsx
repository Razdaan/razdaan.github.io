import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomePage, PostPage, AboutPage, NotFoundPage } from './pages';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:slug" element={<PostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
