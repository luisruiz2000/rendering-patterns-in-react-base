import { useState } from "react";

type ToggleProps = {
  isToggled?: boolean;
  onToggled?: (value: boolean) => void
}

export const Toggled: React.FC<ToggleProps> = ({isToggled = false, onToggled}) => {
  const [internalToggle, setInternalToggle] = useState(isToggled)
  const toggle = () => {
    const newToggle = !internalToggle
    setInternalToggle(newToggle)

    if (onToggled) onToggled(newToggle)
  }
  return (
    <button onClick={toggle}>
      {internalToggle ? 'ON' : 'OFF'}
    </button>
  );
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <div>
      <p>Toggle is {toggleState ? 'ON' : 'OFF'}</p>
      <Toggled isToggled={toggleState} onToggled={setToggleState} />
    </div>
  );
};
