import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Courses.css";
import axios from "axios";
import Pagination from '../Pagination/Pagination';
// require("bootstrap/less/bootstrap.less");



export default class Courses extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = {
          posts:[],
          pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
      }

      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res => {
          this.setState({
            posts:res.data

          })
        })
        .catch(e=>{
          console.error()
        })
        
      }


      onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });

    }

  render() {
    const {posts}= this.state;
    const {pageOfItems}= this.state;
    const postList=pageOfItems.length ? (
      pageOfItems.map(post=>{
        return(
          <Col  md="4">
            <div  className="block">
              <h3 key={post.id}>{post.title}</h3>
              <ul>
                      <li >
                       {post.body}
                      </li>
            </ul> 
            </div>
          </Col>

        )

      })
    ) :(
        <div className="block">
        No posts yet
        </div>
    );
    return (
      <Container>
        <div className="h1">
            <h1>Kurslar ve Xidmetler</h1>
        </div>
        <Row>
          {postList}
          
          <Pagination items={posts} onChangePage={this.onChangePage} />
        </Row>
      </Container>
    );
  }
}