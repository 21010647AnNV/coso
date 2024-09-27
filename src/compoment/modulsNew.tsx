import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { newSupply } from "@/sever/suply";

function ModuleNewUser({ onUpdate }: any) {
  const [show, setShow] = useState(false);
  const [ten, setTen] = useState("");
  const [BCC, setBCC] = useState("");
  const [CC, setCC] = useState("");
  const [DiaChi, setDiaChi] = useState("");
  const [ThongTinChung, setThongTinChung] = useState("");



  const handleTenChange = (e: any) => setTen(e.target.value);
  const handleBCCChange = (e: any) => setBCC(e.target.value);
  const handleDiaChiChange = (e: any) => setDiaChi(e.target.value);
  const handleCCChange = (e: any) => setCC(e.target.value);
  const handleThongTinChungChange = (e: any) => setThongTinChung(e.target.value);

  const handleClose = () =>{

    setShow(false);
    setTen("");
    setBCC("");
    setCC("");
    setDiaChi("");
    setThongTinChung("");
  } 
  const handleShow = () =>{
    setShow(true);
    
  }
  
  const handleUpdate = async ()=>{
    if (ten === "" || BCC === "" || CC === "" || DiaChi === "" || ThongTinChung === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      
      return; 
    }

    const newData = {
      Ten: ten,
      BCC: BCC,
      CC: CC,
      DiaChi: DiaChi,
      ThongTinChung: ThongTinChung
    };

    try {
      await newSupply(newData);
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
              <Form.Label>BCC</Form.Label>
              <Form.Control type="text" placeholder="BCC"
                value={BCC}
                onChange={handleBCCChange} />
            </Form.Group>

            

            <Form.Group controlId="formCC">
              <Form.Label>CC</Form.Label>
              <Form.Control type="CC" placeholder="Nhập CC"
                value={CC}
                onChange={handleCCChange} />
            </Form.Group>
            <Form.Group controlId="formCC">
              <Form.Label>DiaChi</Form.Label>
              <Form.Control type="text" placeholder="Nhập Dia Chi"
                value={DiaChi}
                onChange={handleDiaChiChange} />
            </Form.Group>

           
            
            <Form.Group controlId="formContent">
              <Form.Label>Thông Tin Chung</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Thông Tin Chung"
                value={ThongTinChung}
                onChange={handleThongTinChungChange} />
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
