describe('Cadastro de um novo usuário', () => {
    it(`Usuario entra na página inicial, acessa a rota de cadastro, iserere os dados, 
        clica para cadastra e recebe mensagem cadastro com sucesso`, () => {
        cy.visit("/");
        cy.get('a[href="/cadastro"]').click();
        cy.get('input[name="firstname"]').type('Leonardo');
        cy.get('input[name="surname"]').type('Ferreira');
        cy.get('input[name="email"]').type('cachorroleo16@gmail.com');
        cy.get('input[name="password"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.wait(5000);
        cy.contains('Usuário Leonardo cadastrado com sucesso!').should('be.visible');
    });
});
