
const chai = require('chai');
const chaiHttp = require('chai-http');
const USUARIO_VALIDO = {"nome":"Rachel Green"};

chai.use(chaiHttp);
chai.should();

describe('Usuario - Endpoints', () => {
    describe('POST /api/usuario', () => {
        it ('deve retornar usuário criado - 201', done => {
            chai.request('http://localhost:3000')
            .post('/api/users')
            .send(USUARIO_VALIDO)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                console.log('res.body ', res.body)
                res.should.have.status(201);
                res.body.should.have.property('error').equal(0);
                res.body.payload.comments.should.have.property('_id');
                res.body.payload.comments.should.have.property('name').equal(USUARIO_VALIDO.nome);
                done();
            });
        });
        it ('deve retornar usuário existente - 303', () => {
            //TODO
        });
        it ('deve retornar campos obrigatórios não informados ou inválidos - 500', () => {
            //TODO
        });
    });
});