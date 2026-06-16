import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "rgba(10, 10, 10, 0.75)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between", /* ดันชื่อซ้าย ปุ่มเมนูขวา */
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      {/* ชื่อสตูดิโออยู่ฝั่งซ้าย */}
      <div style={{ 
        fontSize: "22px", 
        fontWeight: "bold", 
        letterSpacing: "1px",
        background: "linear-gradient(45deg, #00c6ff, #0072ff)", 
        WebkitBackgroundClip: "text", 
        WebkitTextFillColor: "transparent" 
      }}>
        NEXUS  STUDIO
      </div>

      {/* เมนูลิงก์ถูกดันมาอยู่ฝั่งขวาเรียบร้อย */}
      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/" style={{ color: "#888", textDecoration: "none", fontWeight: "500", transition: "0.3s" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#888"}>Home</Link>
        <Link to="/products" style={{ color: "#888", textDecoration: "none", fontWeight: "500", transition: "0.3s" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#888"}>Products</Link>
        <Link to="/about" style={{ color: "#888", textDecoration: "none", fontWeight: "500", transition: "0.3s" }} onMouseOver={(e) => e.target.style.color = "#00c6ff"} onMouseOut={(e) => e.target.style.color = "#888"}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;