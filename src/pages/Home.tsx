import React from 'react';
import { ChevronRight, MessageCircle, Lock } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section className="hero-dashboard">
      <header className="main-header">
        <h1>Chào mừng trở lại, Nhà sáng tạo!</h1>
        <button className="btn-upgrade">Nâng cấp tài khoản <ChevronRight size={16} /></button>
      </header>

      {/* Đôi lời tâm sự */}
      <div className="message-box">
        <div className="message-header">
          <MessageCircle size={24} color="#FFD700" />
          <h3>💬 Đôi lời tâm sự với học viên mới!</h3>
        </div>
        <p>Chào bạn, mình là Dũng. Hãy dành 5 phút xem video này để nắm vững quy trình học tập hiệu quả nhất trên nền tảng của mình nhé. Chúc bạn thành công!</p>
      </div>

      <div className="hero-card">
        <h2>XÂY DỰNG ĐẾ CHẾ YOUTUBE</h2>
        <p>Tiếp tục bài học: <strong>Tối ưu hóa SEO video (Phần 2)</strong></p>
        <button className="btn-continue">Tiếp tục học ngay</button>
      </div>
      <div className="hero-stats-card">
        <h3>Thành tựu của bạn</h3>
        <div className="stat-grid">
          <div className="stat-box"><span>15</span> Bài học đã hoàn thành</div>
          <div className="stat-box"><span>3</span> Khóa học đang học</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
