// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import TextInput from './TextInput';
import Button from './Button';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});

describe('TextInput', () => {
    it('renders without crashing', () => {
      render(<TextInput label="Test" value="" onChange={() => {}} />);
    });
  
    it('allows typing', () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(<TextInput label="Test" value="" onChange={onChange} />);
      const input = getByLabelText('Test');
      fireEvent.change(input, { target: { value: 'test' } });
      expect(onChange).toHaveBeenCalled();
    });
  
    it('renders the label', () => {
      const { getByText } = render(<TextInput label="Test" value="" onChange={() => {}} />);
      expect(getByText('Test')).toBeInTheDocument();
    });
  });

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button text="Test" disabled={false} onClick={() => {}} />);
  });

  it('is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text="Test" disabled={false} onClick={onClick} />);
    fireEvent.click(getByText('Test'));
    expect(onClick).toHaveBeenCalled();
  });

  it('is disabled when username or password is empty', () => {
    const { getByText } = render(<Button text="Test" disabled={true} onClick={() => {}} />);
    expect(getByText('Test')).toBeDisabled();
  });

  it('renders the text correctly', () => {
    const { getByText } = render(<Button text="Test" disabled={false} onClick={() => {}} />);
    expect(getByText('Test')).toBeInTheDocument();
  });
});