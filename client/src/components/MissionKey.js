import React from 'react';

const MissionKey = (props)=>{
    return (
        <div className="my-3">
            <div style={{display: "inline-block", marginRight: "10px"}}>
                <span className="px-3 mr-2 bg-success" /> = Success
            </div>
            <div style={{display: "inline-block", marginLeft: "10px"}}>
                <span className="px-3 mr-2 bg-danger" /> = Fail
            </div>
        </div>
    )
}

export default MissionKey;