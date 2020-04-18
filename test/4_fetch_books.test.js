const chai = require("chai")
const chaiHttp = require("chai-http")

const {expect} = chai;

chai.use(chaiHttp);

describe("Return all books", ()=> {

    it("Return all books", (done) => {

        chai.request("http://localhost:4000")
        
        .get("/fetch_books")
        .set('content-type', 'application/json')

        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(200)
            expect(res).to.be.an("object")
            done()
        })
    })

})
