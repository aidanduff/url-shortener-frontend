import React from 'react'

const About = () => {
    return ( <div className="container text-center"><h4>Skweezit v1.0.0</h4><br></br>

        <h4>As this is a demo project which utilizeses a free hosting service, shortened links are not as short as other link shortening services. This is due to the herokuapp prefix. </h4><br></br>
        
        <h4>Other examples of my work are available to demo at <a href="https://www.gitshowcase.com/aidanduff">gitshowcase.com/aidanduff</a></h4><br></br>
        
        <h4>For any queries or complaints, please email me at aidanduff@gmail.com.
        </h4><br></br>
        
        <p className="text-center">
          <a href="https://github.com/aidanduff" className="text-right">
            <i className="fa fa-github fa-github-about  fa-2x" style={{color: "#50381b"}}> </i>
          </a>
          &nbsp;
          <a
            href="https://www.linkedin.com/in/aidan-d-31294a16a/"
            className="text-right"
          >
            <i className="fa fa-linkedin fa-linkedin-about fa-2x" style={{color: "#50381b"}}> </i>
          </a>
        </p>
        </div> );
}
 
export default About;