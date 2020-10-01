describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can make a seach", () => {
    cy.get("input").type('johanperjulius1');
    cy.get('button').click();
  });
  });

