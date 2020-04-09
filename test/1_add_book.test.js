const chai = require("chai")
const chaiHttp = require("chai-http")

const {expect} = chai;

chai.use(chaiHttp);

describe("Add a new book", ()=> {

    it("Add a book which doesn't exist : 2012-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Poor"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(201)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a book which doesn't exist : 2012-Fair", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Fair"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(201)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a book which doesn't exist : 2012-Mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Mint"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(201)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a different book which doesn't exist : 1950-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '1950', condition: "Poor"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(201)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a different book which doesn't exist : 1970-Fair", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '1970', condition: "Fair"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(201)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a different book which doesn't exist : 1990-Mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '1990', condition: "Mint"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(201)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a book which does exist : 2012-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Poor"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(409)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a book which does exist : 2012-Fair", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Fair"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(409)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Add a book which does exist : 2012-Mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/add_book")
        .set('content-type', 'application/json')
        .send({year: '2012', condition: "Mint"})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(409)
            expect(res).to.be.an("object")
            done()
        })
    })

})
