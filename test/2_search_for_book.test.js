const chai = require("chai")
const chaiHttp = require("chai-http")

const {expect} = chai;

chai.use(chaiHttp);

describe("Search for a book", ()=> {

    it("Search for a book which exists with all conditions present : 2012 - best condition mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({form_values : '2012'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:"2012", condition:"Mint"})
            done()
        })
    })

    it("Search for a book which exists: 1950 - poor - only condition poor", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({form_values : '1950'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:"1950", condition:"Poor"})
            done()
        })
    })

    it("Search for a book which exists: 1970 - fair - only condition fair", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({form_values : '1970'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:"1970", condition:"Fair"})
            done()
        })
    })

    it("Search for a book which exists: 1990 - mint - only condition mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({form_values : '1990'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:"1990", condition:"Mint"})
            done()
        })
    })

    it("Search for a book which does not exist", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({form_values : '1901'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(404)
            expect(res).to.be.an("object")
            done()
        })
    })

})
