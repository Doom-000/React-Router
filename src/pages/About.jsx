function About() {
  return (
    <div style={{ padding: "4px 0" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "30px", borderBottom: "2px solid #222", paddingBottom: "10px" }}>About Us</h2>
      <div style={{ background: "#111", padding: "30px", borderRadius: "12px", border: "1px solid #222" }}>
        <h3 style={{ color: "#00c6ff", marginBottom: "15px" }}>ผู้ก่อตั้ง & ทีมพัฒนาหลัก</h3>
        <p style={{ lineHeight: "1.8", color: "#ccc" }}>
          <strong>Nexus  Studio</strong> ก่อตั้งโดยนักพัฒนาผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศ (IT) 
          ที่มีความหลงใหลในกลไกของเกม (Game Mechanics), การวางตรรกะ Event Sheets, ไปจนถึงการจัดการ Network Server และการทำ Crossplay Web Platform
        </p>
        <p style={{ lineHeight: "1.8", color: "#ccc", marginTop: "15px" }}>
          เรามุ่งมั่นที่จะสร้างสรรค์เว็บแอปพลิเคชันและเกมอินดี้ที่มีประสิทธิภาพสูง ด้วยเทคโนโลยีที่ทันสมัย เช่น React, Vite และ Cloud Infrastructure เพื่อส่งมอบประสบการณ์ที่ดีที่สุดให้กับผู้ใช้ทุกคน
        </p>
      </div>
    </div>
  );
}

export default About;