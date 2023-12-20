import React from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const tabItems = [
    {
      label: 'Tab 1',
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for Tab 2</div>,
    },
  ];

  return (
    <div>
      <Tabs items={tabItems} />
    </div>
  );
};

export default App;