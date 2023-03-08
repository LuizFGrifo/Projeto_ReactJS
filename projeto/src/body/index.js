import img from './programmer.svg';
import React from "react";
import './style.css'

export default function body() {
    return(
        <div className="main_login">
            <div className="left_login">
                <h1>Faça login <br />
                Para fazer parte do nosso time de programadores</h1>
                <img src={img}class="left_login_image" alt="Grupo de programadores"></img>
            </div>
            <div className="right_login">
                <div className="card_login">
                    <h1>LOGIN</h1>
                    <div className="textfield">
                        <label for="usuario">Usuário:</label>
                        <input type="text" name="usuario" placeholder="Usuário"></input>
                    </div>
                    <div className="textfield">
                        <label for="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Senha"></input>
                    </div>
                    <button className="login_button">Login</button>
                </div>
            </div>
        </div>
    );
}