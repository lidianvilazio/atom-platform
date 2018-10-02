import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import {  Row, Col } from 'reactstrap';
import { Card, CardBody, CardText } from 'reactstrap';

class Lesson extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div>
      <Card>
        <CardBody style={{color: '#fff', background: 'white', borderBottom: 'none'}}>
        <Row>
          <Col md="1" sm="6" xs="6">
            <Avatar alt="subject Photo" src={this.props.lesson.subjectPhotoUrl} className='avatar'/>
          </Col>
          <Col md="6" sm="6" xs="6">
            <h6 className='text'>{this.props.lesson.title}</h6>
          </Col>
          <Col md="1" sm="6" xs="6">
            <Avatar alt="instructor Photo" src={this.props.lesson.instructorPhotoUrl} className='avatar_instructor'/>
          </Col>
          <Col md="2" sm="6" xs="6">
            <p className='text'>{this.props.lesson.instructorName}</p>
          </Col>
          <Col md='2' sm='2'>
            <p className='text'><Moment format="h.ms A">{this.props.lesson.time}</Moment></p>
          </Col>
        </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col md={{ size: '6', offset: 1}}>
              <CardText className='f text'>{this.props.lesson.description}</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
    )
  }
}

export default Lesson

// <Row>
// <Col>
// <Card shadow={0}>
// <Row>
// <Col md="12" sm="12" xs="12">
// <CardTitle style={{color: '#fff', background: 'white'}}>
// <Col md="1" sm="6" xs="12">
// <Avatar alt="subject Photo" src={this.props.lesson.subjectPhotoUrl} className='avatar'/>
// </Col>
// <Col md="6" sm="6" xs="12">
// <p style={{color: 'black', fontSize: '10px'}}>{this.props.lesson.title}</p>
// </Col>
// <Col md="1" sm="6" xs="12">
// <Avatar alt="instructor Photo" src={this.props.lesson.instructorPhotoUrl} className='avatar_instructor'/>
// </Col>
// <Col md="6" sm="6" xs="12">
// <p style={{color: 'black',  fontSize: '10px'}}>{this.props.lesson.instructorName}</p>
// </Col>
// <Col>
// <p style={{color: 'black',  fontSize: '10px'}}><Moment format="h.ms A">{this.props.lesson.time}</Moment></p>
// </Col>
// </CardTitle>
// </Col>
// </Row>
// <Row>
// <Col md={{ size: 6, offset: 1}} xs="12">
// <CardText>
// {this.props.lesson.description}
// </CardText>
// </Col>
// </Row>
// </Card>
// </Col>
// </Row>
