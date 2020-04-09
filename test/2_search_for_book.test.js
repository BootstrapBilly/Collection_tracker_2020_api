const chai = require("chai")
const chaiHttp = require("chai-http")

const {expect} = chai;

chai.use(chaiHttp);

describe("Search for a book", ()=> {

    it("Search for a book which exists: 2012-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Poor"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:2012, condition:"Poor"})
            done()
        })
    })

    it("Search for a book which exists: 2012-Fair", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Fair"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:2012, condition:"Fair"})
            done()
        })
    })

    it("Search for a book which exists: 2012-Mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Mint"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.book).to.contain({year:2012, condition:"Mint"})
            done()
        })
    })

    it("Search for a book which does not exist", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/search_for_book")
        .set('content-type', 'application/json')
        .send({year: '1901', condition: "Mint"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(404)
            expect(res).to.be.an("object")
            done()
        })
    })

})
