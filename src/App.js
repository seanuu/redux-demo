import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {counterActionCreator, decrementAsync} from './store/counter'

const App = (props) => (
    <React.Fragment>
        <div>{props.counter.count}</div>
        <button onClick={() => props.increment(1)}>increment</button>
        <button onClick={() => props.decrement(1)}>decrement</button>
        <button onClick={() => props.incrementAsync(1)}>incrementAsync</button>
        <button onClick={() => props.decrementAsync(1)}>decrementAsync</button>
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({...counterActionCreator, decrementAsync}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
