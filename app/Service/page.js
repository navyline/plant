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
            src="/img/544.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
          พืชประกอบด้วยส่วนต่าง ๆ ได้แก่ ราก ลำต้น ใบ และอาจมีดอก ผล ซึ่งภายในผลมีเมล็ด โดยแต่ละส่วนจะทำหน้าที่แตกต่างกัน รากมีลักษณะเรียวยาว และแตกแขนงเป็นเส้นเล็ก ๆ
          </p>
          <a href="contact.html" className="btn btn-primary">
           GG
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
