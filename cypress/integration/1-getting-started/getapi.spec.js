/// <reference types="cypress" />

context('UserManage Api automation test',()=> {
    it('GET-list user',()=> {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })

    it('Delete User', ()=>{
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
            

        })
    })

})