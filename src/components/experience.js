import React from 'react'
import Aos from 'aos'

const Experience = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const WORK_EXP = [
        {
          title: "Tutor",
          company: "Artificial Intelligence Center Indonesia",
          period: "October 2020",
          desc: "Provide artificial intelligence training for Vocasional High School teacher"
        },
    
        {
          title: "Bussiness Development Intern",
          company: "Shopee Indonesia",
          period: "October 2019 - January 2020",
          desc: "Assist in the development of business strategies by using data to identify high potential sellers"
        },
    
        {
          title: "Laboratory Assistant",
          company: "University of Indonesia",
          period: "September 2017 - January 2019",
          desc: "Handle student during the term. Scoring their report, pre-test, and practical skill. Helping the respective students to complete their goals in each module"
        },
    ]

    return(
        <div style={{width: "65vw", height: "100vh"}} data-aos="fade-up" id="experiences">
            <h2 style={{color: "#778da9"}}>Experiences</h2>
            <p style={{color: "#e5e5e5", fontSize: 20}}>
                Here are few works that I did before learning javascript:
            </p>
            {
                WORK_EXP.map(item => {
                    return(
                        <div style={{color: "#e5e5e5"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", maxWidth: "fit-content"}}>
                                <h4>{item.title}</h4>
                                <i className="fal fa-window-minimize" style={{marginLeft: 10}}></i>
                                <p style={{fontSize: 20, marginLeft: 10}}>{item.company}</p>
                            </div>
                            <p style={{marginTop: -12}}>{item.period}</p>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <i className="fas fa-circle" style={{fontSize: 10, marginTop: 8, marginLeft: 20}}></i>
                                <p style={{marginLeft: 10}}>{item.desc}</p>
                            </div>
                            <div style={{borderTop: "2px dashed #778da9", height: "1px", marginBottom: 20}}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Experience