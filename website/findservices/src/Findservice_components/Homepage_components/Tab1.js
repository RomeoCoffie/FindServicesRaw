import React from 'react';

const Tab1 = () => {
    return (
        <div className='cardcontainer'>
            <div className='card'>
                <div className="card__side1a">
                    <a href="./freelance/freelance.html" className='link'>
                        <h2 className='find'>find</h2>
                        <h2 className='txt1'>Freelancers <br/> & <br/> Handymen</h2>
                    </a>
                </div>
                <div className="card__side2a">
                    <a href="./freelance/freelance.html" className='link' id="txt1">
                        <p className="back">Find individuals who have skill you need.</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <a href="./freelance/freelance.html" className="findbtn">findServices</a>
                    </a>
                </div>            
            </div>
        </div>
    )
}

export default Tab1;