describe('Criar novos usuários', () => {
  beforeEach(() => {
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
  })
  it('Quando usuário acessar a página deverá ser mostrado o titulo correto', function() {
    cy.title().should('be.equal', 'Automação com Batista')
  })

  it('Acessar a página pela navegação', function() {
    cy.PageForms()
  })

  it('Acessar a página pela URL', function() {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new')
    cy.get('.center').contains('Novo Usuário!!')
  })

  it.only('Usuário preenche todas informações para criar usuário', function() {
    cy.PageForms()
    cy.FillUserFields('Ana', 'Carolina', 'ana@teste.com', 'Endreço', 'Senac', 'QA', 'Feminino', 15)
    cy.SubmitUser()
    cy.contains('Usuário Criado com sucesso')
  })
})