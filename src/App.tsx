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
        {[...Array(40)].map((_, i) => <div key={i} className="snowflake"></div>)}
      </div>

      <div className="layout-wrapper">
        <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-logo">PHANTHANHDUNG</div>
          <nav className="sidebar-menu">
            <Link to="/learning" className="menu-item"><LayoutDashboard size={20} /> Hướng Dẫn Học</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Khoá Học</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Bản Đồ Thành Công</Link>
            <Link to="#" className="menu-item"><Users size={20} /> Quyền Đồng Hành</Link>
            <Link to="#" className="menu-item"><Video size={20} /> Short Triệu View</Link>
            <Link to="#" className="menu-item"><Wrench size={20} /> CoachMax 2 Kèm 1</Link>
            <Link to="#" className="menu-item"><Wrench size={20} /> Tool Vĩnh Viễn</Link>
            <Link to="#" className="menu-item"><Settings size={20} /> Gia Hạn Tool</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Tài Nguyên</Link>
            <Link to="#" className="menu-item"><Video size={20} /> Affiliate</Link>
            <Link to="#" className="menu-item"><Users size={20} /> Hồ Sơ</Link>
            <Link to="#" className="menu-item"><Video size={20} /> Share 43 Ngách</Link>
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
