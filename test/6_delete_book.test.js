const chai = require("chai")
const chaiHttp = require("chai-http")

const {expect} = chai;

chai.use(chaiHttp);

describe("Delete a book", ()=> {

    it("Delete an existing book : 2012-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '2012', condition: "Poor"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Delete an existing book : 2012-Fair", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '2012', condition: "Fair"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Delete an existing book : 2012-Mint", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '2012', condition: "Mint"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Delete an existing book : 1950-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '1950', condition: "Poor"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Delete an existing book : 1970-Fair", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '1970', condition: "Fair"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Delete an existing book : 1990-Mint", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '1990', condition: "Mint"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

    it("Delete a book which doesn't exist : 2000-Poor", (done) => {

        chai.request("http://localhost:4000")
        
        .delete("/delete_book")
        .set('content-type', 'application/json')
        .send({form_values : {year: '2000', condition: "Poor"}})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(404)
            expect(res).to.be.an("object")
            done()
        })
    })


})
