function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <p>Loading...</p> : <Component {...(rest as T)} />;
  };
}

type UserProps = {
  name: string;
};

const UserComponent: React.FC<UserProps> = ({ name }) => {
  return <p>Hello, {name} !</p>;
};

const UserWhithLoading = withLoading(UserComponent);
export const ParentComponent = () => {
  return (
    <div>
      <UserWhithLoading isLoading={true} name="Teffcode" />
      <UserWhithLoading isLoading={false} name="Teffcode" />
    </div>
  );
};
