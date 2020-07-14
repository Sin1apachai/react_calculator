import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Row, Col, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

class Calculator extends Component {
    render() {
        const { values } = this.props

        return (
            <Container>
                <Row>
                    <Col>{values.value}</Col>
                </Row>
                <Row>
                    <ButtonToolbar>
                        <ButtonGroup className="mr-2" >
                            <Button variant="warning" size="lg" onClick={this.props.clear}>C</Button>
                            <Button variant="info" size="lg" onClick={this.props.divide}>/</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
                <Row>
                    <ButtonToolbar>
                        <ButtonGroup className="mr-2" >
                            <Button variant="dark" size="lg" onClick={this.props.value_7}>7</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_8}>8</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_9}>9</Button>
                            <Button variant="info" size="lg" onClick={this.props.multiple}>*</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
                <Row>
                    <ButtonToolbar>
                        <ButtonGroup className="mr-2" >
                            <Button variant="dark" size="lg" onClick={this.props.value_4}>4</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_5}>5</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_6}>6</Button>
                            <Button variant="info" size="lg" onClick={this.props.subtract}>-</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
                <Row>
                    <ButtonToolbar>
                        <ButtonGroup className="mr-2" >
                            <Button variant="dark" size="lg" onClick={this.props.value_1}>1</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_2}>2</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_3}>3</Button>
                            <Button variant="info" size="lg" onClick={this.props.add}>+</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
                <Row>
                    <ButtonToolbar>
                        <ButtonGroup className="mr-2" >
                            <Button variant="danger" size="lg" onClick={this.props.delete}>Del</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_0}>0</Button>
                            <Button variant="dark" size="lg" onClick={this.props.value_dot}>.</Button>
                            <Button variant="success" size="lg" onClick={this.props.equal}>=</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        values: state.values,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({ type: 'Add' })
        },
        subtract: () => {
            dispatch({ type: 'Subtract' })
        },
        divide: () => {
            dispatch({ type: 'Divide' })
        },
        equal: () => {
            dispatch({ type: 'Equal' })
        },
        multiple: () => {
            dispatch({ type: 'Multiple' })
        },
        delete: () => {
            dispatch({ type: 'Del' })
        },
        clear: () => {
            dispatch({ type: 'Clear' })
        },
        value_0: () => {
            dispatch({ type: "0" })
        },
        value_1: () => {
            dispatch({ type: "1" })
        },
        value_2: () => {
            dispatch({ type: "2" })
        },
        value_3: () => {
            dispatch({ type: "3" })
        },
        value_4: () => {
            dispatch({ type: "4" })
        },
        value_5: () => {
            dispatch({ type: "5" })
        },
        value_6: () => {
            dispatch({ type: "6" })
        },
        value_7: () => {
            dispatch({ type: "7" })
        },
        value_8: () => {
            dispatch({ type: "8" })
        },
        value_9: () => {
            dispatch({ type: "9" })
        },
        value_dot: () => {
            dispatch({ type: "." })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)