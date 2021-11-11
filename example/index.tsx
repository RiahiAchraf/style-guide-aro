import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToggleSwitch, TextInput, Button } from 'style-guide-aro';
import 'style-guide-aro/dist/tailwind.css';

const App = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const [value, setValue] = React.useState("AA")
  return (
    <div>
      <ToggleSwitch
        enabled={isToggled}
        onChange={(v: boolean) => setIsToggled(v)}
      />
      <TextInput value={value} name="email" label="label" error optional/>
      <Button  />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
