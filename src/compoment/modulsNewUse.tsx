import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { newCustomer } from "@/sever/user";

function ModuleNewUser({ onUpdate }: any) {
  const [show, setShow] = useState(false);
  const [ten, setTen] = useState("");
  const [sdt, setSdt] = useState("");
  const [email, setEmail] = useState("");
  const [nghenghiep, setNgheNghiep] = useState("");
  const [thongtin, setThongtin] = useState("");



  const handleTenChange = (e: any) => setTen(e.target.value);
  const handleSdtChange = (e: any) => setSdt(e.target.value);
  const handleNgheNghiepChange = (e: any) => setNgheNghiep(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleThongtinChange = (e: any) => setThongtin(e.target.value);

  const handleClose = () =>{

    setShow(false);
    setTen("");
    setSdt("");
    setEmail("");
    setNgheNghiep("");
    setThongtin("");
  } 
  const handleShow = () =>{
    setShow(true);
    
  }

  const isValidEmail = (email:any) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber:any) => {
    const phonePattern = /^\d{10,11}$/; 
    return phonePattern.test(phoneNumber);
  };

  const handleUpdate = async ()=>{

    if (ten === "" || sdt === "" || email === "" || nghenghiep === "" || thongtin === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Vui lòng nhập đúng định dạng email");
      return;
    }

    if (!isValidPhoneNumber(sdt)) {
      alert("Vui lòng nhập số điện thoại hợp lệ");
      return;
    }



    const newData = {
      Ten: ten,
      SDT: sdt,
      Email: email,
      NgheNghiep: nghenghiep,
      ThongTinChung: thongtin
    };

    try {
      await newCustomer(newData);
      onUpdate();
      handleClose();
    } catch (error) {
      console.error("Error updating customer data:", error);
    }

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Thêm Mới
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
       
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên"
                value={ten}
                onChange={handleTenChange} />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>SDT</Form.Label>
              <Form.Control type="text" placeholder="SDT"
                value={sdt}
                onChange={handleSdtChange} />
            </Form.Group>

            

            <Form.Group controlId="formCC">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập Email"
                value={email}
                onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Nghề Nghiệp</Form.Label>
              <Form.Control type="text"  placeholder="Nhập Nghề Nghiệp"
                value={nghenghiep}
                onChange={handleNgheNghiepChange} />
            </Form.Group>
            
            <Form.Group controlId="formContent">
              <Form.Label>Thông Tin Chung</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Thông Tin Chung"
                value={thongtin}
                onChange={handleThongtinChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModuleNewUser
;
