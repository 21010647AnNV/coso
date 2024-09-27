// SideBar.js
"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShapes, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../stype/sidebar.module.css";
import Link from "next/link";

const SideBar = ({ onSearch, onUpdate }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    console.log(value)
    setSearchQuery(value);
    console.log(searchQuery)
    if (value === "") {
      onUpdate();
    }
    onSearch(value);
  };

  return (
    <div
      className={styles.sidebar}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {isHovered ? (
        <>
          <div className={styles.side}>
            <ul className={styles.ul}>
              <li className={styles.flex_container}>
                <FontAwesomeIcon icon={faSearch} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Tìm kiếm..."
                  className={`${styles.searchInput} ${styles.flexContainer}`}
                />
              </li>
              <li>
                <Link href="/user" className={styles.icon}>
                  <FontAwesomeIcon icon={faUser} />
                  Khách hàng tiềm năng
                </Link>
              </li>
              <li>
                <Link href="/supply" className={styles.icon}>
                  <FontAwesomeIcon icon={faShapes} />
                  Nguồn cung khách hàng
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className={styles.side}>
          <ul className={styles.ul}>
            <li>
              <FontAwesomeIcon icon={faSearch} />
            </li>

            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faShapes} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
