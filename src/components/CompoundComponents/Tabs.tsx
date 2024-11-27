import React, { Children, ReactElement, ReactNode, useState } from "react";
import classes from "./CompoundComponents.module.css";
interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElement = Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElement.map((item, index) => (
          <li
            key={index}
            className={`${index === activeIndex ? classes.TabActive : ""}`}
            onClick={() => handleTabClick(index)}>
            {item.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TabContent}>{tabElement[activeIndex]}</p>
    </div>
  );
};

export default Tabs;
