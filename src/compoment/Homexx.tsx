import style from "@/stype/sidebar.module.css";
import user_icon from "@/stype/person.png";
import password_icon from "@/stype/password.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Homexx() {
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
      <div className={style.containerx}>
        <div className={style.header}>
          <div className={style.text}>Sign Up</div>
          <div className={style.underline}></div>
        </div>
        <div className={style.inputxs}>
          <div className={style.inputx}>
            <Image className={style.img} src={user_icon} alt="" />
            <input
              className={style.nhap}
              type="text"
              placeholder="Tên Đăng Nhập"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className={style.inputx}>
            <Image className={style.img} src={password_icon} alt="" />
            <input
              className={style.nhap}
              type="password"
              placeholder="Mật Khẩu"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className={style.submit_container}>
          <button onClick={handleClick} className={style.submit}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Homexx;
