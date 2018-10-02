import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import {  Row, Col } from 'reactstrap';
import { Card, CardBody, CardText } from 'reactstrap';

const Lesson = (props) => {

  const { lesson } = props;

    return(   // rentuning the data
      <div>
        <Card>
          <CardBody>
            <Row>
              <Col md="1" sm="6" xs="12">
                <Avatar alt="subject Photo" src={lesson.subjectPhotoUrl} className='avatar'/>
              </Col>
              <Col md="6" sm="6" xs="12">
                <h6 className='text title'>{lesson.title}</h6>
              </Col>
              <Col md="1" sm="6" xs="12">
                <Avatar alt="instructor Photo" src={lesson.instructorPhotoUrl} className='avatar_instructor'/>
              </Col>
              <Col md="2" sm="6" xs="12">
                <p className='text'>{lesson.instructorName}</p>
              </Col>
              <Col md='2' sm='12'>
                <Row>
                  <p className='text moment'><Moment format="h:ms A">{lesson.time}</Moment></p>
                  <p>-</p>
                  <p className='text moment'><Moment add={{ hours: 1 }} format="h:ms A">{lesson.time}</Moment> EDT</p>
                </Row>
              </Col>
              <Row>
                <Col md={{ size: '6', offset: 1}} sm='12'>
                  <CardText className='f text'>{lesson.description}</CardText>
                </Col>
              </Row>
            </Row>
          </CardBody>
       </Card>
     </div>

    )
}

export default Lesson
