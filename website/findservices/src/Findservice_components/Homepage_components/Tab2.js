import React from 'react';

const Tab2 = () => {
    return (
        <div className='cardcontainer'>
            <div className="card">
                <div className="card__side1b">
                <a href="./freelance/freelance.html" className='link'>
                        <h2 className='find'>find</h2>
                        <h2 className='txt1'>Companies <br/> & <br/> Organizations</h2>
                    </a>
                </div>
                <div className="card__side2b">
                    <a href="./organization/org.html" id="txt1" className='link'>
                        <p class="back">Find real registered and certified institutions</p>
                        <br/>
                        <br/>
                        <a href="./organization/org.html" className="findbtn">findServices</a>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Tab2;