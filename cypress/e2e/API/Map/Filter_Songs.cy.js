describe('Get Filter Songs', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/map/filter/songs').then(response => {
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null
        // response.body.forEach((songs) => {
        //     expect(songs).to.have.all.keys("id", "title", "collectors", "recording_date", "stereo_audio", "video_url", "ethnographic_district", "photos", "city", "genres", "education_genres", "fund");
        //   });
        })
      }) 
    })