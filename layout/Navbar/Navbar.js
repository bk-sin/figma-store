import Image from "next/image"
import React from "react"
import MenuItem from "./components/MenuItem/MenuItem"

export default function Navbar() {
  return (
    <div
      className="navbar-container"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <ul className="left-menu">
        <MenuItem text="shop" />
        <li className="menu-item">About</li>
        <li className="menu-item">
          <Image
            src={"/assets/navbar/seach-icon.svg"}
            width={24}
            height={24}
            alt="search icon"
          />
        </li>
      </ul>
      <Image
        src={"/assets/navbar/logo.svg"}
        width={231}
        height={18}
        alt="logo"
      />
      <ul className="right-menu">
        <li className="menu-item">Argentina</li>
        <li className="menu-item">Cart</li>
      </ul>
    </div>
  )
}
