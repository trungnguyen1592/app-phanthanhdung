import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  const learningPoints = [
    'Hướng dẫn cách training trợ lý ChatGPT',
    'Cách set up lại kịch bản GPT cho từng ngách muốn đánh',
    'Tặng thêm 30 ngày dùng cho 3 tool (tổng là 67 ngày)',
    'Cách xây hệ thống kênh chuẩn chỉnh ngay từ đầu không bị quết chết mail, chết kênh',
    'Cách tìm và thẩm định ngách để chọn mà đánh',
    '15 lý do thành công và 5 lý do thất bại khi làm Youtube (siêu quan trọng)',
    'Chiến lược nhanh tiến tới bật kiếm tiền',
    'Cách kết nối GA khi kênh bật kiếm tiền',
    'Cách tối ưu tiền kiếm được từ 1000 lượt xem (tăng RPM)',
    'Cứu kênh mất view....'
  ];

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
        <ul className="message-list">
            {learningPoints.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
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
