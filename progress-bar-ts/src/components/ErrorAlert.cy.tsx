import React from 'react'
import ErrorAlert from './ErrorAlert'

describe('<ErrorAlert />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ErrorAlert />)
  })
})