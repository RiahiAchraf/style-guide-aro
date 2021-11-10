import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToggleSwitch, TextInput } from 'style-guide-aro';
import 'style-guide-aro/dist/tailwind.css';

const App = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <div>
      <ToggleSwitch
        enabled={isToggled}
        onChange={(v: boolean) => setIsToggled(v)}
      />
      <TextInput name="email" label="label" error optional/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
