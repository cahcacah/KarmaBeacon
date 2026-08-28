// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KarmaBeacon title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KarmaBeacon/i);
    expect(titleElement).toBeInTheDocument();
});
