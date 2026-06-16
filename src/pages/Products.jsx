// รวมข้อมูลสินค้าทั้งหมดเข้าด้วยกัน (มีทั้ง Title, Desc, และ Price)
const products = [
  { 
    id: 1, 
    title: "Construct 3 Logic Pack", 
    price: "$28", 
    desc: "ชุดเทมเพลตและระบบ Event Sheet สำเร็จรูปสำหรับเกมแนว Action & Survival" 
  },
  { 
    id: 2, 
    title: "Crossplay Server Solutions", 
    price: "$25", 
    desc: "บริการจัดตั้งและปรับแต่ง Server ความเร็วสูง รองรับการเล่นข้ามแพลตฟอร์ม PC และ Mobile" 
  },
  { 
    id: 3, 
    title: "IoT Interactive Wiki", 
    price: "$22", 
    desc: "ระบบจัดการฐานข้อมูลอัจฉริยะสำหรับอุปกรณ์ Microcontroller และ Sensor" 
  },
  { 
    id: 4, 
    title: "Vinyl LP — Classic Catalog", 
    price: "$15", 
    desc: "แผ่นเสียงไวนิลคอลเลกชันคลาสสิกสำหรับสะสม เสียงคมชัดระดับสตูดิโอ" 
  }
];

function Products() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 0" }}>
      <h2 style={{ 
        fontSize: "36px", 
        marginBottom: "30px", 
        borderBottom: "2px solid #222", 
        paddingBottom: "10px",
        color: "#fff"
      }}>
        Our Products & Tech
      </h2>

      {/* แสดงผลแบบ Grid แบ่งคอลัมน์สวยๆ */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "25px" 
      }}>
        {products.map((p) => (
          <div 
            key={p.id} 
            style={{
              background: "#111",
              border: "1px solid #222",
              padding: "25px",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // จัดให้ปุ่มหรือราคาอยู่ด้านล่างสุดเท่ากัน
              minHeight: "180px"
            }}
            // เอฟเฟกต์เมื่อเมาส์ชี้ (Hover) กล่องจะลอยขึ้นและเปลี่ยนสีเส้นขอบ
            onMouseOver={(e) => { 
              e.currentTarget.style.borderColor = "#00c6ff"; 
              e.currentTarget.style.transform = "translateY(-5px)"; 
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 198, 255, 0.1)";
            }}
            onMouseOut={(e) => { 
              e.currentTarget.style.borderColor = "#222"; 
              e.currentTarget.style.transform = "translateY(0)"; 
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* ส่วนบน: ชื่อสินค้า และ คำอธิบาย */}
            <div>
              <h3 style={{ 
                margin: "0 0 12px 0", 
                color: "#fff", 
                fontSize: "20px",
                fontWeight: "600"
              }}>
                {p.title}
              </h3>
              <p style={{ 
                color: "#888", 
                fontSize: "14px", 
                lineHeight: "1.6",
                margin: "0 0 20px 0"
              }}>
                {p.desc}
              </p>
            </div>

            {/* ส่วนล่าง: แสดงราคาสินค้าสีฟ้า/ทองสวยๆ */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              borderTop: "1px solid #1a1a1a",
              paddingTop: "15px"
            }}>
              <span style={{ color: "#666", fontSize: "14px" }}>Price</span>
              <span style={{ 
                color: "#00c6ff", 
                fontSize: "22px", 
                fontWeight: "bold" 
              }}>
                {p.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;