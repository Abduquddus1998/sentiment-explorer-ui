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
  }, []);

  const onLogout = () => {};

  return (
    <HeaderContainer>
      <UserAvatar onClick={() => setIsOpen(true)} ref={menuRef}>
        {email?.slice(0, 2).toUpperCase()}
      </UserAvatar>

      {isOpen && (
        <ProfileMenu>
          <div>Profile</div>
          <div>Settings</div>
          <div>Logout</div>
        </ProfileMenu>
      )}
    </HeaderContainer>
  );
}
