import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../css/style.css'

function CardList(props) {
    return (
        <>
        { props.Companies.card.map(item => (
            (!item.logo) ?
            <div class='containerImage'>
                <img src='/img/profil.jpg' className='imageGrid' alt='CardImage' />
                <div class='overlay'>
                <Container>
                    <Row>
                        <Link to={`/companyprofile/${item.id}`} style={{ color: 'white', fontWeight: 'bolder'}}>{item.name}</Link>
                    </Row>
                    <Row style={{ fontSize: '11px' }}>
                        <Col style={{ padding: '0px'}}>{item.description}</Col>
                    </Row>
                    <Row style={{ fontSize: '11px' }}>
                        <Col style={{ padding: '0px'}}>
                            <FontAwesomeIcon icon={faEnvelope} /> {item.email}
                        </Col>
                    </Row>
                    <Row style={{ fontSize: '11px'}}>
                        <Col style={{ padding: '0px'}}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location}
                        </Col>
                    </Row>
                </Container>
                </div>
            </div> :
            <div class='containerImage'>
            <img src={process.env.REACT_APP_BASE_URL+`uploads/companies/${item.logo}`} className='imageGrid' alt='CardImage' />
            <div class="overlay">
                <Container>
                    <Row>
                        <Link to={`/companyprofile/${item.id}`} style={{ color: 'white', fontWeight: 'bolder'}}>{item.name}</Link>
                    </Row>
                    <Row style={{ fontSize: '11px' }}>
                        <Col style={{ padding: '0px'}}>{item.description}</Col>
                    </Row>
                    <Row style={{ fontSize: '11px' }}>
                        <Col style={{ padding: '0px'}}>
                            <FontAwesomeIcon icon={faEnvelope} /> {item.email}
                        </Col>
                    </Row>
                    <Row style={{ fontSize: '11px'}}>
                        <Col style={{ padding: '0px'}}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div> ))}
        </>
    )
}

const mapStateToProps = state => ({
    Companies: state.Companies
  })

export default connect(mapStateToProps)(CardList)