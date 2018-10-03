import React from 'react'
import {List} from 'react-mdl'
import Lesson from './Lesson'
import Moment from 'react-moment';
import { Container, Row, Col } from 'reactstrap';


class AllLessons extends React.Component {


  render() {
    let oldDate
    const date = [].concat(this.props.data)   // returning a new array sorting by date and mapping the data
    .sort((a, b) => a.time > b.time)
    .map((item, i) =>{
      if(oldDate !== item.time.substring(0, 10)) {   //  if oldDate is different then the element.time oldDate
                                                     //  receives element.time and returns it's data
        oldDate = item.time.substring(0, 10)
                                                    // passing data to child Lesson 
        return <div key={i}>
                  <Row>
                    <Col md={{ size: '12'}}>
                      <h5 style={{width: '60%', marginBottom: '1%', marginTop: '2%'}}>
                        <Moment format="dddd, MMMM DD,YYYY">{item.time}</Moment>
                      </h5>
                    </Col>
                  </Row>
                  <Lesson lesson={item}/>
                </div>
      } else{                                        // else returns the data
        return <Lesson key={i} lesson={item}/>}     // passing data to child Lesson
      }
    )


    return(
      <Container>
        <List>
          {date}
        </List>
      </Container>
    )
  }
}

export default AllLessons
