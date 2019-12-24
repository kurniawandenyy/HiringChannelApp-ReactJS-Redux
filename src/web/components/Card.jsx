import React, { Component } from 'react'
import Header from '../Header'
import CardList from './CardList'
import { Button,Row, ButtonToolbar, DropdownButton, Dropdown, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchEngineers, getEngineers } from '../redux/actions/Engineers'

class Card extends Component {

    componentDidMount(){
        // do something after component mounted
        this.fetchEngineers(process.env.REACT_APP_BASE_URL+'api/v1/engineers?page=1')
        { (localStorage.getItem('id')) && this.getName(process.env.REACT_APP_BASE_URL+'api/v1/engineers/'+localStorage.getItem('id')) }
      }

      fetchEngineers = (url) => {
        this.props.fetch(url)
      }

      getName = (url) => {
        this.props.get(url)
      }

    render(){
      // console.log(this.props.Engineers.user)
        return (
          <>
          { (!localStorage.getItem('token')) ? this.props.history.push('/login') :
          <Header searchBar='true' user={this.props.Engineers.user}/> }
          
          <Container className='justify-content-center mt-3' style={{ paddingBottom:'20px'}}>
          <Row>
            <ButtonToolbar>
            {['Primary'].map(
                variant => (
                <DropdownButton
                    title='Per Page'
                    variant={variant.toLowerCase()}
                    id={`dropdown-variants-${variant}`}
                    key={variant}>
                    <Dropdown.Item eventKey="1" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&limit=5|&limit=10|&limit=15|&limit=20/gi,''))+'&limit=5')}> 5</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&limit=5|&limit=10|&limit=15|&limit=20/gi,''))+'&limit=10')}> 10</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&limit=5|&limit=10|&limit=15|&limit=20/gi,''))+'&limit=15')}> 15</Dropdown.Item>
                    <Dropdown.Item eventKey="4" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&limit=5|&limit=10|&limit=15|&limit=20/gi,''))+'&limit=20')}> 20</Dropdown.Item>
                </DropdownButton>
                ),
            )}
            </ButtonToolbar>&nbsp;
            <ButtonToolbar>
            {['Primary'].map(
                variant => (
                <DropdownButton
                    title='Sort By'
                    variant={variant.toLowerCase()}
                    id={`dropdown-variants-${variant}`}
                    key={variant}>
                    <Dropdown.Item eventKey="1" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&sort=name&order=asc|&sort=name&order=desc|&sort=date_updated&order=asc|&sort=date_updated&order=desc/gi,''))+'&sort=name&order=asc')}>Name (A-Z)</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&sort=name&order=asc|&sort=name&order=desc|&sort=date_updated&order=asc|&sort=date_updated&order=desc/gi,''))+'&sort=name&order=desc')}>Name (Z-A)</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&sort=name&order=asc|&sort=name&order=desc|&sort=date_updated&order=asc|&sort=date_updated&order=desc/gi,''))+'&sort=date_updated&order=asc')}>Date (Asc)</Dropdown.Item>
                    <Dropdown.Item eventKey="4" onClick={() => this.fetchEngineers((this.props.Engineers.base_url.replace(/&sort=name&order=asc|&sort=name&order=desc|&sort=date_updated&order=asc|&sort=date_updated&order=desc/gi,''))+'&sort=date_updated&order=desc')}>Date (Desc)</Dropdown.Item>
                </DropdownButton>
                ),
            )}
            </ButtonToolbar></Row>
        { // conditional rendering show loading and error
          this.props.Engineers.isLoading ?
          <Row className="justify-content-center">
          <p>Loading..</p></Row> : 
          this.props.Engineers.isError ? (
            <Row className="justify-content-center">
              <Button variant="outline-primary" onClick={() => this.fetchEngineers(process.env.REACT_APP_BASE_URL+'api/v1/engineers?page=1')}> Try Again</Button>
            </Row>
          ) : (this.props.Engineers.dataTotal<=0) ? <Row className="justify-content-center"><p>No Data Found!</p></Row> :
          <CardList list={this.props.Engineers.card}/>
            }

            <Row className="justify-content-center" >
            { // conditional rendering when there is no previous
              (!this.props.Engineers.previous) ? <Button variant="outline-primary" disabled> Previous </Button> : <Button variant="outline-primary" onClick={() => this.fetchEngineers(this.props.Engineers.previous)}> Previous </Button>
            }
            &nbsp;<Button variant="outline-primary" disabled> {this.props.Engineers.page} </Button>&nbsp;
            {(!this.props.Engineers.next) ? <Button variant="outline-primary" disabled> Next </Button> : <Button variant="outline-primary" onClick={() => this.fetchEngineers(this.props.Engineers.next)}> Next </Button>}</Row>
            </Container>
            </>
        );
    }
}

const mapStateToProps = state => ({
  Engineers: state.Engineers
})

const mapDispatchToProps = dispatch => ({
  fetch: url => dispatch(fetchEngineers(url)),
  get: url => dispatch(getEngineers(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)