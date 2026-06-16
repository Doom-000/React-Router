import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#080b11", /* สีพื้นหลังมืดสไตล์อวกาศ/ไซไฟ */
        color: "#ffffff",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* ฝังเอฟเฟกต์เม็ดไฟ/ละอองจุดแสงลอยพริ้วๆ */}
      <style>{`
        @keyframes floatUpAndSway {
          0% {
            transform: translateY(105vh) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8; /* เม็ดไฟสว่างขึ้นเมื่อพ้นขอบจอ */
          }
          50% {
            transform: translateY(50vh) translateX(15px) scale(1); /* ส่ายไปทางขวา */
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-5vh) translateX(-15px) scale(0.5); /* ส่ายไปทางซ้ายแล้วเล็กลงจนหายไป */
            opacity: 0;
          }
        }
        
        .particle-dot {
          position: absolute;
          background: #00c6ff; /* สีเม็ดไฟหลัก (ฟ้าอ่อนเรืองแสง) */
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          /* เพิ่มความเรืองแสงจิ๋วๆ ให้ตัวเม็ดไฟ */
          box-shadow: 0 0 8px #00c6ff, 0 0 12px #0072ff; 
        }
      `}</style>

      {/* กองทัพเม็ดไฟจิ๋ว กระจายตัวสุ่มขนาด ความเร็ว และตำแหน่งบนหน้าจอ */}
      <div className="particle-dot" style={{ width: "4px", height: "4px", left: "8%", animation: "floatUpAndSway 12s infinite linear", animationDelay: "0s" }}></div>
      <div className="particle-dot" style={{ width: "2px", height: "2px", left: "22%", animation: "floatUpAndSway 8s infinite linear", animationDelay: "2s" }}></div>
      <div className="particle-dot" style={{ width: "5px", height: "5px", left: "35%", animation: "floatUpAndSway 14s infinite linear", animationDelay: "5s" }}></div>
      <div className="particle-dot" style={{ width: "3px", height: "3px", left: "48%", animation: "floatUpAndSway 10s infinite linear", animationDelay: "1s" }}></div>
      <div className="particle-dot" style={{ width: "2px", height: "2px", left: "60%", animation: "floatUpAndSway 9s infinite linear", animationDelay: "6s" }}></div>
      <div className="particle-dot" style={{ width: "6px", height: "6px", left: "73%", animation: "floatUpAndSway 16s infinite linear", animationDelay: "3s" }}></div>
      <div className="particle-dot" style={{ width: "3px", height: "3px", left: "85%", animation: "floatUpAndSway 11s infinite linear", animationDelay: "7s" }}></div>
      <div className="particle-dot" style={{ width: "4px", height: "4px", left: "93%", animation: "floatUpAndSway 13s infinite linear", animationDelay: "4s" }}></div>
      
      {/* เม็ดเพิ่มเติมเพื่อความหนาแน่นแบบพอดีๆ */}
      <div className="particle-dot" style={{ width: "2px", height: "2px", left: "15%", animation: "floatUpAndSway 15s infinite linear", animationDelay: "8s" }}></div>
      <div className="particle-dot" style={{ width: "4px", height: "4px", left: "55%", animation: "floatUpAndSway 12s infinite linear", animationDelay: "9s" }}></div>

      {/* ส่วนโครงสร้างหลักของเว็บ (วางทับอยู่เหนือละอองไฟ) */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1, padding: "40px 20px", maxWidth: "1200px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;