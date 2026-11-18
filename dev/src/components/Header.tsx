import React from 'react'
import logo from '../logo.svg'

export interface HeaderProps {
  /** Text rendered below the logo */
  text: string
  /** URL the link points to */
  link?: string
}

export const Header = ({ text, link = 'https://reactjs.org' }: HeaderProps) => (
  <>
    <img src={logo} className="App-logo" alt="logo" />
    <p>{text}</p>
    <a className="App-link" href={link} target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  </>
)
