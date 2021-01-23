import React, { useEffect, useState } from 'react'

import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

import LOGO from '../assets/placeholder_logo.png'
import '../main.css'

//import de componentes estilizados
import { InnerContainer, OutterContainer, ButtonBar, TopButton, LogoHolder, Logo } from '../components/style'

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

                        <Link to="/arquivos">
                            <TopButton>Arquivos</TopButton>
                        </Link>

                        <Link to="/perfis">
                            <TopButton>Perfis</TopButton>
                        </Link>

                        <Link to="/timeline">
                            <TopButton>Timeline</TopButton>
                        </Link>

                    </ButtonBar>
                    <InnerContainer>
                        <Switch>
                            <Route exact path='/' component={() => <h1>Mesmo componente Home usado em out.js, mas aqui se recebe o ID do usuário para criar uma home personalizada.</h1>} />
                            <Route exact path='/arquivos' component={() => <h1>Histórias secundarias e inteligencia</h1>} />
                            <Route exact path='/perfis' component={() => <h1>Informações dos pergonagens já apresentados</h1>} />
                            <Route exact path='/timeline' component={() => <h1>Linha do tempo dos eventos na historia dessa terra</h1>} />

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