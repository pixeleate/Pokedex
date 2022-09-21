describe('Rendering', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The first Pokemon should load `Bulbasor`
    cy.get('img[alt*="bulbasaur"]');

    cy.get('h1').contains('bulbasaur');

    // Find `Charmeleon` in the paginated list and click it
    cy.get('li[data-pokemon*="charmeleon"]').click();

    // The Charmeleon's image should be present
    cy.get('img[alt*="charmeleon"]');

    // The new Pokemon should contain an h1 with "Charmeleon"
    cy.get('h1').contains('charmeleon');
  });
});

export {};
