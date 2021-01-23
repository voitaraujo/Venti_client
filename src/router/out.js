import React from 'react'

import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

import LOGO from '../assets/placeholder_logo.png'
import '../main.css'

//import de componentes estilizados
import { InnerContainer, OutterContainer, ButtonBar, LogoHolder, Logo } from '../components/style'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'

function App() {
        return (
            <Router>
                <OutterContainer>
                    <ButtonBar>

                        <LogoHolder>
                            <Link to="/">
                                    <Logo src={LOGO} alt="Logo not found" />
                            </Link>
                        </LogoHolder>

                    </ButtonBar>
                    <InnerContainer>
                        <Switch>
                            <Route exact path='/' component={() => 
                            <>
                            <h1>pagina inicial sem personalização de perfil</h1>
                            <label>é o mesmo componente usado como Home no in.js, mas nesse aqui não se recebe a ID do usuário como parametro para recomendar obras.</label>
                            <br />
                                <label>Ao inves disso, se recomanda as obras mais populares

                            <Link to='/cadastrar'>
                            cadastrar
                            </Link>
                                </label>
                            </>
                        }/>
                            <Route exact path='/login' component={() => <Login />} />
                            <Route exact path='/cadastrar' component={() => <Cadastro />} />

                            <Route
                                path='*'
                                component={() => (
                                    <>
                                        <h5>Desculpe, não foi possivel te levar até a pagina desejada...</h5>
                                        <p><a href='/'>CLIQUE AQUI </a></p>
                                        <p>para voltar para a aplicação</p>
                                    </>
                                )}
                            />
                        </Switch>
                        </InnerContainer>

                </OutterContainer>
            </Router>
        )
}

export default App