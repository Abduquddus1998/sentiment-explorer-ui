import { TabsWrapper, Tab } from "./TabStyles";

interface TabsProps {
  currentTab: number;
  onSelectTab: (tab: number) => void;
}

export default function Tabs({ currentTab = 0, onSelectTab }: TabsProps) {
  return (
    <TabsWrapper>
      <Tab isActive={currentTab === 0} onClick={() => onSelectTab(0)}>
        Sentiment
      </Tab>
      <Tab isActive={currentTab === 1} onClick={() => onSelectTab(1)}>
        Named Entities
      </Tab>
      <Tab isActive={currentTab === 2} onClick={() => onSelectTab(2)}>
        Personal Information
      </Tab>
      <Tab isActive={currentTab === 3} onClick={() => onSelectTab(3)}>
        Part of Speech
      </Tab>
      <Tab isActive={currentTab === 4} onClick={() => onSelectTab(4)}>
        Key Phrases
      </Tab>
    </TabsWrapper>
  );
}
