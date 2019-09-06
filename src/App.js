import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faAngleDown} from '@fortawesome/free-solid-svg-icons'

import moocup from './images/moocup.png'
import dapis from './images/dapis.png'
import marcabola from './images/marcabola.png'
import king from './images/king.png'
import midas_t from './images/midas_trans.png'
import intro from './images/intro.png'
import emp1 from './images/emp1.jpg'
import emp2 from './images/emp2.jpg'
import emp3 from './images/emp3.jpg'
import emp4 from './images/emp4.jpg'
import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.jpeg'
import p4 from './images/p4.png'
import p5 from './images/p5.jpeg'
import p6 from './images/p6.png'
import p7 from './images/p7.png'
import p8 from './images/p8.png'
import p9 from './images/p9.png'
import p10 from './images/p10.png'
import p11 from './images/p11.jpg'
import p12 from './images/p12.png'

var d = 0;
var y = 0;

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
        <MenuButton variant="outlined" onClick={this.props.evt} >{this.props.text}</MenuButton>
    )
  }
}


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            field: 0,
            images_1 : [p1, p2, p3, p4, p5, p6],
            images_2 : [p7, p8, p9, p10, p11, p12],
            cargos_1 : ["Presidente", "Vice-presidente e RH", "Diretora Interna", "Diretora Jurídica", "Diretor de Vendas",
                      "Diretora de Projetos e Tecnologia"],
            cargos_2: ["Gerente de Projetos", "Designer",
            "Cientista de Dados", "Desenvolvedor", "Desenvolvedor", "Desenvolvedor"],
            nomes_1 : ["Amaury Magalhães", "Daniel Souza", "Anne Gonçalves", "Andressa Pinho", "Sérgio Murillo", "Mayana Pontes"],
            nomes_2 : ["Caio Vinícius", "Isabelle Magalhães", "Matheus Rodrigues", "Jonas Paiva", "Bruno De Masi", "Paulo Amador"]
        }
        
        this.AboutFocus = React.createRef()
        this.ProjectFocus = React.createRef()
        this.TeamFocus = React.createRef()
        this.ContactFocus = React.createRef()
        }

    AboutClick = (event) => {
        
        if(this.AboutFocus.current){
            this.AboutFocus.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
            })
        }
    }

    ProjectsClick = (event) => {
        
        if(this.ProjectFocus.current){
            this.ProjectFocus.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
            })
        }
    }

    TeamClick = (event) => {
        
        if(this.TeamFocus.current){
            this.TeamFocus.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
            })
        }
    }

    ContactClick = (event) => {
        
        if(this.ContactFocus.current){
            this.ContactFocus.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
            })
        }
    }

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
                <header id="home"> 
                    <a href="#inicio"><img alt="" src={king} style={{width: 52 + "px"}}></img></a>             
                    <nav>
                        <NavButtons text={"Sobre"} evt={this.AboutClick}/>
                        <NavButtons text={"Projetos e Parcerias"} evt={this.ProjectsClick}/>
                        <NavButtons text={"Equipe"} evt={this.TeamClick}/>
                        <NavButtons text={"Contato"} evt={this.ContactClick}/>
                    </nav>
                </header>
                <div className="intro">
                    <img src={intro} alt=""></img>
                    <div className="textIntro">                    
                        <h1>Midas</h1>
                        <h2>Trazendo ideias inovadoras para o mundo.</h2>
                        <p>Aperte no botão abaixo para conhecer mais</p>
                        <button id="downbtn" onClick={this.AboutClick}>
                            <FontAwesomeIcon icon={faAngleDown} style={{fontSize : 30}} />
                        </button>
                    </div>
                </div>
                <div className="About" ref={this.AboutFocus}>
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
                        <p style={{fontSize: 20 + "px", marginTop: 100}}>Projetos e Parcerias</p>
                        <button id="downbtn" onClick={this.ProjectsClick}>
                            <FontAwesomeIcon icon={faAngleDown} style={{fontSize : 30 ,paddingRight: 30}}/>
                        </button>
                    </div>
                </div>
                <div className="Parcerias" ref={this.ProjectFocus}>
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
                                <img alt="" src={marcabola} style={{width: 150 + "px", borderRadius: 100, marginTop: 10 + "px"}}></img>
                            </div>
                            <h2 style={{color : "#00B142"}}>Marcabola</h2>
                            <h3>Marcação sem falta e preocupação.</h3>
                            <p>Marcar uma bola de maneira rápida e cômoda? Use nosso aplicativo e chame a galera.</p>
                        </div>
                    </div>
                    <p style={{fontSize: 20 + "px", marginTop: 110}}>Equipe</p>
                    <button id="downbtn" onClick={this.TeamClick}>
                        <FontAwesomeIcon icon={faAngleDown} style={{fontSize : 30}}/>
                    </button>
                </div>
                <div className="Equipe" ref={this.TeamFocus}>
                    <h2>Equipe</h2>
                    <div id="container_t">
                        {this.state.images_1.map((item) => {
                            var html = (<div id="imgs_1">
                                            <img alt="" src={item} style={{width: 130 + "px", height: 130 + "px",borderRadius: 100}} />
                                            <h4>{this.state.nomes_1[d]}</h4>
                                            <p>{this.state.cargos_1[d]}</p>
                                        </div>)
                            d = d + 1
                            return(html)
                        })}
                        {this.state.images_2.map((item) => {
                            
                            var html = (<div id="imgs">
                                            <img alt="" src={item} style={{width: 130 + "px", height: 130 + "px", borderRadius: 100}} />
                                            <h4>{this.state.nomes_2[y]}</h4>
                                            <p>{this.state.cargos_2[y]}</p>
                                        </div>)
                            y = y + 1
                            return(html)
                        })}
                    </div>    
                </div>
                <div className="Contato" ref={this.ContactFocus}>
                    <div className="slide">
                        <img src={king} alt="" style={{width: 600 + "px"}}></img>
                    </div>
                    <div className="chamada">
                        <h1>Você tem uma ideia e quer torná-la realidade?</h1>
                        <p>
                            Entre em contato conosco pelas redes sociais ou email. Transformaremos suas ideias em négocio.
                        </p>
                        <a href="https://www.instagram.com/midas.brasil" alt="@midas.brasil"><FontAwesomeIcon icon={faInstagram} style={{fontSize : 50 + "px", marginRight: 30 + "px"}}/></a>
                        <a href="https://www.facebook.com/midasco.brasil/" alt="midasco.brasil"><FontAwesomeIcon icon={faFacebook} style={{fontSize : 50 + "px", marginRight: 30 + "px"}}/></a>
                        <a href="mailto:socialmidasco@gmail.com" alt="socialmidasco@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{fontSize : 50 + "px"}}/></a>
                    </div>
                </div>
                <footer>
                    <img alt="" src={midas_t} style={{width: 70 + "px"}}></img>
                </footer>
                
        </div>
        ); 
    }
}

export default App;
