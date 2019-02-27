import React from 'react';
import { Tabs, Tab } from './Tabs';

const App = () => {
  return (
    <div className="tabs-container-first">
      <Tabs>
        <Tab title="Home">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam neque aliquam
        delectus accusamus laborum suscipit dolores
        nesciunt magni, temporibus, quos a, cum ea laboriosam
        similique ab asperiores expedita voluptas quisquam?
        </Tab>
        <Tab title="About">
      Donec nec maximus nibh. Curabitur ac urna nunc.
      Etiam viverra rutrum tellus non lacinia.
      In commodo eros vehicula dolor tristique varius.
      Vivamus augue nisl, pulvinar ut dui vitae, sodales venenatis sapien.
        </Tab>
        <Tab title="Contact">
      Sed ante felis, viverra sed pretium vitae,
      cursus sit amet lectus.
      Morbi pulvinar magna nec elit blandit vestibulum.
      Etiam convallis eu orci quis lacinia.
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
