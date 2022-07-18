import React from 'react';
import "./Program.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"
const Program = () => {
  return (
    <div className='programs' id='programs'>
    {/* programs header */}
      <div className="program-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>to Shape You</span>
      </div>
      <div className='program-catagories'>
        {programsData.map((program,i)=>
        (
            <div className='catagory' key={i}>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join-now'><span>Join Now</span><img src={RightArrow} alt="right-arrow"/></div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Program;