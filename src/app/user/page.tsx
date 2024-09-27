"use client";

import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "@/stype/supply2.module.css";
import ModuleUse from "@/compoment/modulsUse";
import SideBar from "@/compoment/Sidebar";
import { apiUser, deleteCustomer } from "@/sever/user";
import ModuleNewUser from "@/compoment/modulsNewUse";

export default function Home() {
  const [userData, setUserData] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const data = await apiUser(); 
      setUserData(data); 
    } catch (error) {
      console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);

  const handleUpdate = () => {
    fetchData(); 
  };
  const handleDelete = (id: any) => {
    const handleDeleteAsync = async () => {
      try {
        await deleteCustomer(id);
        const updatedData = userData.filter((user) => user.ID !== id);
        setUserData(updatedData);
      } catch (error) {
        console.error("Đã xảy ra lỗi khi xoá dữ liệu khách hàng:", error);
      }
    };

    return handleDeleteAsync;
  };
  const handleSearch = (search:any) => {
   
    const filteredData = userData.filter((user) =>
      user.SDT.toLowerCase().includes(search.toLowerCase())
    );
    console.log(search)
    setUserData(filteredData);
  };

  return (
    <>
      <SideBar onSearch={handleSearch} onUpdate={handleUpdate} ></SideBar>
      <div className={styles.center}>
        <div className={styles.title}>
          <h1>Khách Hàng Tiềm Năng</h1>
          <ModuleNewUser onUpdate={handleUpdate}></ModuleNewUser>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Tên nguồn cung khách hàng </th>
              <th colSpan={2}>SDT </th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td colSpan={2}>{user.Ten}</td>
                <td colSpan={2}>{user.SDT}</td>
                <td>
                  <ModuleUse data={user} onUpdate={handleUpdate} />
                  <Button
                    className={styles.btn_l}
                    variant="danger"
                    onClick={handleDelete(user.ID)}
                  >
                    xoá
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
