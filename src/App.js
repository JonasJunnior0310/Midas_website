const moocup = require('./images/moocup.png')
const dapis = require('./images/dapis.png')
const marcabola = require('./images/marcabola.png')
//const king = require('./images/king.png')
const midas_t = require('./images/midas_trans.png')
const intro = require('./images/intro.png')
const emp1 = require('./images/emp1.jpg')
const emp2 = require('./images/emp2.jpg')
const emp3 = require('./images/emp3.jpg')
const emp4 = require('./images/emp4.jpg')

import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors'
import { KeyboardArrowDown } from '@material-ui/icons'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const MenuButton = withStyles(theme => ({
    root: {
      color : '#130F40',
      '&:hover': {
        backgroundColor: orange[700],
        color: theme.palette.getContrastText(orange[500])
      },
      border: 0,
      borderRadius : 0,
      verticalAlign: 1,
      height: 75,
    },
  }))(Button);

class NavButtons extends Component {
  
  render(){
    return (
        <MenuButton variant="outlined">{this.props.text}</MenuButton>
    )
  }
}

const imgs = [dapis, moocup, marcabola]

class App extends Component {
  render() {    
    
    var settings = {
      dots : false,
      infinite : true,
      autoplay: true,
      speed: 500,
      slidestoShow: 1,  
    }
    return (
      <div className="page">
            <header> 
                <img alt="" src={midas_t} style={{width: 150 + "px"}} alt=""></img>             
                <nav>
                    <NavButtons text={"Sobre"} />
                    <NavButtons text={"Projetos e Parcerias"}/>
                    <NavButtons text={"Equipe"} />
                    <NavButtons text={"Contato"}/>
                </nav>
            </header>
            <div className="intro">
                <img alt="" src={intro} alt=""></img>
                <div className="textIntro">                    
                    <h1>Midas</h1>
                    <h2>Trazendo ideias inovadoras para o mundo.</h2>
                    <p>Aperte no botão abaixo para conhecer mais</p>
                    <button>
                        <KeyboardArrowDown style={{fontSize : 50}}/>
                    </button>
                </div>
            </div>
            <div className="About">
                <div className="slide">
                <Slider {...settings}>
                    <div>
                        <img alt="" src={emp1} style={{width: 800 + "px", height: 90 + "vh"}}></img>
                    </div>
                    <div>
                        <img alt="" src={emp2} style={{width: 800 + "px", height: 90 + "vh"}}></img>
                    </div>
                    <div>
                        <img alt="" src={emp3} style={{width: 800 + "px", height: 90 + "vh"}}></img>
                    </div>
                    <div>
                        <img alt="" src={emp4} style={{width: 800 + "px", height: 90 + "vh"}}></img>
                    </div>
                </Slider>
                </div>
                <div className="description">
                <h1>Ideias para o mundo</h1>
                    <p>
                        Nossa proposta é facilitar a comunicação entre uma ideia e o mercado 
                        através de marketing, desenvolvimento e empreendedorismo, para que ideias não sejam so ideias 
                        e ajudem o mundo de maneira real.
                    </p>
                </div>
            </div>
            <div className="Parcerias">
                <h2>Projetos e Parceiros</h2>
                <div className="resumo">
                    <div id="container">
                        <div id="separate" style={{backgroundColor: "#AB19CF"}}>
                            <img alt="" src={dapis} style={{width: 180 + "px", borderRadius: 100, marginTop: 5 + "px"}}></img>
                        </div>
                        <h2 style={{color: "#AB19CF"}}>DAPIS</h2>
                        <h3>Satifação sem filas.</h3>
                        <p>Faça reservas em restaurantes pelo nosso aplicativo e não encare mais filas</p>
                    </div>
                    <div id="container">
                        <div id="separate" style={{backgroundColor: "#8dc37f"}}>
                            <img alt="" src={moocup} style={{width: 250 + "px", borderRadius: 100, marginTop: 20 + "px"}}></img>
                        </div>
                        <h2 style={{color: "#8dc37f"}}>MooCup</h2>
                        <h3>Sustentabilidade e econômia.</h3>
                        <p>Utilize nosso copo reutilizável e ganhe desconto nos estabelecimentos parceiros.</p>
                    </div>
                    <div id="container">
                        <div id="separate" style={{backgroundColor : "#00B142"}}>
                            <img alt="" alt="" src={marcabola} style={{width: 150 + "px", borderRadius: 100, marginTop: 10 + "px"}}></img>
                        </div>
                        <h2 style={{color : "#00B142"}}>Marcabola</h2>
                        <h3>Marcação sem falta e preocupação.</h3>
                        <p>Marcar uma bola de maneira rápida e cômoda? Utilize nosso aplicativo e chame a galera.</p>
                    </div>
                </div>
            </div>
      </div>
    ); 
  }
}

export default App;
