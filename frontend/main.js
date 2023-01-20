import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './assets/modules/Login';
import Contato from './assets/modules/Contato';


import './assets/css/style.css';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const cadastroContato = new Contato(".register");
const editContato = new Contato(".edit");

login.init();
cadastro.init();

cadastroContato.init();
editContato.init();