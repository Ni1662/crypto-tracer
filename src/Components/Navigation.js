import React from "react";
import styled from "styled-components";
import { signout } from "../Utils/Icons";
import { menuItems } from "../Utils/menuItems";
import { CryptoState } from "../CryptoContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 80vh;
  background: linear-gradient(
    to right bottom,
    rgba(21, 58, 114, 0.5),
    rgba(21, 58, 114, 0.3)
  );
  border: 3px solid #00c9c8;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #00c9c8;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 201, 200, 0.06);
    }
    h2 {
      color: rgba(255, 255, 255, 1);
    }
    p {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(255, 255, 255, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(255, 255, 255, 1) !important;
    i {
      color: rgba(255, 255, 255, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #d5d5e4;
      border-radius: 0 10px 10px 0;
    }
  }
  .bottom-nav {
    list-style-type: none;
    cursor: pointer;
  }
`;

function Navigation({ active, setActive }) {
  const { user, userinfo, setAlert } = CryptoState();

  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !",
    });
  };

  // console.log(userinfo);

  return (
    <NavStyled>
      <div className="user-con">
        <img src={user?.photoURL} alt="" />
        <div className="text">
          <h2>{user?.displayName}</h2>
          <p>{userinfo?.username}</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              <div className="icon">{item.icon}</div>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li onClick={logOut}>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
}

export default Navigation;
