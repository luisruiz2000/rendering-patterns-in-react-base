import { ReactNode } from "react";

interface TabPops {
  label: string,
  children: ReactNode
}

const Tab: React.FC<TabPops> = ({label, children}) => {


  return (
    <>
    <em>{label}</em>
    <span>{children}</span>
    </>
  );
};

export default Tab;
