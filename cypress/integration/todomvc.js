describe('TODO MVC', function() {
  it('Visits todomvc homepage', function() {
    cy.visit('http://todomvc.com/')
  })
  it('Choose the backbone.js framework', function() {
  	cy.get('body > div.container > div:nth-child(2) > div.col-md-8 > iron-pages > div:nth-child(1) > ul > li:nth-child(1) > a').click({ force: true })
  })
})