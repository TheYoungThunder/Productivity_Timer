function Main(props) {
  return (
    <>
      <button
        onClick={() => {
          props.setPage("Session");
        }}
      >
        Join Session
      </button>
    </>
  );
}

export default Main;
