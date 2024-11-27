type ChildtComponentProps = {
  render:  (name: string) => JSX.Element
}

export const ChildtComponent: React.FC<ChildtComponentProps> = ({render}) => {
  const name = 'Luis'
  return (
    <div>
      {render(name)}
    </div>
  );
};

export const ParentComponent = () => {
  return (
    <>
      <ChildtComponent render={(name) => <p>Hello, {name}!</p>} />
    </>
  );
};
