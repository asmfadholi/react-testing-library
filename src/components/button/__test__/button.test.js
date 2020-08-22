 import React from 'react';
 import ReactDom from 'react-dom'; 
 import Button from '../button.js';

 import { render, cleanup, fireEvent } from '@testing-library/react';
//  import '@testing-library/jest-dom'; 
 import '@testing-library/jest-dom/extend-expect'
 import renderer from 'react-test-renderer'

 afterEach(cleanup)

 it('Renders without crashing', () => {
     const div = document.createElement("div")
     ReactDom.render(<Button></Button>, div)
     ReactDom.unmountComponentAtNode(div)
 })

 it('Renders Button correctly', () => {
    const { getByTestId } = render(<Button label="Click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click me");
 })

 it('Click button correctly', () => {
    const { getByTestId } = render(<Button label="Click me"></Button>)
    const countTextNode = getByTestId("count");
    fireEvent.click(countTextNode)

    expect(countTextNode).toHaveTextContent('Click to increase: 1');
    fireEvent.click(countTextNode)
    expect(countTextNode).toHaveTextContent('Click to increase: 2');
 })

 it('Rerenders Button correctly', () => {
    const { getByTestId, rerender } = render(<Button label="Click me"></Button>)
    rerender(<Button label="Push"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Push");
 })

 it('Matched snapshot 1', () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
 })

 it('Matched snapshot 2', () => {
    const tree = renderer.create(<Button label="Click me"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
 })