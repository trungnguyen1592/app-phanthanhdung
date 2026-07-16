import React from 'react';
import { Rocket, TrendingUp, Zap, Crown, Check, Lock, MessageCircle } from 'lucide-react';
import '../styles/LearningGuide.css';

interface LockedCourse {
    id: number;
    title: string;
    image?: string;
    desc?: string;
    price?: string;
    vipDetails?: {
        title: string;
        desc: string;
        price: string;
    };
}

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
    buttonText: 'Xem CoachMax — 17 Triệu'
  },
];

const lockedCourses: LockedCourse[] = [
    {
        id: 5,
        title: 'Youtube CoachMax',
        image: '/images/course-coachmax-DA83_mcX.png',
        vipDetails: {
            title: 'Gói Coach VIP "2 Kèm 1"',
            desc: 'Dũng & Huy đồng hành sống chết cùng bạn cho đến khi kiếm được GẤP ĐÔI học phí!',
            price: '17.000.000 VNĐ'
        }
    },
    {
        id: 6,
        title: 'Siêu Bán Hàng Bằng Tâm Lý',
        image: '/images/tamly-ultra.jpg',
        vipDetails: {
            title: 'Siêu Bán Hàng Bằng Tâm Lý',
            desc: 'Đọc vị tử huyệt cảm xúc khách hàng, bẻ gãy mọi sự kháng cự để chốt đơn nhẹ nhàng.',
            price: '888.000 VNĐ'
        }
    },
    {
        id: 7,
        title: 'Quảng Cáo Facebook Đơn Giản',
        image: '/images/qc-fb-don-gian.jpg',
        vipDetails: {
            title: 'Quảng Cáo Facebook Đơn Giản',
            desc: 'Trạm bơm traffic căn bản. Lên camp thực chiến, tránh khoá tài khoản, kéo khách về inbox.',
            price: '999.000 VNĐ'
        }
    },
    {
        id: 8,
        title: 'Chốt Mess Ra Đơn Chuyển Đổi Cao Từ FB Ads',
        image: '/images/chot-mess-fb-ads.jpg',
        vipDetails: {
            title: 'Chốt Mess Ra Đơn Chuyển Đổi Cao Từ FB Ads',
            desc: 'Nâng cấp kịch bản chat đỉnh cao, khoá tâm lý và chốt hạ ngay trên tin nhắn.',
            price: '8.990.000 VNĐ'
        }
    },
    {
        id: 9,
        title: 'Truyền Nghề Quảng Cáo Facebook Mess (Tin Nhắn) Chuyên Sâu',
        image: '/images/qc-facebook-chuyen-sau.jpg',
        vipDetails: {
            title: 'Truyền Nghề Quảng Cáo Facebook Mess (Tin Nhắn) Chuyên Sâu',
            desc: 'Master Ads thực chiến. Vít ngân sách lớn, chi phí thấp, lợi nhuận cao.',
            price: '29.990.000 VNĐ'
        }
    },
    {
        id: 10,
        title: 'Hệ Thống Trang Bán Hàng Tự Động Từ FB Ads',
        image: '/images/he-thong-trang-ban-hang-tu-dong.jpg',
        vipDetails: {
            title: 'Hệ Thống Trang Bán Hàng Tự Động Từ FB Ads',
            desc: 'Bê nguyên cỗ máy Landing Page thôi miên: khách click QC ➔ tự đọc ➔ tự chuyển khoản.',
            price: '49.990.000 VNĐ'
        }
    },
    {
        id: 11,
        title: 'Siêu Diễn Đạt',
        image: '/images/course-sieu-dien-dat-DmCqQPce.jpg',
        vipDetails: {
            title: 'Siêu Diễn Đạt',
            desc: 'Làm chủ kỹ năng trình bày trước đám đông và người lạ, nâng tầm bản lĩnh lãnh đạo.',
            price: '9.000.000 VNĐ'
        }
    },
    {
        id: 12,
        title: 'Chuyển Giao Hệ Thống Bán Hàng Đám Đông',
        image: '/images/he-thong-ban-hang-dam-dong.jpg',
        vipDetails: {
            title: 'Chuyển Giao Hệ Thống Bán Hàng Đám Đông',
            desc: 'Bê nguyên kịch bản tổ chức buổi bán hàng đám đông: kéo người, mồi cảm xúc, chốt đơn tại chỗ.',
            price: '49.990.000 VNĐ'
        }
    },
    {
        id: 13,
        title: 'Hệ Thống QC FB & Bán Dịch Vụ Giá Cao',
        image: '/images/he-thong-ban-hang-gia-cao.jpg',
        vipDetails: {
            title: 'Hệ Thống QC FB & Bán Dịch Vụ Giá Cao',
            desc: 'Đóng gói dịch vụ, lọc tệp VIP từ FB Ads để chốt hợp đồng 50–100 triệu.',
            price: '49.990.000 VNĐ'
        }
    },
    {
        id: 14,
        title: 'COMBO 2-IN-1: QC FB Chuyên Sâu + Trang Bán Hàng Tự Động',
        image: '/images/combo-2-in-1.jpg',
        vipDetails: {
            title: 'COMBO 2-IN-1: QC FB Chuyên Sâu + Trang Bán Hàng Tự Động',
            desc: 'Giải pháp để khách tự đổ về web và tự mua hàng — không cần ngồi canh tin nhắn.',
            price: '69.990.000 VNĐ'
        }
    },
    {
        id: 15,
        title: 'COMBO 3-IN-1: Chốt Mess + QC FB Chuyên Sâu + Trang Bán Hàng Tự Động',
        image: '/images/combo-3-in-1.jpg',
        vipDetails: {
            title: 'COMBO 3-IN-1: Chốt Mess + QC FB Chuyên Sâu + Trang Bán Hàng Tự Động',
            desc: 'Cỗ máy in tiền đa kênh: chốt được cả khách inbox lẫn khách tự thanh toán trên web.',
            price: '69.990.000 VNĐ'
        }
    },
    {
        id: 16,
        title: 'COMBO 4-IN-1 TỐI THƯỢNG',
        image: '/images/combo-4-in-1.jpg',
        vipDetails: {
            title: 'COMBO 4-IN-1 TỐI THƯỢNG',
            desc: 'Thừa hưởng 100% công nghệ chạy ads, chốt đơn và đóng gói dịch vụ giá cao.',
            price: '99.990.000 VNĐ'
        }
    },
    {
        id: 17,
        title: 'Truyền Nghề Bán Khoá Học Kiếm Tiền Tỷ',
        image: '/images/truyen-nghe-ban-khoa-hoc.jpg',
        vipDetails: {
            title: 'Truyền Nghề Bán Khoá Học Kiếm Tiền Tỷ',
            desc: 'Đóng gói chuyên môn thành khoá học, xây phễu giáo dục tự động, tạo dòng tiền tỷ đồng.',
            price: '99.990.000 VNĐ'
        }
    },
]

