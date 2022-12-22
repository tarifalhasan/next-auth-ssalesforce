import React from "react";

const accessToken = ({ session }) => {
    if (session) {
        return(
             <div>
      <div>
        <h1>Session</h1>
        <h2>
          <pre style={{ textAlign: "center" }}>
            {" "}
            {JSON.stringify(session.user)}{" "}
          </pre>
        </h2>
      </div>
      <div>
        <h1>JSON Web Token</h1>
        <h2>
          <pre style={{ textAlign: "center" }}> {JSON.stringify(session)} </pre>
        </h2>
      </div>
    </div>
        )
    } else{
        return( <h1>Please Signin</h1>)
    }
};

export default accessToken;
