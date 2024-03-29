import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props)
    this.titulo = ""
    this.texto = ""
  }

  handleMudancaTitulo = (evento) => {
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  handleMudancaText(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  criarCard(evento) {
    evento.preventDefault()
    evento.stopPropagation()

    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit = {this.criarCard.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this.handleMudancaText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
