
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import welcomeImage from './images/welcome.jpg';

function App() {

    const userName = "Ajin";

    console.log("React app started");

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card text-center p-4 shadow">

                        <h2 style={{
                            color: "blue",
                            fontSize: "28px",
                            fontWeight: "bold"
                        }}>
                            Welcome to React Learning, {userName}
                        </h2>

                        <img
                            src={welcomeImage}
                            className="img-fluid mx-auto mt-3"
                            width="200"
                            alt="Internal"
                        />

                        <img
                            src="https://picsum.photos/400/200"
                            className="img-fluid mx-auto mt-3"
                            alt="External"
                        />

                        <p className="text-muted mt-3">
                            This is your first card with images and styles!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
