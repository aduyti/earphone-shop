import React from 'react';

const Questions = () => {
    return (
        <div style={{ margin: '30px' }}>
            <div>
                <h4>how react works?</h4>
                <p>react uses JSX to write HTML in JS files. react breaks down the UI into multiple components for easer accessibility and reusability. react uses a virtual Dom, which is a snapshot of the browser DOM. when react creates new virtual DOM, it find differences with previous one using the Diffing Algorithm and creates a list of minimum possible changes to the browser DOM, then update only those changes in UI. react uses one-way data binding, which means data can be only send from parent node to child node, not in reversed order.</p>
            </div>
            <div>
                <h4>props vs state</h4>
                <p>state is the data of a component, which influences the output of the component. means, every time the state of an object changes the component rerenders.
                    props are used to pass arguments to the component. props are passed in a form of HTML tag attributes. props are passed into a component, while state is handled inside of a component. state must be updated inside of a component, but props cannot be changed inside of a component. props are static, while state is changeable. props are used to make components dynamic, while state is used to update components according to user interaction.
                </p>
            </div>
            <div>
                <h4>how useState works?</h4>
                <p>useState is a react hooks to set state of a component. it returns an array consist of two elements, a state variable and a function that updates the state. useState takes the initial state as an argument. by useState react to know which component to render upon state change</p>
            </div>
        </div>
    );
};

export default Questions;