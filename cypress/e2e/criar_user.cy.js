import { faker } from '@faker-js/faker';

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

  it('Usuário preenche todas informações para criar usuário', function() {
    cy.PageForms()
    cy.FillUserFields('Ana', 'Carolina', 'ana@teste.com', 'Endreço', 'Senac', 'QA', 'Feminino', 15)
    cy.SubmitUser()
    cy.contains('Usuário Criado com sucesso')
  })

  it('Usuário preenche todas informações necessário porem cancelar o cadastrado', function(){
    cy.PageForms()
    cy.FillUserFields('Ana', 'Carolina', 'ana@teste.com', 'Endreço', 'Senac', 'QA', 'Feminino', 15)
    cy.CancelInput()
    cy.contains('Bem vindo ao Site de Automação do Batista.')
  })
  it.only('Usuário cadastra novo usuário apenas com dados obrigatórios', function() {
    cy.PageForms()
    cy.FillMandatoryFields(faker.name.firstName(), faker.name.lastName(), faker.internet.email())
    cy.SubmitUser()
    cy.contains('Usuário Criado com sucesso')
  })
  it('Usuário cadastra um novo usuário com email inválido', function() {
    cy.PageForms()
    cy.FillMandatoryFields('Ana', 'Carolina', 'email')
    cy.SubmitUser()
    cy.contains('Email translation missing')
  })
  it('Usuário cadastra novo usuário sem preencher nenhum campo', function() {
    cy.PageForms()
    cy.SubmitUser()
    cy.contains('3 errors proibiu que este usuário fosse salvo:')
  })
})