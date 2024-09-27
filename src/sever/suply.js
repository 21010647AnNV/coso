import axios from "axios";

export const apisupply = async () => {
  try {
    const response = await axios.get(
      "http://20.212.111.173:5000/nhacungcap"
    );
    //   console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSupply = async (customerId) => {
  const url = `http://20.212.111.173:5000/nhacungcap/${customerId}`;

  try {
    const response = await axios.delete(url);
    console.log("Dữ liệu khách hàng đã được xoá:", response.data);
    // Add any logic you want after deleting the customer data
  } catch (error) {
    console.error("Đã xảy ra lỗi khi xoá dữ liệu khách hàng:", error);
    // Add any error handling logic here
  }
};

export const updateSupply = async (customerId,repon) => {
  const url = `http://20.212.111.173:5000/nhacungcap/${customerId}`;

  try {
    const response = await axios.put(url,repon);
    console.log("Dữ liệu khách hàng đã được cập nhật :", response.data);
    // Add any logic you want after deleting the customer data
  } catch (error) {
    console.error("Đã xảy ra lỗi khi xoá cap nhat:", error);
    // Add any error handling logic here
  }
};
export const newSupply = async (repon) => {
  const url = `http://20.212.111.173:5000/nhacungcap`;

  try {
    const response = await axios.post(url,repon);
    console.log("Dữ liệu khách hàng đã được cập nhật :", response.data);
    // Add any logic you want after deleting the customer data
  } catch (error) {
    console.error("Đã xảy ra lỗi khi xoá dữ liệu khách hàng:", error);
    // Add any error handling logic here
  }
};


