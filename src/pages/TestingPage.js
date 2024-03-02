import React from 'react';
import './../assets/styling.css';

function TestingPage() {
    return (
        <div>
            <div >
                <div className="content">
                    <div className="flexbox">

                        <div className="col">
                            <img style={{width: "100%", height: "100%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/GLaDOS.png'} alt="glados" />
                        </div>

                        <div className="col">
                            <p className="go-big">
                                <span className="go-space-white">
                                "You must really, really love to test." - GLADoS</span>
                            </p>
                            <p>She's not wrong - I really do</p>
                        </div>
                    </div>
                </div>
                
                <div className="lcars-bar">
                    <div className="lcars-bar-inner"></div>
                </div>

            </div>
        </div>  
    )
}

export default TestingPage;