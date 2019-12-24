import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function CardList(props) {
    return (
        <>
        <Row className='justify-content-center mt-4'>
        { props.Engineers.card.map(item => (
            (!item.photo) ? 
        <Card style={{ marginBottom:'15px', marginRight: '20px', borderRadius:'8px', width: '15rem', height:'20rem', backgroundImage: `url(/img/profile.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Card.Body style={{ height: '200px'}}>
            </Card.Body>
            <Card.Footer className="text-white bg-dark" style={{ borderRadius:'0px 0px 8px 8px', opacity: '0.8'}}>
                <b style={{ fontSize : '18px'}}><Link to={`/engineerprofile/${item.id}`} style={{ color: 'white' }}> {item.name}</Link></b><br />
                <div style={{ fontSize : '16px', lineHeight:'15px'}}>
                <small> {item.description}</small><br/>
                <small><FontAwesomeIcon icon={faEnvelope} size='md'></FontAwesomeIcon> {item.email}</small><br />
                <small><FontAwesomeIcon icon={faMoneyBillWave} size='md'></FontAwesomeIcon> IDR {item.expected_salary}</small><br /></div>
                    <small>Skill :</small><br />
                <div className='ml-3' style={{ fontSize : '16px', lineHeight:'15px'}}><small> <p>{item.skill}</p></small></div>
            </Card.Footer>
            </Card> :
            <Card style={{ marginBottom:'15px', marginRight: '20px', borderRadius:'8px', width: '15rem', height:'20rem', backgroundImage: `url(`+process.env.REACT_APP_BASE_URL+`uploads/engineers/${item.photo})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Card.Body style={{ height: '200px'}}>
            </Card.Body>
            <Card.Footer className="text-white bg-dark" style={{ borderRadius:'0px 0px 8px 8px', opacity: '0.8'}}>
                <b style={{ fontSize : '18px'}}><Link to={`/engineerprofile/${item.id}`} style={{ color: 'white' }}> {item.name}</Link></b><br />
                <div style={{ fontSize : '16px', lineHeight:'15px'}}>
                <small> {item.description}</small><br/>
                <small><FontAwesomeIcon icon={faEnvelope} size='md'></FontAwesomeIcon> {item.email}</small><br />
                <small><FontAwesomeIcon icon={faMoneyBillWave} size='md'></FontAwesomeIcon> IDR {item.expected_salary}</small><br /></div>
                    <small>Skill :</small><br />
                <div className='ml-3' style={{ fontSize : '16px', lineHeight:'15px'}}><small> <p>{item.skill}</p></small></div>
            </Card.Footer>
            </Card>
        ))}</Row>
        </>
    )
}

const mapStateToProps = state => ({
    Engineers: state.Engineers
  })

export default connect(mapStateToProps)(CardList)