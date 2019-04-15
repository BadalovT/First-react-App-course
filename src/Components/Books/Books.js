import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Books.css";
import axios from "axios";
import Pagination from '../Pagination/Pagination';
// require("bootstrap/less/bootstrap.less");



export default class Books extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = {
          posts:[],
          pageOfItems: [] 
        }
        this.onChangePage = this.onChangePage.bind(this);
      }

      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos',this.state)
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
          <Col key={post.id} md="4">
            <div   className="block books-first">
              <h3 key={post.id}>{post.title}</h3>
              <img src={post.url}/>
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
      <>
      
      <Container>
        <div className="h1">
            <h1>Kitablar</h1>
        </div>
        <Row>
          {postList}
          
          <Pagination items={posts} onChangePage={this.onChangePage} />
        </Row>
      </Container>
      </>
    );
  }
}