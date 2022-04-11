function Main(props) {
    return (
        <>
            <div style={{ height: "100vh" }} className="center">
                <div className="join-session">
                    <div className="session-options">
                        <input type="text" className="text-session" placeholder="Enter session name" />
                        <button className="btn-session" onClick={() => { props.setPage("Session"); }}>Join Session</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Main;
