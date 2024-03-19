class Turma {
  constructor(codigo) {
    this.codigo = codigo;
    this._codigo = codigo;
    this._nota = null;
  }

  setNota(nota) {
    this._nota = nota;
  }

  aprovado() {
    return this._nota >= 6;
  }
}

module.exports = Turma;
