import React, { useState } from "react";


const successMetrics = () => {

    return (
        <div>
            <p className="slogan-txt">Success Metrics Reported By Customers</p>

                       <div className="feedback">
                <div className="success-box">
                    <div>
                    <p className="review"><span className="larger">5 min</span><br /><br />
                            Onboarding time for new developers</p>
                    </div>
                </div>
                <div className="success-box">

                    <div>
                    <p className="review"><span className="larger">40%</span><br /><br />
                            Fewer issues across dev life cycle</p>
                    </div>
                </div>
                <div className="success-box">

                    <div>
                    <p className="review"><span className="larger">5h</span><br /><br />
                            Productivity gain per week per develope</p>
                    </div>
                </div>
                <div className="success-box">

                    <div>
                    <p className="review"><span className="larger">45%</span><br /><br /> Improvement in developer happiness</p>

                    </div>
                </div>
            </div>
        </div>



    )
}
export default successMetrics;