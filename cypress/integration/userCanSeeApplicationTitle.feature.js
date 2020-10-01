describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('contains titel', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });    
  
  it('User can make a seach')
  cy.get('input').type(johanperjulius1);
  cy.route({
    method: "GET",
    url: "http://localhost:3000/",
    response: "fixture:githubSearchResponse.json",
  });

  
});