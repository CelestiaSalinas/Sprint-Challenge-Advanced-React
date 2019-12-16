import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import '@testing-library/jest-dom/extend-expect'
import * as tester from "@testing-library/react";

test('renders without crashing', () => {
  render(<App />);
});

test("Header button renders without failing", () => {
  const navRender = tester.render(<Header />);
  console.log(navRender.debug());
});

