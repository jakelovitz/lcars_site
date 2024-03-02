import React from 'react';
import './../assets/styling.css';

function TestingPage() {
    return (
        <div>
            <div >
                <div class="content">
                    <div class="flexbox">

                        <div class="col">
                            <img style={{width: "100%", height: "100%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/GLaDOS.png'} alt="glados" />
                        </div>

                        <div class="col">
                            <p class="go-big">
                                <span class="go-space-white">
                                "You must really, really love to test." - GLADoS</span>
                            </p>
                            <p>She's not wrong - I really do</p>
                        </div>
                    </div>
                </div>
                
                <div class="lcars-bar">
                    <div class="lcars-bar-inner"></div>
                </div>

            </div>
        </div>  
    )
}

export default TestingPage;