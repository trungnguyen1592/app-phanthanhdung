import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LearningGuide from './pages/LearningGuide';
import { LayoutDashboard, BookOpen, Video, Settings, LogOut, Wrench, Menu, X, Users } from 'lucide-react';
import './styles/Home.css';
import './styles/LearningGuide.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      {/* Hiệu ứng tuyết rơi */}
      <div className="snowflakes" aria-hidden="true">
        {[...Array(20)].map((_, i) => <div key={i} className="snowflake"></div>)}
      </div>

      <div className="layout-wrapper">
        <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-logo">PHANTHANHDUNG</div>
          <nav className="sidebar-menu">
            <Link to="/learning" className="menu-item"><LayoutDashboard size={20} /> Hướng dẫn học</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Bản đồ thành công</Link>
            <Link to="#" className="menu-item"><Video size={20} /> Short triệu view</Link>
            <Link to="#" className="menu-item"><Wrench size={20} /> CoachMax 2 kèm 1</Link>
            <Link to="#" className="menu-item"><Settings size={20} /> Gia hạn Tool</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Tài nguyên</Link>
            <Link to="#" className="menu-item"><Users size={20} /> Hồ sơ</Link>
            <Link to="#" className="menu-item"><Video size={20} /> Share 43 ngách</Link>
            <Link to="#" className="menu-item"><Wrench size={20} /> Ngách Solo Ultra</Link>
          </nav>
          <div className="sidebar-footer">
            <a href="#" className="menu-item"><Settings size={20} /> Cài đặt</a>
            <a href="#" className="menu-item"><LogOut size={20} /> Đăng xuất</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<LearningGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
