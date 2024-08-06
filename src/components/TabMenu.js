import React, { useState } from 'react';
import { styled, css } from 'styled-components';

const TabMenuContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
  color: #000;
  height:100%;
`;

const TabList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Tab = styled.div`
  cursor: pointer;
  flex: 1 1 100%;
  padding: 5px;
  text-align: center;
  border: 0.5px solid gray;

  ${({ isSelected }) => isSelected && css`
    background-color: #000;
    color: #fff;
    border: none;
  `}
`;

const TabContent = styled.div`
  padding: 20px 0px;
`;

export const TabMenu = ({ tabs }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<TabMenuContainer>
			<TabList>
				{tabs.map((tab, index) => (
					<Tab key={index} isSelected={selectedTab === index} onClick={() => setSelectedTab(index)}>
						{tab.label}
					</Tab>
				))}
			</TabList>
			<TabContent>{tabs[selectedTab].content}</TabContent>
		</TabMenuContainer>

	)
}