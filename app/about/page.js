import Navbar from '/app/component/nav';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-6 mx-auto about"
          style={{
            backgroundColor: '#ffffff', // พื้นหลังสีขาว
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#333' }}>
            About
          </h2>
          <img
            src="/img/11.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
          พืช เป็นสิ่งมีชีวิตกลุ่มใหญ่ประเภทหนึ่งอยู่ในอาณาจักรพืช (Kingdom Plantae) ประกอบด้วย ไม้ยืนต้น ไม้ดอก พืชล้มลุก และเฟิร์น พบได้ทั้งบนบกและในน้ำ เป็นสิ่งมีชีวิตที่เนื้อเยื่อส่วนใหญ่ประกอบด้วยหลายเซลล์
          </p>
          <a href="#" className="btn btn-primary">
           เพิ่มเติม
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
