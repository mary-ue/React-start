function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: '550px',
    padding: '20px',
    margin: '20px auto'
  };
  return (
    <div style={style}>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Wrapper;
