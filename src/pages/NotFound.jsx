import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      textAlign: "center",
      padding: "80px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* CSS Animation Effect แบบฉีดเข้าตรงๆ */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        .floating-404 {
          animation: float 4s ease-in-out infinite;
        }
        .pulsing-text {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <h1 className="floating-404" style={{ 
        fontSize: "120px", 
        margin: 0, 
        fontWeight: "900",
        background: "linear-gradient(45deg, #ff4e50, #f9d423)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 10px 30px rgba(255,78,80,0.2)"
      }}>
        404
      </h1>
      
      <h2 className="pulsing-text" style={{ fontSize: "24px", color: "#eee", marginTop: "10px", marginBottom: "20px" }}>
        Oops! Page Not Found
      </h2>
      
      <p style={{ color: "#666", maxWidth: "450px", margin: "0 auto 30px auto", lineHeight: "1.6" }}>
        ขออภัยด้วยครับ! ดูเหมือนคุณกำลังพยายามเข้าสู่เส้นทาง (Path) ที่ไม่มีอยู่จริงในระบบ กรุณาตรวจสอบ URL อีกครั้ง
      </p>
      
      <Link to="/" style={{ 
        padding: "12px 28px", 
        background: "#222", 
        color: "#fff", 
        textDecoration: "none", 
        borderRadius: "8px", 
        fontWeight: "600",
        border: "1px solid #333",
        transition: "0.3s"
      }}
      onMouseOver={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#000"; }}
      onMouseOut={(e) => { e.target.style.background = "#222"; e.target.style.color = "#fff"; }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;