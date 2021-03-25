describe('user-onboarding project', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });
    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password');

    // need a variable for the terms of conditions

    const submitBtn = () => cy.get('#submitBtn');

    // ALL OF THE TESTS
    it('sanity tests', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
    });
    it('select items in the DOM of project', () => {
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        submitBtn().should("exist");

        cy.get('input[name="foobar"]').should("not.exist");
    });
});