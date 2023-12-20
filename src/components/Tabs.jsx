import React, { useState } from 'react';

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === activeTab ? 'tab-header active' : 'tab-header'}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {items[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;