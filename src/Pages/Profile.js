import React, { useState } from "react";
import { MainLayout } from "../styles/Layouts";
import Navigation from "../Components/Navigation";
import Dashboard from "../Components/Tracker/Dashboard";
import Income from "../Components/Tracker/Income";
import Expenses from "../Components/Tracker/Expenses";
import styled from "styled-components";
import UserProfile from "../Components/Tracker/UserProfile";

const Profile = () => {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <UserProfile />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ProStyled>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </ProStyled>
  );
};

const ProStyled = styled.div`
  height: 89vh;
  position: relative;
  main {
    flex: 1;
    background: linear-gradient(
      to right bottom,
      rgba(21, 58, 114, 0.5),
      rgba(21, 58, 114, 0.3)
    );
    border: 3px solid #00c9c8;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default Profile;
