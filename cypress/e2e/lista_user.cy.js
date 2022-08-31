describe('Criar novos usuários', () => {
    beforeEach(() => {
      cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
    })
    it('Quando usuário acessar a página deverá ser mostrado o titulo correto', function() {
      cy.title().should('be.equal', 'Automação com Batista')
    })
   
  })