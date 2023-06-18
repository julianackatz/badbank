
import React from "react";

import NavBar from "./Navbar";
import Deposit from "./components/Deposit";
import { Navbar } from "react-bootstrap";
import Withdraw from "./components/Withdraw";
import Home from "./components/Home";

import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders navbar', async () => {
  const { getByText } = render(<App />);
  expect(getByText('Bad Bank')).toBeInTheDocument();
});

test('renders home component', async () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to your own Bad Bank')).toBeInTheDocument();
});

test('renders create account component', async () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText('Create Account'));
  expect(getByText('Create Account')).toBeInTheDocument();
});

test('renders login component', async () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText('Login'));
  expect(getByText('Login')).toBeInTheDocument();
});

test('renders deposit component', async () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText('Deposit'));
  expect(getByText('Deposit')).toBeInTheDocument();
});

test('renders withdraw component', async () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText('Withdraw'));
  expect(getByText('Withdraw')).toBeInTheDocument();
});

test('renders all data component', async () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText('All Data'));
  expect(getByText('All Data')).toBeInTheDocument();
});


test('renders home component', async () => {
  const { getByText } = render(<Home />);
  expect(getByText('Bad Bank')).toBeInTheDocument();
});

test('handleTextChange function is called when input field changes', async () => {
  const { getByRole } = render(<Withdraw />);
  fireEvent.change(getByRole('textbox'), { target: { value: '100' } });
  expect(getByRole('textbox')).toHaveValue('100');
});

test('handleDeposit function is called when Deposit button is clicked', async () => {
  const handleDeposit = jest.fn();
  const { getByRole } = render(<handleDeposit handleDeposit={handleDeposit} />);
  fireEvent.change(getByRole('textbox'), { target: { value: '100' } });
  fireEvent.click(getByRole('button', { name: /Deposit/i }));
  expect(handleDeposit).toHaveBeenCalled();
});


test('handleDeposit function is called when Deposit button is clicked', async () => {
  const handleDeposit = jest.fn();
  const { getByRole } = render(<MyComponent handleDeposit={handleDeposit} />);
  userEvent.type(getByRole('textbox'), '100');
   userEvent.click(getByRole('button', { name: /Deposit/i }));
  expect(handleDeposit).toHaveBeenCalled();
});

test('trigger some awesome feature when clicking the button', async () => {
  const user = userEvent.setup();
  render(<Deposit />);
  await user.click(screen.getByRole('button', {name: /click me!/i}));
});

test('deposit function test', () => {
  const balance = document.createElement('input');
  balance.setAttribute('id', 'balance');
  balance.setAttribute('value', '0');
  document.body.appendChild(balance);

  const value = 10;
  const currentUser = {user: {balance: 0}};
  const setUpdate = jest.fn();
  const setShow = jest.fn();

  handleDeposit(value, currentUser, setUpdate, setShow);

  expect(currentUser.user.balance).toBe(10);
});


describe("navbar container", () => {
  const renderApp = () => render(<NavBar />);

  it("renders the NavBar", () => {
    renderApp();
    expect(screen.getByTestId("on-hover-span")).toBeInTheDocument();
  });
});