const LearningGuide: React.FC = () => {
  return (
    <div className="learning-guide-container">
      {/* Đôi lời tâm sự */}
      <div className="message-box">
        <div className="message-header">
          <MessageCircle size={24} color="#FFD700" />
          <h3>Đôi lời tâm sự với học viên mới!</h3>
        </div>
        <p className="message-text">Chào bạn <span className="text-foreground">Anh Tú</span>. Trong khóa học Phan Thanh Dũng Ultra này, bạn sẽ được hỗ trợ bởi Dũng — người trực tiếp hướng dẫn bạn:</p>
        <p className="message-text">Là 1 người mới, Dũng tin bạn đang rất háo hức xen lẫn hoài nghi liệu bản thân có làm được Youtube hay không?</p>
        <p className="message-text">Dũng hiểu điều này, bởi Dũng đã từng là 1 người mới tinh và tràn đầy sự tự ti khi bước qua lĩnh vực mới này (dù trước kia Dũng là 1 Tác giả 6 cuốn sách và là Chuyên gia đào tạo kỹ năng).</p>
        <p className="message-text">Lĩnh vực mới, tấm chiếu mới, không thoát khỏi sự sợ hãi và mù tịt ở những ngày ban đầu. Bản thân Dũng đã chi hơn <span className="text-foreground">120 triệu đồng</span> để học và loay hoay gần 2 năm mới bắt đầu làm Youtube. May mắn kênh đầu tiên nổ và kiếm được <span className="text-primary">9.000 đô</span>, và sau đó là tìm ra công thức chiến thắng để bật kiếm tiền tiếp hàng chục kênh sau đó.</p>
        <p className="message-text">Lớp học Ultra này <span className="text-foreground">(799k)</span> là sự đóng gói lại bài bản của <span className="text-foreground">120 triệu</span> đi học và ngộ ra được quy trình — nên hãy trân trọng những trải nghiệm, tâm huyết, sự hướng dẫn mà Dũng chia sẻ.</p>
        <p className="message-text">Trong hành trình này, bạn sẽ được <span className="text-dung">Dũng</span> phản hồi 1:1 qua Zalo để khi kẹt — thì có biết đường mà gỡ để tiếp tục tiến lên phía trước.</p>
        <p className="message-text">Tuy nhiên do số lượng học viên khá đông, Dũng không thể phản hồi nhanh chóng từng người — nên khi nhắn tin hãy <span className="text-foreground">hỏi ngắn gọn, rõ ràng và cụ thể</span> để Dũng hỗ trợ bạn hiệu quả nhất.</p>
        <p className="message-text"><span className="text-foreground">Còn dưới đây là sự hướng dẫn từng bước để bạn bắt đầu. 👇</span></p>
        <p className="message-text"><em>💡 Có kết bạn thì hãy nhắn 1 tin với nội dung là "<span className="text-primary">Solo</span>", đó là ký hiệu để chúng ta biết nhau.</em></p>
      </div>

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
                {course.features && course.features.map((f, i) => <li key={i}><Check size={16} /> {f}</li>)}
            </ul>
            {course.isCurrent ? (
              <button className="btn-current">Bạn đang ở đây</button>
            ) : (
              <button className="btn-view">{course.buttonText}</button>
            )}
          </div>
        ))}
      </div>

      <div className="locked-courses-section" style={{ display: 'none' }}>
        <h2><Lock size={24} color="#FFD700" /> Khóa học chưa mở khóa</h2>
        <div className="locked-grid">
            {lockedCourses.map(course => (
                <div key={course.id} className={`locked-card course-card-bg ${course.id === 5 ? 'special-locked-card' : ''}`}>
                    {course.image ? (
                        <div className="locked-card-img-wrapper">
                            <img src={course.image} alt="" className="locked-card-bg-img" />
                            <div className="locked-header locked-header-overlay">
                                <Lock size={32} color="#fff" />
                                {course.vipDetails ? (
                                    course.vipDetails.price && <p className="locked-price">{course.vipDetails.price}</p>
                                ) : (
                                    <>
                                        <h3>{course.title}</h3>
                                        {course.price && <p className="locked-price">{course.price}</p>}
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="locked-header">
                            <Lock size={32} color="#fff" />
                            <h3>{course.title}</h3>
                            {course.vipDetails?.price && <p className="locked-price">{course.vipDetails.price}</p>}
                        </div>
                    )}
                    {course.desc && <p className="locked-desc">{course.desc}</p>}
                    {course.price && <p className="locked-price">{course.price}</p>}
                    {course.vipDetails && (
                        <div className="vip-box">
                            <h3 className="vip-box-title">{course.title}</h3>
                            <p className="vip-box-desc">{course.vipDetails.desc}</p>
                        </div>
                    )}
                    <div className="locked-card-actions">
                        <button className="btn-detail">Xem chi tiết</button>
                        <button className="btn-unlock">Mở khoá ngay</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LearningGuide;
