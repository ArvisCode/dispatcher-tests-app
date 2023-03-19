import { HeroContainer, HeroBtn } from "../../components/Hero/Hero.styled";
import { Test } from "../../components/test/Test";

import { useState } from "react";

export default function DashboardPage() {
  const tabs = ["Test", "Statistics"];
  const [tab, setTab] = useState("Test");
  return (
    <>
      <HeroContainer>
        {tabs.map((item) => {
          return (
            <HeroBtn
              type="button"
              name={item}
              key={item}
              onClick={(e) => setTab(item)}
            >
              {item}
            </HeroBtn>
          );
        })}
        {tab === "Test" && <Test key="testTab" />}
        {tab === "Statistics" && <h2>UPS</h2>}
      </HeroContainer>
    </>
  );
}
