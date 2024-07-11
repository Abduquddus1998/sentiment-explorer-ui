import { MenuContainer, MenuHeader, MenuItemList } from "./MainMenuStyle";
import { CreateAnalysis } from "./Icons";
import { HistoryItem, useHistory } from "../hooks/analysis";

export default function MainMenu() {
  const { isPending, isError, data } = useHistory();

  return (
    <MenuContainer>
      <MenuHeader>
        <div>Create new tab</div>
        <CreateAnalysis />
      </MenuHeader>
      {!isError && !isPending && data && (
        <MenuItemList>
          {data?.data.map((historyItem: HistoryItem) => (
            <li key={historyItem.corpus_id}>
              <div>{historyItem.corpus}</div>
            </li>
          ))}
        </MenuItemList>
      )}
    </MenuContainer>
  );
}
