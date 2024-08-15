import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
    return (
        <div id="mywork" className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return<a href={work.github} target='_blank'><img key={index} src={work.w_img} /></a>
                })}
            </div>
            <div className="mywork-showmore">
                <a href='https://github.com/Prince7375'><p>Show More</p></a>
                <a href='https://github.com/Prince7375'><img src={arrow_icon} alt="" /></a>
                
            </div>
        </div>
    )
}

export default MyWork