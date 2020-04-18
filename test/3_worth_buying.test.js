const chai = require("chai")
const chaiHttp = require("chai-http")

const { expect } = chai;

chai.use(chaiHttp);

describe("Worth buying current copy Poor condition", () => {

    it("N = POOR / O = POOR", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1950', condition: "Poor" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ worth_buying: false })
                done()
            })
    })

    it("N = FAIR / O = POOR", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1950', condition: "Fair" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ message: "Condition upgrade", worth_buying: true })
                done()
            })
    })

    it("N = MINT / O = POOR", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1950', condition: "Mint" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ message: "Condition upgrade", worth_buying: true })
                done()
            })
    })

})

describe("Worth buying current copy Fair condition", () => {

    it("N = POOR / O = FAIR", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1970', condition: "Poor" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ worth_buying: false })
                done()
            })
    })

    it("N = FAIR / O = FAIR", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1970', condition: "Fair" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ worth_buying: false })
                done()
            })
    })

    it("N = MINT / O = FAIR", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1970', condition: "Mint" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ message: "Condition upgrade", worth_buying: true })
                done()
            })
    })

})

describe("Worth buying current copy Miny condition", () => {

    it("N = POOR / O = MINT", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1990', condition: "Poor" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ worth_buying: false })
                done()
            })
    })

    it("N = FAIR / O = MINT", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1990', condition: "Fair" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ worth_buying: false })
                done()
            })
    })

    it("N = MINT / O = MINT", (done) => {

        chai.request("http://localhost:4000")

            .post("/worth_buying")
            .set('content-type', 'application/json')
            .send({form_values : { year: '1990', condition: "Mint" }})

            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(200)
                expect(res).to.be.an("object")
                expect(res.body).to.contain({ worth_buying: false })
                done()
            })
    })

})
