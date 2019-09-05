const moocup = require('./images/moocup.png')
const dapis = require('./images/dapis.png')
const marcabola = require('./images/marcabola.png')
const midas_t = require('./images/midas_trans.png')

import React, { Component } from 'react';
import './App.css';


class NavButtons extends Component {
  render(){
    return (
      <button>{this.props.text}</button>
    )
  }
}

class Card extends Component {
  render(){
    return (
      <div className="card">
        <img src={this.props.image} alt=""></img>
        <div className="container">
          <h4><b>{this.props.name}</b></h4>
          <p>{this.props.about}</p>
        </div>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <div className="Hero">
          <h1>Midas</h1>
          <h2>Trazendo ideias inovadoras para o mercado.</h2>
          <p>Aperte no botão abaixo para conhecer mais</p>
          <button>
            <i></i>
          </button>
        </div>
        
        <div className="NavBar">
          <img src={midas_t} alt="" style={{width: 50 + 'px', height: 80 + 'px'}}></img>
          <nav className="Navbar_buttons">
              <NavButtons text="Quem somos"/>
              <NavButtons text="Projetos"/>
              <NavButtons text="Contato"/>
          </nav>
        </div>

        <div className="About">
            <h2>Ideias para o mundo</h2>
            <p>
               Nossa proposta é facilitar a comunicação entre uma ideia e o mercado <br/>
               Através de marketing, desenvolvimento e empreendedorismo, para que ideias não sejam so ideias <br/>
               e ajudem o mundo de maneira real.
            </p>
        </div>

        <div className="Projetos">
            <h2>Projetos e parceiros</h2>
            <Card image={moocup} about="Sustentabilidade e econômia. Utilize nosso copo reutilizável e ganhe desconto nos estabelecimentos parceiros." name="MooCup"/>
            <Card image={dapis} about="Sem filas e satisfação. Faça reservas em restaurantes pelo nosso aplicativo e não encare mais filas" name="Dapis"/>
            <Card image={marcabola} about="Tá querendo marcar um futebol com os amigos de maneira rápida e cômoda? Utilize nosso aplicativo e chame a galera para aquela bola" name="Marcabola"/>
        </div>

        <div className="ideia">
          <h2>Quer levar a sua ideia para o mundo?</h2>
          <p>Mande sua ideia para nós ou mande um email para marcar uma reunião através do email abaixo.</p>
          <a href="mailto:socialmidasco@gmail.com">socialmidasco@gmail.com</a>
          <p>Midas Co.<b>TM</b></p>
          <p>Sede - Belém, PA</p>
        </div>
      </div>
    ); 
  }
}

export default App;
