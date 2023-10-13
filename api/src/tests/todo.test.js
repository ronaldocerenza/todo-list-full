/* eslint-disable no-undef */
const { expect } = require('chai');
const { describe, it } = require('mocha');
const { getAll } = require('../db/todoDb');

describe('Testando a rota GET /', () => {
  it('retorna o array de tarefas', async () => {
    const response = await getAll();
    expect(response).to.be.instanceOf(Array);
  });
});