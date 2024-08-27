import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const [renderTabId, setRenderTabId] = useState('');

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={renderTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <NavLink
                  to={`/tabs/${tab.id}`}
                  onClick={() => setRenderTabId(tab.id)}
                >
                  {tab.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {renderTabId.length
          ? tabs[tabs.findIndex(t => t.id === renderTabId)].content
          : 'Please select a tab'}
      </div>
    </>
  );
};
