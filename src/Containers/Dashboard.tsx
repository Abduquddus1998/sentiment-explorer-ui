import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainMenu from "../Components/MainMenu";
import { DashboardLayout } from "./ContainerStyles";

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
      <Outlet />
      {/*<div>Dashboard layout</div>*/}
    </DashboardLayout>
  );
}
