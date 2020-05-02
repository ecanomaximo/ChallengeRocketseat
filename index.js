import {endereco} from "./endereco.js";

endereco.cidade = "São paulo";
endereco.uf = "SP";
endereco.rua = "Rua dos pinheiros";
endereco.numero = 1293;
endereco.bairro = "Centro";

console.log(`o usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com n° ${endereco.numero}.`)