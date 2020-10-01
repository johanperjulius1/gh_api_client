describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can make a seach", () => {
    cy.get("input").type("johanperjulius1");
    cy.get("button").click();
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/",
      response: "fixture:userInfoResponse.json",
    });
  });
});
