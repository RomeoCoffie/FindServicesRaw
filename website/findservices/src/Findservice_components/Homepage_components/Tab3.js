import React from 'react';

const Tab3 = () => {
    return (
        <div className='cardcontainer'>
            <div className="card">
                <div className="card__side1c">
                    <a href="./request/req.html" className='link'>
                        <h2 className='find'>find</h2>
                        <h2 className='txt1'>Errands <br/> & <br/> Requests</h2>
                    </a>
                </div>
                <div className="card__side2c">
                    <a href="./request/req.html" className='link'>
                        <p className="back">Find general requests for help from general public.</p>
                        <br/>
                        <br/>
                        <a href="./request/req.html" className="findbtn">findServices</a>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Tab3;