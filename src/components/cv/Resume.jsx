import React from 'react'
import NavbarExample from '../navbar/NavbarExample'
import './resume.css'
import { Table } from 'react-bootstrap'
const Resume = () => {
  return (


      <div className="parent">
        <div className="div1">
            <NavbarExample  />
        </div>
        <div className="div2">
            <h1>
            </h1>
        </div>
        <div className="div3">
            <h1>resume
            I have been in the IT sector for more than 3 years. I attended Cydeo Coding School and took part
in two major projects as a non-paid Automation Tester intern.
I worked as a technical support team member at Techpro Education Coding Course for the last 10
months. Additionally, I am member of volunteer team in Code Your Future (CYF) which is UK
based non-profit organization.
I am well experienced to automate end to end tests using tools and platforms such as Java,
Selenium Suite, SQL, JDBC, Postman, and Rest-Assured Library. I have hands-on knowledge of
Cypress testing framework.
Additionally, I have good amount of knowledge on ReactJS library.
I consider myself a positive person, I have good analytical and management skills and the ability
to work independently with minimal supervision.
            </h1>
        </div>
        <div className="div4"> 
        <h1>skills
        <Table striped>
        <thead>
          <tr>
            <th>Testing Tools</th>
            <th>Frameworks</th>
            <th>Languages</th>
            <th>Front-End</th>
            <th>Back-End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
        </h1>
        </div>
        <div className="div5"> 
        <h1>experiences
        loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
        </h1>
        </div>
        <div className="div6">
        <h1>education
        loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
            loren ipsum
        </h1>
         </div>
      </div>
    
  )
}

export default Resume