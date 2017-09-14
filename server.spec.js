const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Routes', () => {
  describe('/', () => {
    describe('GET', () => {
      it('should respond with a 200 when successful', (done) => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
    });
  });
  describe('/movies', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
        .get('/movies')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });
  });
  describe('/tvshows', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(server)
        .get('/tvshows')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });
  });
});
