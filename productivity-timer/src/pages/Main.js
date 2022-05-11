import { Link, useNavigate } from "react-router-dom";

function Main(props) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh" }} className="center">
        <div className="join-session">
          <div className="session-options">
            <input
              type="text"
              className="text-session"
              placeholder="Enter session name"
            />
            <button
              className="btn-session"
              onClick={() => {
                navigate("/session");
              }}
            >
              Join Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
