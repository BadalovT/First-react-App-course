import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Courses.css";
export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        xarici:{
          Heading:"Xarici dil kursları",
          Courses:['İngilis Dili Kursları','Rus Dili Kursları','Alman dili kursları','İspan dili kursları','Gürcü dili kursları'],
        },
        dizayn:{
          Heading:"Dizayn kursları",
          Courses:['İngilis Dili Kursları','Rus Dili Kursları','Alman dili kursları','İspan dili kursları','Gürcü dili kursları'],
        }

        }
      }

  render() {
    return (
      <Container>
        <div className="h1">
            <h1>Kurslar ve Xidmetler</h1>
        </div>
        <Row>
        <Col>   
        <div className="block">
        
          <h3>{this.state.xarici.Heading} </h3>
            <ul>
              {this.state.xarici.Courses.map(item =>(
                      <li>
                        {item}
                      </li>
              ))}
            </ul> 
          </div>  
         </Col>
         <Col>   
         <div className="block">
            <h3>{this.state.dizayn.Heading} </h3>
            {this.state.dizayn.Courses.map(item =>(
            <ul>
                  <li>
                    {item}
                  </li>
            </ul>
            ))}
          </div>  

         </Col>
         <Col>  
          <div className="block">

              <h3>{this.state.xarici.Heading} </h3>
              {this.state.xarici.Courses.map(item =>(
              <ul>
                    <li>
                      {item}
                    </li>
              </ul>
              ))}
          </div>
         </Col>
         <Col>   
         <div className="block">
            <h3>{this.state.xarici.Heading} </h3>
            {this.state.xarici.Courses.map(item =>(
            <ul>
                  <li>
                    {item}
                  </li>
            </ul>
            ))}
           </div>
         </Col>
          
        </Row>
      </Container>
    );
  }
}