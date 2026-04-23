/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Menu, 
  Plus, 
  MessageSquare, 
  Clock, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  X,
  Target,
  Users,
  Video,
  Settings
} from 'lucide-react';

// --- Components ---

const SectionHeader = ({ label, title, desc, centered = true }: { label: string, title: string, desc?: string, centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`${centered ? 'text-center' : ''} mb-12`}
  >
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime mb-3 block">{label}</span>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight">{title}</h2>
    {desc && <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">{desc}</p>}
  </motion.div>
);

const ModuleItem = ({ title, detail }: { title: string, detail: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`border border-border-subtle rounded-xl p-5 mb-3 cursor-pointer transition-all bg-bg-card/50 hover:border-lime/30 ${isOpen ? 'border-lime/20' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-lime flex-shrink-0"
        >
          <Plus size={20} />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm mt-4 leading-relaxed border-t border-border-subtle pt-4">{detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-subtle">
      <button 
        className="w-full text-left py-6 flex justify-between items-center gap-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold group-hover:text-lime transition-colors">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-lime flex-shrink-0"
        >
          <Plus size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm pb-6 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Sections ---

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const curriculumData = [
    {
      name: "Giao Tiếp Với AI",
      levels: [
        {
          label: "Level 1: Nền tảng (Module 1–2)",
          modules: [
            { title: "Module 1: Giải mã cơ chế LLM & Hệ sinh thái Generative AI", detail: "Hiểu cách AI 'nghĩ' — đoán từ tiếp theo thay vì tìm kiếm. Quản lý Context Window để tránh AI bị 'quên'. Nhận biết và xử lý Hallucination." },
            { title: "Module 2: Prompting 1.0 — Giao tiếp có cấu trúc", detail: "Công thức Context – Task – Instruction – Format. Thiết lập System Prompt và 'tính cách' cho AI để kết quả phản hồi cá nhân hóa cao." }
          ]
        },
        {
          label: "Level 2: Chuyên nghiệp (Module 3–6)",
          modules: [
            { title: "Module 3: Prompt Engineering 2.0 — Kỹ thuật nâng cao", detail: "Few-shot Prompting, kiểm soát Temperature. Cung cấp mẫu chuẩn để AI mô phỏng chính xác phong cách viết của bạn." },
            { title: "Module 4: Meta-Prompting & Tinh chỉnh quy trình", detail: "Dùng AI viết Prompt cho AI. Quy trình Feedback Loop để ép AI tự hoàn thiện kết quả cho đến khi đạt yêu cầu." },
            { title: "Module 5: Tính năng tương tác nâng cao", detail: "Canvas, Deep Research, Guided Learning — biến AI thành Mentor cá nhân hướng dẫn và phản hồi tức thì." },
            { title: "Module 6: Studio đa phương thức (Multi-modal)", detail: "Chuyển đổi từ text sang Slide, Podcast, Video ngắn. Tạo sản phẩm đồ họa đỉnh cao bằng AI miễn phí." }
          ]
        },
        {
          label: "Level 3: Chuyên gia (Module 7–10)",
          modules: [
            { title: "Module 7: Chain of Thought — Chuỗi tư duy logic", detail: "Buộc AI lập luận từng bước trước khi đưa ra kết quả. Giải quyết bài toán kinh doanh phức tạp đòi hỏi độ chính xác cao." },
            { title: "Module 8: Xây dựng Trợ lý ảo chuyên biệt đa ngành", detail: "Thiết kế bộ khung Instruction chuyên sâu cho các kịch bản công việc thực tế theo từng ngành nghề." },
            { title: "Module 9: Trợ lý ảo từ tài liệu có sẵn", detail: "Biến PDF, Word, Excel thành Knowledge Base. AI truy xuất và phản hồi chính xác từ tài liệu của bạn." },
            { title: "Module 10: Huấn luyện AI thành 'phiên bản số' của chính bạn", detail: "Mô hình hóa luồng tư duy cá nhân. Trợ lý ảo ra quyết định và phản hồi dựa trên đúng phong cách, tư duy của bạn." }
          ]
        }
      ]
    },
    {
      name: "Phim Hoạt Hình AI",
      levels: [
        {
          label: "Level 1: Nền tảng (Module 1–3)",
          modules: [
            { title: "Module 1: Tổng quan hoạt hình & AI trong sản xuất phim", detail: "2D, 3D, Motion Graphics. So sánh quy trình truyền thống vs AI. Ứng dụng trong marketing, giáo dục, giải trí." },
            { title: "Module 2: Storytelling & xây dựng kịch bản", detail: "Cấu trúc câu chuyện 3 hồi. Xây dựng nhân vật và xung đột. Viết kịch bản phim ngắn bằng AI." },
            { title: "Module 3: Thiết kế hình ảnh & Storyboard", detail: "Nguyên lý bố cục hình ảnh. Tạo nhân vật và bối cảnh bằng AI. Đảm bảo tính nhất quán (Consistency)." }
          ]
        },
        {
          label: "Level 2: Sản xuất (Module 4–7)",
          modules: [
            { title: "Module 4: Tạo hình ảnh & nhân vật bằng AI", detail: "Prompt tạo nhân vật hoạt hình, nhiều góc nhìn và biểu cảm. Xây dựng style hình ảnh riêng." },
            { title: "Module 5: Tạo chuyển động & video bằng AI", detail: "Animation từ ảnh tĩnh. Text-to-video và Image-to-video. Đồng bộ chuyển động nhân vật." },
            { title: "Module 6: Âm thanh & lồng tiếng bằng AI", detail: "Voice AI, Lip-sync, nhạc nền và hiệu ứng âm thanh. Tối ưu trải nghiệm người xem." },
            { title: "Module 7: Dựng phim & hậu kỳ", detail: "Ghép cảnh, cắt dựng, chỉnh màu, hiệu ứng. Đồng bộ hình ảnh – âm thanh. Xuất bản video hoàn chỉnh." }
          ]
        }
      ]
    },
    {
      name: "Agentic AI",
      levels: [
        {
          label: "Level 1: Nền tảng (Module 1–2)",
          modules: [
            { title: "Module 1: Kỷ nguyên Agentic AI & Sự dịch chuyển công nghệ", detail: "AI Agent vs Chat AI thông thường. Khả năng Planning, Tools, Self-correct. Tư duy hệ thống thay vì sử dụng rời rạc." },
            { title: "Module 2: Tư duy Kiến trúc Hệ thống", detail: "Vẽ bản đồ kiến trúc hệ thống. Mổ xẻ công việc phức tạp thành SOP để chuẩn bị 'nhúng' AI vào từng điểm chạm." }
          ]
        },
        {
          label: "Level 2: Builder & Orchestrator (Module 3–6)",
          modules: [
            { title: "Module 3: Thiết kế Workflow", detail: "Chuyển tư duy nghiệp vụ thành Flowchart. Logic IF-THEN và cách AI ra quyết định tại các điểm rẽ nhánh." },
            { title: "Module 4: Xây AI Agent đầu tiên", detail: "Thực hành trên nền tảng No-code (Coze, Dify). Nạp Prompt, cấp quyền Tools (đọc web, gửi email, tra PDF)." },
            { title: "Module 5: Multi-Agent System", detail: "Phân vai: Planner, Executor, Reviewer. Giao thức giao tiếp và Routing giữa các AI Agent." },
            { title: "Module 6: Điều phối 'Phòng ban AI'", detail: "Xây dựng hệ thống 3+ Agents tự giao việc và báo cáo chéo. Tránh Agent 'đá chân' nhau." }
          ]
        }
      ]
    }
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-tighter text-lime uppercase">AI FOR EVERY ONE</div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Khóa học', 'Chương trình', 'Giảng viên', 'Học phí'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://zalo.me/0913368505" 
              className="px-6 py-2 bg-lime text-black font-bold text-sm rounded-lg hover:bg-lime-hover transition-all transform hover:scale-105"
            >
              Đăng ký ngay
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-primary border-b border-border-subtle px-6 py-8 flex flex-col gap-6"
            >
              {['Khóa học', 'Chương trình', 'Giảng viên', 'Học phí'].map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-gray-400 hover:text-white">{item}</a>
              ))}
              <a href="https://zalo.me/0913368505" className="bg-lime text-black text-center py-4 rounded-xl font-bold">Đăng ký ngay</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-lime/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-white/5 backdrop-blur-md rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-gray-300">Giảng viên với 30+ năm kinh nghiệm CNTT</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.05]"
            >
              Làm Chủ <span className="text-lime">AI</span> Trong 5 Tuần<br />
              <span className="text-gray-400">Không Cần Biết Lập Trình</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              3 khóa học từ nền tảng đến chuyên sâu, giúp bạn biến AI thành trợ lý đắc lực cho công việc, sáng tạo nội dung và xây dựng hệ thống tự vận hành.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#courses" className="w-full sm:w-auto px-10 py-5 bg-lime text-black font-extrabold rounded-xl text-lg hover:bg-lime-hover hover:scale-105 transition-all shadow-[0_0_40px_rgba(180,255,57,0.2)]">
                Xem Khóa Học
              </a>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-bg-primary bg-bg-card flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-bg-primary bg-bg-card flex items-center justify-center text-xs font-bold">
                  +1k
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10"
            >
              {[
                { label: 'Thực học', value: '10 Giờ' },
                { label: 'Module chuyên sâu', value: '10 Bài' },
                { label: 'Kinh nghiệm', value: '30+ Năm' },
                { label: 'Học viên', value: '2500+' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Pain Points --- */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Thách thức" 
            title="AI Đang Phổ Biến, Nhưng Bạn Có Thực Sự Làm Chủ?"
            desc="Hầu hết mọi người đang sử dụng AI sai cách, dẫn đến lãng phí thời gian và kết quả không như mong đợi."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, title: "Hỏi AI nhưng sai ý", desc: "Kết quả trả về lan man, chung chung hoặc sai lệch thực tế." },
              { icon: Clock, title: "Lãng phí thời gian", desc: "Mất hàng giờ làm thủ công trong khi AI có thể làm trong vài giây." },
              { icon: Zap, title: "Sợ bị tụt hậu", desc: "Đồng nghiệp đang tăng tốc 5-10 lần, bạn vẫn loay hoay với công cụ." },
              { icon: ShieldCheck, title: "Nghĩ AI rất khó", desc: "Bạn tin rằng cần biết Code để dùng AI chuyên nghiệp. Sai rồi!" }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-bg-card border border-border-subtle rounded-2xl hover:border-lime/30 group transition-all"
              >
                <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center mb-6 text-lime group-hover:scale-110 transition-transform">
                  <card.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-500 italic text-sm">Nếu bạn nhận ra mình ở đây, lộ trình dưới đây là dành cho bạn.</p>
        </div>
      </section>

      {/* --- Courses Grid --- */}
      <section id="courses" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Khóa học" 
            title="Lộ Trình Trở Thành Master AI"
            desc="3 khóa học độc lập giúp bạn làm chủ mọi khía cạnh của Generative AI."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                tag: "KHÓA 1 — NỀN TẢNG", 
                title: "Kỹ Thuật Giao Tiếp Với AI", 
                tagline: "Người dùng → Prompt Professional",
                features: ["Làm chủ ChatGPT, Claude, Gemini", "Thiết lập Trợ lý ảo cá nhân hóa", "Prompting nâng cao & Meta-Prompt"],
                price: "699.000đ",
                oldPrice: "3.000.000đ"
              },
              { 
                tag: "KHÓA 2 — SÁNG TẠO", 
                title: "Phim Hoạt Hình AI", 
                tagline: "Ý tưởng → Tác phẩm hoàn chỉnh",
                features: ["Storyboard & Kịch bản bằng AI", "Tạo nhân vật & bối cảnh nhất quán", "Animation, Lồng tiếng & Dựng phim"],
                price: "1.199.000đ",
                oldPrice: "5.000.000đ"
              },
              { 
                tag: "KHÓA 3 — CHUYÊN SÂU", 
                title: "Agentic AI System", 
                tagline: "Kiến trúc sư hệ thống AI Agent",
                features: ["Workflow Automation (No-code)", "Xây dựng AI Agent có tư duy", "Vận hành Multi-Agent chéo phòng ban"],
                price: "2.999.000đ",
                oldPrice: "10.000.000đ"
              }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-bg-card border border-border-subtle rounded-3xl p-8 flex flex-col group overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime via-yellow-400 to-orange-500 opacity-60" />
                <span className="inline-block px-3 py-1 bg-lime/10 text-lime text-[10px] font-bold rounded-full mb-6 border border-lime/20">{course.tag}</span>
                <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-8">{course.tagline}</p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {course.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                      <Check size={18} className="text-lime flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8">
                  <span className="text-gray-500 line-through text-sm">{course.oldPrice}</span>
                  <div className="text-3xl font-extrabold text-white mt-1">{course.price}</div>
                </div>

                <a href="https://zalo.me/0913368505" className="w-full py-4 bg-lime text-black font-bold rounded-xl text-center hover:bg-lime-hover transition-all">
                  Tham gia ngay
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Curriculum Breakdown --- */}
      <section id="chương-trình" className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Chi tiết" 
            title="Nội Dung Đào Tạo Thực Chiến"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {curriculumData.map((tab, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all border ${activeTab === idx ? 'bg-lime text-black border-lime' : 'bg-bg-card text-gray-400 border-border-subtle hover:border-lime/30'}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {curriculumData[activeTab].levels.map((level, lIdx) => (
                  <div key={lIdx} className="mb-10">
                    <div className="text-[10px] font-bold text-lime uppercase tracking-widest mb-6 pb-2 border-b border-white/5">{level.label}</div>
                    {level.modules.map((mod, mIdx) => (
                      <ModuleItem key={mIdx} title={mod.title} detail={mod.detail} />
                    ))}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- Instructor --- */}
      <section id="giảng-viên" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-shrink-0 w-full max-w-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-subtle group"
              >
                <img 
                  src="/instructor.jpg" 
                  alt="ThS. Đỗ Như Lâm" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                   <div className="text-xl font-bold">ThS. Đỗ Như Lâm</div>
                   <div className="text-lime text-sm font-medium">Chuyên gia AI & Chuyển đổi số</div>
                </div>
              </motion.div>
            </div>

            <div className="flex-grow">
              <SectionHeader label="Chuyên gia" title="Người Hướng Dẫn" centered={false} />
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Với hơn 30 năm thực chiến trong ngành CNTT, ThS. Đỗ Như Lâm không dạy lý thuyết suông. Thầy tập trung vào việc "mô hình hoá tư duy" để AI thực sự làm việc cho bạn.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mt-12">
                {[
                  { label: "Kinh nghiệm", value: "30+ Năm" },
                  { label: "Cấp độ học", value: "3 Lộ trình" },
                  { label: "Hỗ trợ", value: "1:1 Trực tiếp" }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-lime pl-6">
                    <div className="text-2xl font-bold mb-1">{item.value}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Table --- */}
      <section id="học-phí" className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader label="Học phí" title="Đầu Tư Cho Tương Lai Công Nghệ" desc="Giá ưu đãi có hạn áp dụng cho tháng này." />
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-10 flex flex-col hover:border-lime/20 transition-all">
              <span className="text-[10px] font-bold text-lime tracking-widest mb-4">FOUNDATION</span>
              <h3 className="text-xl font-bold mb-6">Khóa 1: Giao Tiếp AI</h3>
              <div className="mb-8">
                <span className="text-gray-500 line-through block text-sm">3.000.000đ</span>
                <span className="text-4xl font-extrabold">699k</span>
              </div>
              <ul className="space-y-5 flex-grow mb-10">
                {["10 Module video bài giảng", "Xây dựng Trợ lý ảo cá nhân", "Quy trình Prompt chuyên sâu"].map(i => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400">
                    <Check size={18} className="text-lime" /> {i}
                  </li>
                ))}
              </ul>
              <a href="https://zalo.me/0913368505" className="w-full py-4 rounded-xl border border-border-subtle font-bold hover:bg-white/5 transition-all text-center">Đăng ký ngay</a>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-bg-card border-2 border-lime rounded-3xl p-10 flex flex-col relative transform lg:scale-105 shadow-[0_20px_50px_rgba(180,255,57,0.1)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-black px-6 py-1 rounded-full text-xs font-black tracking-widest uppercase">Popular</div>
              <span className="text-[10px] font-bold text-lime tracking-widest mb-4">CREATIVE</span>
              <h3 className="text-xl font-bold mb-6">Khóa 2: Hoạt Hình AI</h3>
              <div className="mb-8">
                <span className="text-gray-500 line-through block text-sm">5.000.000đ</span>
                <span className="text-4xl font-extrabold">1.199k</span>
              </div>
              <ul className="space-y-5 flex-grow mb-10">
                {["10 Module từ kịch bản đến dựng", "Tạo nhân vật & chuyển động", "Lồng tiếng & Lip-sync AI", "Dự án phim hoạt hình đầu tay", "Hỗ trợ cộng đồng học viên"].map(i => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400">
                    <Check size={18} className="text-lime" /> {i}
                  </li>
                ))}
              </ul>
              <a href="https://zalo.me/0913368505" className="w-full py-4 rounded-xl bg-lime text-black font-extrabold text-lg hover:bg-lime-hover shadow-lg text-center">Tham gia ngay</a>
            </div>

            {/* Plan 3 */}
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-10 flex flex-col hover:border-lime/20 transition-all">
              <span className="text-[10px] font-bold text-lime tracking-widest mb-4">MASTER</span>
              <h3 className="text-xl font-bold mb-6">Khóa 3: Agentic AI</h3>
              <div className="mb-8">
                <span className="text-gray-500 line-through block text-sm">10.000.000đ</span>
                <span className="text-4xl font-extrabold">2.999k</span>
              </div>
              <ul className="space-y-5 flex-grow mb-10">
                {["Kiến trúc Multi-Agent System", "Vận hành hệ thống không code", "Hỗ trợ tinh chỉnh 1:1 trực tiếp", "Tối ưu hóa chi phí vận hành AI", "Chiến lược Scale-up hệ thống"].map(i => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400">
                    <Check size={18} className="text-lime" /> {i}
                  </li>
                ))}
              </ul>
              <a href="https://zalo.me/0913368505" className="w-full py-4 rounded-xl border border-border-subtle font-bold hover:bg-white/5 transition-all text-center">Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Fit Check --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-lime flex items-center gap-3">
                <Target /> Khóa Học Phù Hợp Với Bạn...
              </h3>
              <div className="space-y-4">
                {[
                  "Muốn AI làm thay 80% công việc lặp lại",
                  "Chưa biết lập trình nhưng muốn làm chủ công nghệ",
                  "Đang là Content Creator, Marketer muốn tăng tốc",
                  "Chủ doanh nghiệp muốn tự động hóa bộ máy",
                  "Sinh viên muốn tăng sức cạnh tranh khi ra trường"
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                    <Check className="text-lime flex-shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-500 flex items-center gap-3">
                <X /> Chưa Phù Hợp Nếu Bạn...
              </h3>
              <div className="space-y-4 opacity-60">
                {[
                  "Đang tìm khóa học AI chuyên sâu về Code/Math",
                  "Muốn học Training/Fine-tuning Model gốc",
                  "Lười thực hành và chỉ muốn nghe lý thuyết",
                  "Không có máy tính hoặc smartphone kết nối mạng"
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 text-gray-500">
                    <X className="flex-shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader label="Giải đáp" title="Câu Hỏi Thường Gặp" />
          <div className="max-w-2xl mx-auto">
            <FAQItem 
              question="Tôi hoàn toàn mới với AI, có theo được không?" 
              answer="Hoàn toàn được. Cả 3 khóa đều thiết kế cho người không chuyên kỹ thuật (No-code). Bạn chỉ cần biết dùng máy tính và internet cơ bản. Mỗi khóa bắt đầu từ Level 1 giải thích từ gốc rễ." 
            />
            <FAQItem 
              question="Giá ưu đãi áp dụng đến khi nào?" 
              answer="Giá ưu đãi hiện tại áp dụng cho tháng này. Sau đó giá sẽ trở về mức chính thức (gấp 3-4 lần). Đừng bỏ lỡ cơ hội sở hữu kỹ năng AI với chi phí tối ưu nhất." 
            />
            <FAQItem 
              question="Tôi có được hỗ trợ sau khóa học không?" 
              answer="Có. Bạn sẽ được tham gia cộng đồng học viên AI FOR EVERY ONE để trao đổi kinh nghiệm, cập nhật các Tools mới nhất và được giải đáp thắc mắc liên tục." 
            />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-lime/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1]">Thời Đại AI Không Chờ Đợi.<br /><span className="text-lime">Bạn Đã Sẵn Sàng Bắt Kịp?</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Chỉ 5 tuần để sở hữu năng lực mà hàng triệu người đang khao khát. Chọn khóa học của bạn và bắt đầu chuyển đổi ngay hôm nay.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://zalo.me/0913368505" className="w-full sm:w-auto px-12 py-6 bg-lime text-black font-extrabold rounded-2xl text-xl hover:bg-lime-hover transform hover:scale-105 transition-all">
                Đăng ký ngay
              </a>
              <a href="https://zalo.me/0913368505" className="flex items-center gap-2 text-white font-bold hover:text-lime transition-colors">
                <MessageSquare size={20} /> Tư vấn trực tiếp qua Zalo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 border-t border-border-subtle bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="text-2xl font-black text-lime mb-6 uppercase">AI FOR EVERY ONE</div>
              <p className="text-gray-500 max-w-xs leading-relaxed mb-8">Đào tạo AI thực chiến cho người Việt. Biến công nghệ thành lợi thế cạnh tranh cá nhân và doanh nghiệp.</p>
              <div className="flex items-center gap-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime/20 cursor-pointer transition-colors"><Globe size={20} /></div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime/20 cursor-pointer transition-colors"><Video size={20} /></div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime/20 cursor-pointer transition-colors"><Settings size={20} /></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Khóa học</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-lime">Giao tiếp với AI</a></li>
                <li><a href="#" className="hover:text-lime">Phim hoạt hình AI</a></li>
                <li><a href="#" className="hover:text-lime">Hệ thống AI Agent</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Liên hệ</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>Hotline: 0913 368 505</li>
                <li>Email: donhulam@gmail.com</li>
                <li>Hà Nội, Việt Nam</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-xs">© 2026 AI FOR EVERY ONE by ThS. Đỗ Như Lâm. All rights reserved.</div>
            <div className="flex gap-8 text-xs text-gray-600 font-medium">
              <a href="#" className="hover:text-white">Điều khoản</a>
              <a href="#" className="hover:text-white">Bảo mật</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
