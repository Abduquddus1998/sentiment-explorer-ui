import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderContainer, ProfileMenu, UserAvatar } from "./MainMenuStyle";

export default function Header() {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const email = localStorage.getItem("email");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuRef]);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isActive");
    localStorage.removeItem("email");

    navigate("/");
  };

  const onNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <UserAvatar onClick={() => setIsOpen(true)}>
        {email?.slice(0, 2).toUpperCase()}
      </UserAvatar>

      {isOpen && (
        <ProfileMenu ref={menuRef}>
          <div onClick={() => onNavigate("/main/profile")}>Profile</div>
          <div onClick={() => onNavigate("/main/settings")}>Settings</div>
          <div onClick={onLogout}>Logout</div>
        </ProfileMenu>
      )}
    </HeaderContainer>
  );
}
