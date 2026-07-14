import React from 'react';
import { Rocket, TrendingUp, Zap, Crown, Check, Lock } from 'lucide-react';
import '../styles/LearningGuide.css';

const courses = [
  { 
    id: 1, 
    title: 'Solo Youtube Ultra', 
    subtitle: 'CHẶNG 1 • BẮT ĐẦU', 
    icon: <Rocket size={24} />,
    desc: 'Dũng dắt bạn từ con số 0 — biết làm Facebook, lập kênh, quay video tay và quay video tự động bằng 3 tool.',
    features: ['Làm chủ Facebook cá nhân', 'Tự tay lập kênh Youtube đúng cách', 'Quy trình quay video thủ công bài bản', 'Quy trình quay video tự động với 3 tool'],
    borderColor: '#4a9eff',
    isCurrent: true 
  },
  { 
    id: 2, 
    title: 'Youtube Super Remake', 
    subtitle: 'CHẶNG 2 • BẬT KIẾM TIỀN', 
    icon: <TrendingUp size={24} />,
    desc: 'Dũng nâng tay nghề bạn lên, tiến tới việc kênh được Youtube trả tiền — làm an toàn, bền vững.',
    features: ['Chiến lược 10 video đầu dễ nổ view', 'Làm an toàn, tránh dính bản quyền', '43 ngách dễ được Youtube trả tiền hơn Ultra', 'Tăng tỉ lệ kênh qua kiểm duyệt'],
    borderColor: '#9d7cd8',
    buttonText: 'Xem Super Remake — 1.298K'
  },
  { 
    id: 3, 
    title: 'Youtube Short Triệu View', 
    subtitle: 'CHẶNG 3 • TĂNG SUB THẦN TỐC', 
    icon: <Zap size={24} />,
    desc: 'Dũng giúp bạn bùng nổ lượt theo dõi — vì làm video dài kéo sub rất chậm.',
    features: ['Kéo sub nhanh gấp nhiều lần video dài', 'Công thức Short triệu view nhân bản được', 'Kết hợp với video dài tối ưu doanh thu', 'Đạt 1.000 sub sớm để kênh được trả tiền'],
    borderColor: '#ff9e64',
    buttonText: 'Xem Short Triệu View — 1.298K'
  },
  { 
    id: 4, 
    title: 'Youtube CoachMax', 
    subtitle: 'CHẶNG 4 • KÈM RIÊNG 1-1', 
    icon: <Crown size={24} />,
    desc: 'Dũng và đội ngũ kèm tay bạn trong nhóm nhỏ 3 kèm 1 — bạn về đích nhanh hơn rất nhiều.',
    features: ['Nhóm nhỏ 3 người kèm 1 người', 'Dũng và đội ngũ ưu tiên hỗ trợ bạn', 'Lộ trình riêng theo ngách của bạn', 'Rút ngắn thời gian thành công đáng kể'],
    borderColor: '#e0af68',
    buttonText: 'Xem CoachMax — 15 Triệu'
  },
];

const lockedCourses = [
    { id: 5, title: 'Youtube CoachMax' },
    { id: 6, title: 'Master Youtube Ads' },
    { id: 7, title: 'Livestream Pro' },
    { id: 8, title: 'Edit Video Cao Cấp' },
    { id: 9, title: 'Tư Duy Affiliate' },
    { id: 10, title: 'Xây Dựng Thương Hiệu' },
    { id: 11, title: 'Kỹ Năng Đàm Phán' },
    { id: 12, title: 'Quản Lý Tài Chính' },
    { id: 13, title: 'Xây Dựng Team' },
    { id: 14, title: 'Tối Ưu Hóa Kênh' },
    { id: 15, title: 'Content Viral' },
    { id: 16, title: 'Copywriting' },
    { id: 17, title: 'Thiết Kế Thumbnail' },
]

const LearningGuide: React.FC = () => {
  return (
    <div className="learning-guide-container">
      <header className="page-header">
        <h1 className="gradient-text">Bản Đồ Thành Công Trên Youtube</h1>
        <p>Dũng vẽ sẵn — bạn chỉ việc đi theo</p>
      </header>

      <div className="course-grid">
        {courses.map(course => (
          <div 
            key={course.id} 
            className="course-card" 
            style={{ '--border-color': course.borderColor, '--hover-color': course.borderColor, '--btn-color': course.borderColor } as React.CSSProperties}
          >
            <div className="course-icon" style={{color: course.borderColor}}>
                {course.icon}
                <span className="course-number">{course.id}</span>
            </div>
            <div className="course-badge">{course.subtitle}</div>
            <h3>{course.title}</h3>
            <p className="course-desc">{course.desc}</p>
            <ul className="feature-list">
                {course.features.map((f, i) => <li key={i}><Check size={16} /> {f}</li>)}
            </ul>
            {course.isCurrent ? (
              <button className="btn-current">Bạn đang ở đây</button>
            ) : (
              <button className="btn-view">{course.buttonText}</button>
            )}
          </div>
        ))}
      </div>

      <div className="coach-vip-section">
        <div className="coach-vip-card">
            <h2>Gói Coach VIP "2 Kèm 1"</h2>
            <p>Dũng & Huy đồng hành sống chết cùng bạn cho đến khi kiếm được GẤP ĐÔI học phí!</p>
            <div className="price-tag">17.000.000 đ</div>
            <div className="vip-actions">
                <button className="btn-outline">Xem chi tiết</button>
                <button className="btn-view">Mở khoá ngay</button>
            </div>
        </div>
      </div>

      <div className="locked-courses-section">
        <h2>Khóa học chưa mở khóa</h2>
        <div className="locked-grid">
            {lockedCourses.map(course => (
                <div key={course.id} className="locked-card">
                    <Lock size={32} color="#555" />
                    <h3>{course.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LearningGuide;
