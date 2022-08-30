/// <reference types="cypress" />

import React from 'react';
import { Form } from '../../src/components/molecules/form';

describe('<Form />', () => {
  const Name = 'Hello World';
  const Age = '40';

  it('Mounts form component', () => {
    cy.mount(<Form />)
    // Type Name and Age
    cy.get('[data-cy="name"]').type(Name);
    cy.get('[data-cy="age"]').type(Age);

    // Verify Name and Age
    cy.get('[data-cy="name"]').invoke('val').should('contain', Name);
    cy.get('[data-cy="age"]').invoke('val').should('contain', Age);

    // Submit and Verify Spinner
    cy.get('[data-cy="submitForm"]').click();
    cy.get('[data-cy="loader"]').should('be.visible');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000); // Wait for async loader to finish
    
    // Verify Reset Form State
    cy.get('[data-cy="name"]').should('be.empty');
    cy.get('[data-cy="age"]').should('be.empty');
});


})