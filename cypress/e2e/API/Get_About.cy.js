describe('Get About', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/about').then(response => {
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null
        response.body.forEach((partner) => {
            expect(partner).to.have.all.keys('id', "content");
          });
            expect(response.body).to.have.length(1);
        })
      }) 
    })