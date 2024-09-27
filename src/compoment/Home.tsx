"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import stype from "@/stype/sidebar.module.css";
import { useRouter } from "next/navigation";

 function Homex() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    if (email == "admin" && password == "admin") {
      router.push("/user");
    } else {
      alert(" bạn đã nhập sai vui lòng nhập lại cho đúng ");
    }
  };

  return (
    <>
      <div className={stype.container}>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tài Khoản"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
export default Homex