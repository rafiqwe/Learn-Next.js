const ServerData = async (props) => {
  const user = await props.params.username;
  return <div> User Name: {user}</div>;
};

export default ServerData;
