import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  MenuContainer,
  MenuHeader,
  MenuItemList,
  MenuItem,
} from "./MainMenuStyle";
import { CreateAnalysis } from "./Icons";

import { HistoryItem, useHistory } from "../hooks/analysis";

export default function MainMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string | undefined }>();

  const { isPending, isError, data } = useHistory();

  const onNavigate = (history: HistoryItem) => {
    navigate(`/main/analysis/${history.corpus_id}`);
  };

  const onNavigateMain = () => {
    if (location.pathname === "/main") {
      window.location.href = "/main";
      return;
    }

    navigate(`/main`);
  };

  return (
    <MenuContainer>
      <MenuHeader onClick={onNavigateMain}>
        <div>Create new tab</div>
        <CreateAnalysis />
      </MenuHeader>
      {!isError && !isPending && data && (
        <MenuItemList>
          {[...data?.data].reverse().map((historyItem: HistoryItem) => (
            <MenuItem
              key={historyItem.corpus_id}
              onClick={() => onNavigate(historyItem)}
              isActive={historyItem.corpus_id === id}
            >
              <div>{historyItem.corpus}</div>
            </MenuItem>
          ))}
        </MenuItemList>
      )}
    </MenuContainer>
  );
}
