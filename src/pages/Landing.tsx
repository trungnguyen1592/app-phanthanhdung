import React, { useState, useEffect, useCallback } from 'react';
import { Play, ArrowRight, Users, DollarSign, TrendingUp, Star, PlayCircle, Trophy, Youtube, Facebook, Instagram, Globe, EyeOff, Search, Scissors, UserX, Ban, MapPin, CheckCircle, Briefcase, Bot, ChevronLeft, ChevronRight, Quote, Zap, Crown, Plus, Minus, Menu, X, Rocket } from 'lucide-react';
import '../styles/Landing.css';

const Landing: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lp-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.lp-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsNavOpen(false);
    }
  };

  const problems = [
    {
      icon: <EyeOff size={24} color="rgb(0, 190, 214)" />,
      title: 'Không có lượt xem',
      desc: 'Video đăng lên không ai xem, không tiếp cận được khán giả mục tiêu.',
    },
    {
      icon: <Search size={24} color="rgb(0, 190, 214)" />,
      title: 'Không biết SEO',
      desc: 'Không hiểu cách tối ưu tiêu đề, mô tả, tag để video lên top tìm kiếm.',
    },
    {
      icon: <Scissors size={24} color="rgb(0, 190, 214)" />,
      title: 'Không biết chỉnh sửa',
      desc: 'Không biết edit video chuyên nghiệp, giữ chân người xem đến cuối.',
    },
    {
      icon: <UserX size={24} color="rgb(0, 190, 214)" />,
      title: 'Không có người đăng ký',
      desc: 'Người xem không subscribe, kênh không phát triển được.',
    },
    {
      icon: <Ban size={24} color="rgb(0, 190, 214)" />,
      title: 'Không thể kiếm tiền',
      desc: 'Đủ điều kiện nhưng không biết cách bật kiếm tiền và tối ưu RPM.',
    },
    {
      icon: <MapPin size={24} color="rgb(0, 190, 214)" />,
      title: 'Không có lộ trình',
      desc: 'Mông lung không biết bắt đầu từ đâu, học gì trước, làm gì sau.',
    },
  ];

  const roadmapSteps = [
    {
      icon: <Rocket size={28} />,
      title: 'Solo Youtube Ultra',
      subtitle: 'CHẶNG 1 • BẮT ĐẦU',
      desc: 'Dũng dắt bạn từ con số 0 — biết làm Facebook, lập kênh, quay video tay và quay video tự động bằng 3 tool.',
      features: ['Làm chủ Facebook cá nhân', 'Tự tay lập kênh Youtube đúng cách', 'Quy trình quay video thủ công bài bản', 'Quy trình quay video tự động với 3 tool'],
      price: '799K',
      borderColor: '#4a9eff',
      isCurrent: true,
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Youtube Super Remake',
      subtitle: 'CHẶNG 2 • BẬT KIẾM TIỀN',
      desc: 'Dũng nâng tay nghề bạn lên, tiến tới việc kênh được Youtube trả tiền — làm an toàn, bền vững.',
      features: ['Chiến lược 10 video đầu dễ nổ view', 'Làm an toàn, tránh dính bản quyền', '43 ngách dễ được Youtube trả tiền hơn Ultra', 'Tăng tỉ lệ kênh qua kiểm duyệt'],
      price: '1.298K',
      borderColor: '#9d7cd8',
    },
    {
      icon: <Zap size={28} />,
      title: 'Youtube Short Triệu View',
      subtitle: 'CHẶNG 3 • TĂNG SUB THẦN TỐC',
      desc: 'Dũng giúp bạn bùng nổ lượt theo dõi — vì làm video dài kéo sub rất chậm.',
      features: ['Kéo sub nhanh gấp nhiều lần video dài', 'Công thức Short triệu view nhân bản được', 'Kết hợp với video dài tối ưu doanh thu', 'Đạt 1.000 sub sớm để kênh được trả tiền'],
      price: '1.298K',
      borderColor: '#ff9e64',
    },
    {
      icon: <Crown size={28} />,
      title: 'Youtube CoachMax',
      subtitle: 'CHẶNG 4 • KÈM RIÊNG 1-1',
      desc: 'Dũng và đội ngũ kèm tay bạn trong nhóm nhỏ 3 kèm 1 — bạn về đích nhanh hơn rất nhiều.',
      features: ['Nhóm nhỏ 3 người kèm 1 người', 'Dũng và đội ngũ ưu tiên hỗ trợ bạn', 'Lộ trình riêng theo ngách của bạn', 'Rút ngắn thời gian thành công đáng kể'],
      price: '17 Triệu',
      borderColor: '#e0af68',
    },
  ];

  const achievements = [
    { icon: <CheckCircle size={24} color="#fff" />, title: 'Xây kênh chuyên nghiệp', desc: 'Tạo và tối ưu kênh YouTube chuẩn ngay từ đầu.' },
    { icon: <Users size={24} color="#fff" />, title: 'Đạt 1000 người đăng ký', desc: 'Chiến lược tăng sub tự nhiên, bền vững.' },
    { icon: <TrendingUp size={24} color="#fff" />, title: 'Tăng lượt xem đột phá', desc: 'SEO và thumbnail giúp video lên top tìm kiếm.' },
    { icon: <DollarSign size={24} color="#fff" />, title: 'Kiếm tiền từ kênh', desc: 'Bật kiếm tiền, tối ưu RPM, đa dạng thu nhập.' },
    { icon: <Briefcase size={24} color="#fff" />, title: 'Xây thương hiệu cá nhân', desc: 'Định vị bản thân thành chuyên gia trong ngách.' },
    { icon: <Bot size={24} color="#fff" />, title: 'Dùng AI tạo nội dung', desc: 'Tận dụng ChatGPT và AI tools để sản xuất video nhanh hơn.' },
  ];

  const testimonials = [
    {
      name: 'Minh Nguyễn',
      avatar: 'M',
      avatarColor: '#FF4444',
      rating: 5,
      subGrowth: '0 → 50K subs sau 4 tháng',
      comment: 'Khóa học thay đổi hoàn toàn cách mình làm YouTube. Từ một người không biết gì, giờ mình đã có kênh 50K subscribers và kiếm được thu nhập ổn định hàng tháng.',
    },
    {
      name: 'Linh Phạm',
      avatar: 'L',
      avatarColor: '#22C55E',
      rating: 5,
      subGrowth: '0 → 120K subs sau 6 tháng',
      comment: 'Trước đây mình đăng video mà không ai xem. Sau khóa học, mình hiểu SEO và thuật toán YouTube, video đầu tiên đã đạt 100K views!',
    },
    {
      name: 'Tuấn Trần',
      avatar: 'T',
      avatarColor: '#3B82F6',
      rating: 5,
      subGrowth: 'Từ 2K → 200K subs',
      comment: 'Lộ trình học rất rõ ràng, dễ hiểu. Dũng support 1:1 nhiệt tình. Mình đã bật kiếm tiền sau 2 tháng và hiện tại thu nhập ổn định $2K/tháng.',
    },
    {
      name: 'Hương Lê',
      avatar: 'H',
      avatarColor: '#F97316',
      rating: 5,
      subGrowth: '0 → 30K subs sau 3 tháng',
      comment: 'Điều mình thích nhất là phần hướng dẫn dùng AI để tạo nội dung. Tiết kiệm rất nhiều thời gian mà chất lượng video vẫn cao.',
    },
    {
      name: 'Đức Hoàng',
      avatar: 'Đ',
      avatarColor: '#8B5CF6',
      rating: 5,
      subGrowth: 'Từ 500 → 80K subs',
      comment: 'Kênh mình bị mất view suốt 1 năm. Sau khi áp dụng chiến lược từ khóa học, kênh bắt đầu phục hồi và tăng trưởng mạnh mẽ.',
    },
  ];

  const pricingFeatures = [
    'Truy cập trọn đời tất cả khóa học',
    'Cập nhật nội dung miễn phí mãi mãi',
    'Hỗ trợ 1:1 qua Zalo với giảng viên',
    'Cộng đồng học viên riêng tư',
    'Tài liệu + Template độc quyền',
    'Video bài giảng Full HD không giới hạn',
  ];

  const faqs = [
    { q: 'Khóa học dành cho ai?', a: 'Dành cho tất cả mọi người — từ người mới bắt đầu chưa biết gì đến người đã có kênh muốn tối ưu và kiếm tiền.' },
    { q: 'Học trong bao lâu?', a: 'Khóa học được thiết kế trong 8 tuần, mỗi tuần 3-4 buổi. Bạn có thể học nhanh hoặc chậm tùy theo lịch của mình.' },
    { q: 'Có cần kênh YouTube sẵn không?', a: 'Không cần. Chúng tôi sẽ hướng dẫn bạn tạo kênh mới chuẩn SEO ngay từ bài đầu tiên.' },
    { q: 'Hỗ trợ ra sao sau khóa học?', a: 'Bạn được hỗ trợ 1:1 qua Zalo trọn đời, tham gia cộng đồng riêng và được cập nhật nội dung mới miễn phí.' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const next = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="landing-page">
      {/* ============================================
           Sticky Navigation
           ============================================ */}
      <nav className={`lp-nav ${isNavScrolled ? 'is-scrolled' : ''}`}>
        <div className="lp-nav-inner">
          <a className="lp-nav-logo" onClick={() => scrollTo('hero')}>
            PHANTHANHDUNG
          </a>
          <div className={`lp-nav-links ${isNavOpen ? 'is-open' : ''}`}>
            <button className="lp-nav-link" onClick={() => scrollTo('social-proof')}>Kết quả</button>
            <button className="lp-nav-link" onClick={() => scrollTo('courses')}>Lộ trình</button>
            <button className="lp-nav-link" onClick={() => scrollTo('testimonials')}>Đánh giá</button>
            <button className="lp-nav-link" onClick={() => scrollTo('pricing')}>Giá</button>
            <button className="lp-nav-link" onClick={() => scrollTo('faq')}>FAQ</button>
          </div>
          <button className="lp-nav-cta" onClick={() => scrollTo('pricing')}>
            Đăng ký ngay
          </button>
          <button
            className="lp-nav-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ============================================
           Hero Section
           ============================================ */}
      <section className="lp-hero" id="hero">
        {/* Ambient lighting effects */}
        <div className="lp-hero-glow lp-hero-glow--left" />
        <div className="lp-hero-glow lp-hero-glow--right" />
        <div className="lp-hero-grid-bg" />

        <div className="lp-container">
          <div className="lp-hero-grid">

            {/* --- Left Column --- */}
            <div className="lp-hero-content">
              {/* Badge */}
              <div className="lp-badge lp-hero-badge">
                <Star size={14} fill="rgb(0, 190, 214)" />
                <span>Khóa học YouTube bán chạy nhất 2026</span>
              </div>

              {/* Headline */}
              <h1 className="lp-hero-headline">
                Học YouTube từ <span className="lp-gradient-text">Con Số 0</span> đến
                <br />
                <span className="lp-gradient-text">Kiếm Tiền Thật</span>
              </h1>

              {/* Subtitle */}
              <p className="lp-hero-subtitle">
                Làm chủ YouTube với lộ trình từng bước hoàn chỉnh. Từ người mới bắt đầu
                đến nhà sáng tạo chuyên nghiệp — không cần kinh nghiệm, không cần kênh sẵn.
              </p>

              {/* CTAs */}
              <div className="lp-hero-actions">
                <a href="#pricing" className="lp-btn-primary lp-btn-lg">
                  Đăng ký ngay <ArrowRight size={20} />
                </a>
                <a href="#preview" className="lp-btn-secondary lp-btn-lg lp-hero-play-btn">
                  <Play size={18} fill="#fff" /> Xem giới thiệu
                </a>
              </div>

              {/* Social proof row */}
              <div className="lp-hero-social-proof">
                <div className="lp-avatar-stack">
                  <div className="lp-avatar" style={{ background: '#FF4444' }}>T</div>
                  <div className="lp-avatar" style={{ background: '#22C55E' }}>M</div>
                  <div className="lp-avatar" style={{ background: '#3B82F6' }}>H</div>
                  <div className="lp-avatar" style={{ background: '#F97316' }}>L</div>
                </div>
                <p className="lp-body-sm">
                  <strong className="lp-accent-text">500+ học viên</strong> đã tham gia &bull;{' '}
                  <strong className="lp-accent-text">4.9/5</strong> đánh giá
                </p>
              </div>
            </div>

            {/* --- Right Column: Laptop Mockup --- */}
            <div className="lp-hero-mockup">
              <div className="lp-mockup-frame">
                {/* Screen */}
                <div className="lp-mockup-screen">
                  {/* Dashboard-like UI */}
                  <div className="lp-mockup-sidebar">
                    <div className="lp-mockup-logo" />
                    <div className="lp-mockup-nav-item" />
                    <div className="lp-mockup-nav-item short" />
                    <div className="lp-mockup-nav-item short" />
                    <div className="lp-mockup-nav-item active" />
                    <div className="lp-mockup-nav-item short" />
                  </div>
                  <div className="lp-mockup-main">
                    <div className="lp-mockup-header-row">
                      <div className="lp-mockup-stat">
                        <div className="lp-mockup-stat-value">$9,000</div>
                        <div className="lp-mockup-stat-label">Thu nhập</div>
                      </div>
                      <div className="lp-mockup-stat">
                        <div className="lp-mockup-stat-value">120K</div>
                        <div className="lp-mockup-stat-label">Subs</div>
                      </div>
                      <div className="lp-mockup-stat">
                        <div className="lp-mockup-stat-value">5M</div>
                        <div className="lp-mockup-stat-label">Views</div>
                      </div>
                    </div>
                    <div className="lp-mockup-chart">
                      <div className="lp-mockup-bar" style={{ height: '40%' }} />
                      <div className="lp-mockup-bar" style={{ height: '65%' }} />
                      <div className="lp-mockup-bar accent" style={{ height: '90%' }} />
                      <div className="lp-mockup-bar" style={{ height: '55%' }} />
                      <div className="lp-mockup-bar" style={{ height: '80%' }} />
                      <div className="lp-mockup-bar accent" style={{ height: '95%' }} />
                      <div className="lp-mockup-bar" style={{ height: '70%' }} />
                    </div>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="lp-mockup-base" />
              </div>
            </div>

          </div>
        </div>

        {/* Floating stat cards */}
        <div className="lp-float-card lp-float-card--1">
          <div className="lp-float-icon-box">
            <DollarSign size={18} color="rgb(0, 190, 214)" />
          </div>
          <div>
            <div className="lp-float-value">$9,000</div>
            <div className="lp-float-label">Thu nhập đầu tiên</div>
          </div>
        </div>

        <div className="lp-float-card lp-float-card--2">
          <div className="lp-float-icon-box">
            <Users size={18} color="rgb(0, 190, 214)" />
          </div>
          <div>
            <div className="lp-float-value">500+</div>
            <div className="lp-float-label">Học viên thành công</div>
          </div>
        </div>

        <div className="lp-float-card lp-float-card--3">
          <div className="lp-float-icon-box">
            <TrendingUp size={18} color="rgb(0, 190, 214)" />
          </div>
          <div>
            <div className="lp-float-value">4.9</div>
            <div className="lp-float-label">Đánh giá trung bình</div>
          </div>
        </div>
      </section>

      {/* ============================================
           Social Proof Section
           ============================================ */}
      <section className="lp-section lp-social-proof" id="social-proof">
        <div className="lp-container lp-reveal">
          {/* Section label */}
          <div className="lp-text-center lp-mb-6">
            <p className="lp-caption">Được tin tưởng bởi</p>
          </div>

          {/* Stat cards row */}
          <div className="lp-stats-row">
            <div className="lp-stat-card">
              <div className="lp-stat-icon-box">
                <Users size={22} color="#EF4444" />
              </div>
              <div className="lp-stat-number">500<span className="lp-stat-plus">+</span></div>
              <div className="lp-stat-title">Học viên</div>
              <div className="lp-stat-desc">Đã và đang tham gia khóa học</div>
            </div>

            <div className="lp-stat-card">
              <div className="lp-stat-icon-box">
                <PlayCircle size={22} color="#EF4444" />
              </div>
              <div className="lp-stat-number">12</div>
              <div className="lp-stat-title">Khóa học</div>
              <div className="lp-stat-desc">Chuyên sâu từ cơ bản đến nâng cao</div>
            </div>

            <div className="lp-stat-card">
              <div className="lp-stat-icon-box">
                <Star size={22} color="#EF4444" />
              </div>
              <div className="lp-stat-number">4.9<span className="lp-stat-plus">/5</span></div>
              <div className="lp-stat-title">Đánh giá</div>
              <div className="lp-stat-desc">Từ cộng đồng học viên</div>
            </div>

            <div className="lp-stat-card">
              <div className="lp-stat-icon-box">
                <Trophy size={22} color="#EF4444" />
              </div>
              <div className="lp-stat-number">50<span className="lp-stat-plus">%</span></div>
              <div className="lp-stat-title">Tỷ lệ thành công</div>
              <div className="lp-stat-desc">Học viên bật kiếm tiền sau 3 tháng</div>
            </div>
          </div>

          {/* Divider */}
          <hr className="lp-divider lp-mb-6" />

          {/* Platform logos */}
          <div className="lp-text-center lp-mb-4">
            <p className="lp-body-sm">Học viên của chúng tôi kiếm tiền trên</p>
          </div>
          <div className="lp-platforms-row">
            <div className="lp-platform-logo">
              <Youtube size={28} color="rgb(0, 190, 214)" />
              <span>YouTube</span>
            </div>
            <div className="lp-platform-logo">
              <Facebook size={28} color="#A1A1AA" />
              <span>Facebook</span>
            </div>
            <div className="lp-platform-logo">
              <Instagram size={28} color="#A1A1AA" />
              <span>Instagram</span>
            </div>
            <div className="lp-platform-logo">
              <Globe size={28} color="#A1A1AA" />
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           Problems We Solve
           ============================================ */}
      <section className="lp-section lp-problems">
        <div className="lp-container lp-reveal">
          <div className="lp-text-center lp-mb-6">
            <p className="lp-caption">Vấn đề của bạn</p>
            <h2 className="lp-heading-lg lp-mt-2">
              Bạn đang gặp khó khăn gì?
            </h2>
            <p className="lp-body-lg lp-mx-auto lp-max-w-md lp-mt-2">
              Đây là những rào cản khiến bạn chưa thành công trên YouTube
            </p>
          </div>

          <div className="lp-problems-grid">
            {problems.map((problem, i) => (
              <div key={i} className="lp-problem-card">
                <div className="lp-problem-icon">{problem.icon}</div>
                <div className="lp-problem-content">
                  <h4 className="lp-problem-title">{problem.title}</h4>
                  <p className="lp-problem-desc">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
           Course Showcase
           ============================================ */}
      <section className="lp-section lp-roadmap" id="courses">
        <div className="lp-container lp-reveal">
          <div className="lp-text-center lp-mb-6">
            <p className="lp-caption">Lộ trình học</p>
            <h2 className="lp-heading-lg lp-mt-2">
              Bản Đồ Thành Công Trên <span className="lp-gradient-text">YouTube</span>
            </h2>
            <p className="lp-body-lg lp-mx-auto lp-max-w-md lp-mt-2">
              Dũng vẽ sẵn — bạn chỉ việc đi theo
            </p>
          </div>

          {/* Roadmap Cards */}
          <div className="lp-roadmap-cards">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="lp-roadmap-card" style={{ '--border-color': step.borderColor } as React.CSSProperties}>
                <div className="lp-roadmap-card-header">
                  <div className="lp-roadmap-card-icon" style={{ color: step.borderColor }}>
                    {step.icon}
                  </div>
                  <div className="lp-roadmap-card-badge" style={{ color: step.borderColor }}>{step.subtitle}</div>
                </div>
                <h3 className="lp-roadmap-card-title">{step.title}</h3>
                <p className="lp-roadmap-card-desc">{step.desc}</p>
                <ul className="lp-roadmap-card-features">
                  {step.features.map((f, fi) => (
                    <li key={fi}><CheckCircle size={16} color={step.borderColor} /> {f}</li>
                  ))}
                </ul>
                <div className="lp-roadmap-card-footer">
                  {step.isCurrent ? (
                    <button className="lp-roadmap-btn-current">Bạn đang ở đây</button>
                  ) : (
                    <button className="lp-roadmap-btn-view" style={{ backgroundColor: step.borderColor, borderColor: step.borderColor }}>Xem {step.title.replace('Youtube ', '')} — {step.price}</button>
                  )}
                </div>
                {/* Connector arrow */}
                {i < roadmapSteps.length - 1 && (
                  <div className="lp-roadmap-card-arrow" style={{ color: step.borderColor }}>
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
           Results / Achievements
           ============================================ */}
      <section className="lp-section lp-results" id="results">
        {/* Subtle background glow */}
        <div className="lp-results-glow" />

        <div className="lp-container lp-reveal">
          <div className="lp-text-center lp-mb-6">
            <p className="lp-caption">Kết quả đạt được</p>
            <h2 className="lp-heading-lg lp-mt-2">
              Bạn sẽ đạt được gì?
            </h2>
            <p className="lp-body-lg lp-mx-auto lp-max-w-md lp-mt-2">
              Những thành quả sau khi hoàn thành khóa học
            </p>
          </div>

          <div className="lp-results-grid">
            {achievements.map((item, i) => (
              <div key={i} className="lp-result-card">
                <div className="lp-result-icon-box">
                  {item.icon}
                </div>
                <h4 className="lp-result-title">{item.title}</h4>
                <p className="lp-result-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
           Testimonials
           ============================================ */}
      <section className="lp-section lp-testimonials" id="testimonials">
        <div className="lp-testimonials-glow" />

        <div className="lp-container lp-reveal">
          <div className="lp-text-center lp-mb-6">
            <p className="lp-caption">Học viên nói gì?</p>
            <h2 className="lp-heading-lg lp-mt-2">
              Câu chuyện thành công
            </h2>
            <p className="lp-body-lg lp-mx-auto lp-max-w-md lp-mt-2">
              Hàng trăm học viên đã thay đổi cuộc sống nhờ YouTube
            </p>
          </div>

          {/* Carousel */}
          <div className="lp-carousel">
            <button className="lp-carousel-btn lp-carousel-btn--left" onClick={prev}>
              <ChevronLeft size={24} />
            </button>

            <div className="lp-carousel-track">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`lp-testimonial-card ${i === activeIndex ? 'is-active' : ''}`}
                >
                  {/* Quote icon */}
                  <div className="lp-testimonial-quote">
                    <Quote size={32} />
                  </div>

                  {/* Rating */}
                  <div className="lp-testimonial-stars">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={16} fill="rgb(0, 190, 214)" color="rgb(0, 190, 214)" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="lp-testimonial-comment">{t.comment}</p>

                  {/* Growth badge */}
                  <div className="lp-testimonial-growth">
                    <TrendingUp size={16} color="rgb(0, 190, 214)" />
                    <span>{t.subGrowth}</span>
                  </div>

                  {/* Author */}
                  <div className="lp-testimonial-author">
                    <div
                      className="lp-testimonial-avatar"
                      style={{ background: t.avatarColor }}
                    >
                      {t.avatar}
                    </div>
                    <div className="lp-testimonial-name">{t.name}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="lp-carousel-btn lp-carousel-btn--right" onClick={next}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="lp-carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`lp-carousel-dot ${i === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
           Pricing Section
           ============================================ */}
      <section className="lp-section lp-pricing" id="pricing">
        {/* Glow */}
        <div className="lp-pricing-glow" />

        <div className="lp-container lp-reveal">
          <div className="lp-text-center lp-mb-6">
            <p className="lp-caption">Đầu tư cho bản thân</p>
            <h2 className="lp-heading-lg lp-mt-2">
              Một mức giá duy nhất
            </h2>
            <p className="lp-body-lg lp-mx-auto lp-max-w-md lp-mt-2">
              Sở hữu trọn bộ kiến thức YouTube từ cơ bản đến nâng cao
            </p>
          </div>

          {/* Single premium card */}
          <div className="lp-pricing-card-wrap">
            <div className="lp-pricing-card">
              {/* Limited badge */}
              <div className="lp-pricing-badge">
                <Zap size={14} /> 🔥 Ưu đãi có hạn — Chỉ còn 50 suất!
              </div>

              {/* Course name */}
              <h3 className="lp-pricing-name">YouTube Ultra</h3>
              <p className="lp-pricing-desc">Khóa học YouTube toàn diện từ A-Z</p>

              {/* Price */}
              <div className="lp-pricing-price-row">
                <span className="lp-pricing-original">4.999.000 VNĐ</span>
                <span className="lp-pricing-discount">-84%</span>
              </div>
              <div className="lp-pricing-current">
                <span className="lp-pricing-currency">VNĐ</span>
                <span className="lp-pricing-amount">999.000</span>
              </div>

              {/* Divider */}
              <hr className="lp-divider lp-mt-2" />

              {/* Features */}
              <ul className="lp-pricing-features">
                {pricingFeatures.map((feature, i) => (
                  <li key={i} className="lp-pricing-feature-item">
                    <div className="lp-pricing-check">
                      <CheckCircle size={18} color="rgb(0, 190, 214)" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#" className="lp-btn-primary lp-btn-lg lp-pricing-cta">
                Đăng ký ngay <ArrowRight size={20} />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           FAQ Accordion
           ============================================ */}
      <section className="lp-section lp-faq" id="faq">
        <div className="lp-container lp-reveal">
          <div className="lp-text-center lp-mb-6">
            <h2 className="lp-heading-lg lp-mt-2">
              Câu hỏi <span className="lp-gradient-text">thường gặp</span>
            </h2>
          </div>

          <div className="lp-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`lp-faq-item ${openFaq === i ? 'is-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="lp-faq-header">
                  <h4 className="lp-faq-question">{faq.q}</h4>
                  <div className="lp-faq-icon">
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                <div className="lp-faq-answer">
                  <p className="lp-body">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
           Final CTA
           ============================================ */}
      <section className="lp-section lp-cta-final">
        <div className="lp-cta-final-glow" />

        <div className="lp-container lp-reveal lp-text-center">
          <h2 className="lp-heading-lg lp-mb-2">
            Bắt đầu hành trình YouTube <span className="lp-gradient-text">hôm nay</span>
          </h2>
          <p className="lp-body-lg lp-mx-auto lp-max-w-md lp-mb-4">
            Tham gia cùng hàng ngàn học viên đã thành công. Đừng để ước mơ của bạn chỉ là ước mơ.
          </p>
          <a href="#pricing" className="lp-btn-primary lp-btn-lg lp-cta-final-btn">
            Đăng ký ngay — Chỉ 999K <ArrowRight size={20} />
          </a>
          <p className="lp-body-sm lp-mt-2">Thanh toán an toàn • Truy cập ngay lập tức</p>
        </div>
      </section>

      {/* ============================================
           Footer
           ============================================ */}
      <footer className="lp-footer">
        <div className="lp-container">
          <hr className="lp-divider lp-mb-4" />
          <div className="lp-footer-grid">
            <div className="lp-footer-brand">
              <h4 className="lp-footer-logo">PHANTHANHDUNG</h4>
              <p className="lp-body-sm">
                Nền tảng đào tạo YouTube hàng đầu Việt Nam. Giúp bạn từ con số 0 đến nhà sáng tạo chuyên nghiệp.
              </p>
            </div>
            <div className="lp-footer-links">
              <h5 className="lp-footer-heading">Khóa học</h5>
              <a href="#">YouTube Cơ Bản</a>
              <a href="#">SEO YouTube</a>
              <a href="#">Short Video</a>
              <a href="#">YouTube Master</a>
            </div>
            <div className="lp-footer-links">
              <h5 className="lp-footer-heading">Hỗ trợ</h5>
              <a href="#">Liên hệ</a>
              <a href="#">FAQ</a>
              <a href="#">Chính sách</a>
              <a href="#">Điều khoản</a>
            </div>
            <div className="lp-footer-links">
              <h5 className="lp-footer-heading">Kết nối</h5>
              <div className="lp-footer-socials">
                <Youtube size={20} />
                <Facebook size={20} />
                <Instagram size={20} />
              </div>
            </div>
          </div>
          <hr className="lp-divider lp-mt-4" />
          <div className="lp-footer-bottom">
            <p className="lp-body-sm">&copy; 2026 Phan Thanh Dũng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
