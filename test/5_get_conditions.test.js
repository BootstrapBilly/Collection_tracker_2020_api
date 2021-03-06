const chai = require("chai")
const chaiHttp = require("chai-http")

const {expect} = chai;

chai.use(chaiHttp);

describe("Get Conditions", ()=> {

    it("Book which exists with all conditions present : 2012 - best condition mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/get_conditions")
        .set('content-type', 'application/json')
        .send({form_values : '2012'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.conditions).to.contain("Poor")
            expect(res.body.conditions).to.contain("Fair")
            expect(res.body.conditions).to.contain("Mint")
            done()
        })
    })

    it("Book which exists: 1950 - poor - only condition poor", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/get_conditions")
        .set('content-type', 'application/json')
        .send({form_values : '1950'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.conditions).to.contain("Poor")
            done()
        })
    })

    it("Book which exists: 1970 - fair - only condition fair", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/get_conditions")
        .set('content-type', 'application/json')
        .send({form_values : '1970'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.conditions).to.contain("Fair")
            done()
        })
    })

    it("Book which exists: 1990 - mint - only condition mint", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/get_conditions")
        .set('content-type', 'application/json')
        .send({form_values : '1990'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            expect(res.body.conditions).to.contain("Mint")
            done()
        })
    })

    it("Book which does not exist", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/get_conditions")
        .set('content-type', 'application/json')
        .send({form_values : '1901'})

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(204)
            expect(res).to.be.an("object")
            done()
        })
    })

})
