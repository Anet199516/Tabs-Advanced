import React from 'react';
import Tabs from './Tabs';

const App = () => {
  return (
    <div className="tabs">
      <Tabs>
        {childprops => (
          <div className="tab-list">
            <Tabs.Tab title={1} {...childprops}>
              React
            </Tabs.Tab>

            <Tabs.Tab title={2} {...childprops}>
              Angular
            </Tabs.Tab>

            <Tabs.Tab title={3} {...childprops}>
              Vue
            </Tabs.Tab>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default App;
