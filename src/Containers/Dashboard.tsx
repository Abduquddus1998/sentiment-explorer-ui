import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainMenu from "../Components/MainMenu";
import { DashboardLayout } from "./ContainerStyles";
import { MainPageWrapper, PageContainer } from "../Components/MainMenuStyle";
import Header from "../Components/Header";

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <DashboardLayout>
      <MainMenu />

      <MainPageWrapper>
        <Header />

        <PageContainer>
          <Outlet />
        </PageContainer>
      </MainPageWrapper>
    </DashboardLayout>
  );
}
