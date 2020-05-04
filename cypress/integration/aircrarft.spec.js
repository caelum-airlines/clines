describe("Aircraft test", () => {

    beforeEach(() => {
        cy.visit("/aircraft")
    })

    it('should get a list of aircraft',  () => {
        const row = cy.get('tbody > tr')

        row.should('have.length', 1)

        row.within(() => {
            cy.get('td').eq(0).should('have.text', 'BX123AC')
            cy.get('td').eq(1).should('have.text', 'Boeing 737')
        })
    });

    it('should view aircraft details', () => {
        const row = cy.get('tbody > tr').first()

        row.click()

        cy.url().should('include', 'BX123AC')

        cy.get("#code").should('have.value', 'BX123AC')
        cy.get("#model").should('have.value', 'Boeing 737')
    });

})