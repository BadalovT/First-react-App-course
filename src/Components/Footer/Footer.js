import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram, faGoogle, faGithubAlt, faTelegramPlane} from "@fortawesome/free-brands-svg-icons"
import { Container, Row, Col } from 'reactstrap';
import "./footer.css"



library.add(faFacebookF, faInstagram, faGoogle, faGithubAlt, faTelegramPlane);

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            icons:[
                {
                    "id": 1,
                    "name": faFacebookF,
                    "href":"https://fb.com"
                  },
                  {
                    "id": 2,
                    "name": faInstagram,
                    "href":"https://instagram.com"
                  },
                  {
                    "id": 3,
                    "name": faGoogle,
                    "href":"https://gogle.com"
                  },
                  {
                    "id": 4,
                    "name": faGithubAlt,
                    "href":"https://github.com"
                  },
                  {
                    "id": 5,
                    "name": faTelegramPlane,
                    "href":"https://telegram.com"
                  },
                ],
        }
    }
    
  render() {
      const {icons}=this.state;
      const iconBox=icons.map(icon=>{
        return(
          <Col key={icon.id}>
              <div className="icon">
                  <a key={icon.id} href={icon.href}><FontAwesomeIcon key={icon.id} icon={icon.name}/></a>
              </div>
           </Col>
        )
    })
    return (
  

      <div className="footer">
          <Container>
              <div >
                <Row>
                    {iconBox}
                </Row>
              </div>
          </Container>
      </div>
    )
  }
}

export default Footer
