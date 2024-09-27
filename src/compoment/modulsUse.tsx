"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updateCustomer } from "@/sever/user";

function ModuleUse({ data, onUpdate }: any) {
  const [show, setShow] = useState(false);
  const [ten, setTen] = useState(data.Ten);
  const [sdt, setSdt] = useState(data.SDT);
  const [nghenghiep, setNgheNghiep] = useState(data.NgheNghiep);
  const [email, setEmail] = useState(data.Email);
  const [thongtin, setThongtin] = useState(data.ThongTinChung);

  const handleTenChange = (e: any) => setTen(e.target.value);
  const handleSdtChange = (e: any) => setSdt(e.target.value);
  const handleNgheNghiepChange = (e: any) => setNgheNghiep(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleThongtinChange = (e: any) => setThongtin(e.target.value);

  const handleClose = () => {
    setTen(data.Ten);
    setSdt(data.SDT);
    setNgheNghiep(data.NgheNghiep);
    setEmail(data.Email);
    setThongtin(data.ThongTinChung);

    setShow(false);
  };
  const handleShow = () => {
    setTen(data.Ten);
    setSdt(data.SDT);
    setNgheNghiep(data.NgheNghiep);
    setEmail(data.Email);
    setThongtin(data.ThongTinChung);
    setShow(true);
  };

  const isValidEmail = (email:any) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber:any) => {
    const phonePattern = /^\d{10,11}$/; 
    return phonePattern.test(phoneNumber);
  };

  const handleSave = async () => {



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






 
    const updatedData = {
      Ten: ten,
      SDT: sdt,
      NgheNghiep: nghenghiep,
      Email: email,
      ThongTinChung: thongtin,
      ID: data.ID,
    };

    try {
      await updateCustomer(data.ID, updatedData);
      onUpdate();
      handleClose();
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  console.log(data);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sửa
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Quản lý khách hàng tiềm năng </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Tên Khách Hàng </Form.Label>
              <Form.Control
                type="text"
                value={ten}
                onChange={handleTenChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formRecipient">
              <Form.Label>Số Điện Thoại </Form.Label>
              <Form.Control
                type="text"
                value={sdt}
                onChange={handleSdtChange}
              />
            </Form.Group>

            <Form.Group controlId="formCC">
              <Form.Label>Nghề Nghiệp </Form.Label>
              <Form.Control
                type="text"
                value={nghenghiep}
                onChange={handleNgheNghiepChange}
              />
            </Form.Group>

            <Form.Group controlId="formBCC">
              <Form.Label>Thông Tin Chi Tiết </Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                onChange={handleThongtinChange}
                value={thongtin}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModuleUse;
