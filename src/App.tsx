import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LearningGuide from './pages/LearningGuide';
import { LayoutDashboard, BookOpen, Video, Settings, LogOut, Wrench, Menu, X, Users, Rocket, Flame, Crown } from 'lucide-react';
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
          <div className="sidebar-logo"><img src="/images/dung-avatar.jpg" alt="Phan Thanh Dũng" className="logo-img" /></div>
          <nav className="sidebar-menu">
            <Link to="/learning" className="menu-item"><LayoutDashboard size={20} /> Hướng Dẫn Học</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Khoá Học</Link>
            <Link to="#" className="menu-item"><BookOpen size={20} /> Bản Đồ Thành Công <span className="badge-new"><Rocket size={10} /> NEW</span></Link>
            <Link to="#" className="menu-item"><Users size={20} /> Quyền Đồng Hành <span className="badge-new"><Rocket size={10} /> NEW</span></Link>
            <Link to="#" className="menu-item"><Video size={20} /> Short Triệu View <span className="badge-new badge-short">SHORT</span></Link>
            <Link to="#" className="menu-item menu-coachmax"><Crown size={20} color="#f97316" /> CoachMax 2 Kèm 1 <span className="badge-new badge-hot"><Flame size={10} /> HOT</span></Link>
            <Link to="#" className="menu-item"><Wrench size={20} /> Tool Vĩnh Viễn <span className="badge-new badge-hot"><Flame size={10} /> HOT</span></Link>
            <Link to="#" className="menu-item"><Settings size={20} /> Gia Hạn Tool <span className="badge-new">Gia hạn</span></Link>
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

        {/* Content Area */}
        <div className="content-area">
          <div className="top-nav-bar">
            <h2>Hướng dẫn học</h2>
          </div>
          {/* Main Content */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learning" element={<LearningGuide />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
