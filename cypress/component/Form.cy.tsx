/// <reference types="cypress" />

import React from 'react';
import { Form } from '../../src/components/molecules/form';

describe('<Form />', () => {
  const Name = 'Hello World';
  const Age = '40';

  it('Mounts form component', () => {
    cy.mount(<Form />)
  });

  it('Adds a Name', () => {
    cy.get('[data-cy="name"]').type(Name);
  });

  it('Adds an Age', () => {
    cy.get('[data-cy="age"]').type(Age);
  });

  it('Validates Inputs have value', () => {
    cy.get('[data-cy="name"]').should('be.a', 'string').and('equal', Name);
    cy.get('[data-cy="age"]').should('be.a', 'string').and('equal', Age);
  });

  it('Successfully submits and shows loader', () => {
    cy.get('[data-cy="submitForm"]').click();
    cy.get('[data-cy="loader"]').should('be.visible');
  });

  it('should show reset form state after submit', () => {
    cy.wait(3000); // Wait for async loader to finish
    cy.get('[data-cy="name"]').should('be.empty');
    cy.get('[data-cy="age"]').should('be.empty');
  })

})