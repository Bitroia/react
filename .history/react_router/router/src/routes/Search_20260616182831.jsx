



Resgatar oferta
minha search ta assim import React from "react";
import { UseFetch } from "../hooks/UseFetch";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items } = UseFetch(url);

  return (
    <div>
      <h1>Resultado da pesquisa</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$:{item.price}</p>
              {/* Rota dinâmica */}
              <Link to={/products/${item.id}}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search; e meu searchform ta assim import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
 pq nao encontra o produto? 

Pelo código que você mostrou, há algumas possibilidades.

1. Verifique a URL que está sendo gerada
No Search, coloque um console.log(url):

const url = "http://localhost:3000/products?" + searchParams;

console.log(url);
Ao pesquisar por "Notebook", a URL deveria ficar algo parecido com:

http://localhost:3000/products?q=Notebook
Se não estiver assim, o problema está no navigate.

2. Seu useState deveria começar com string vazia
Hoje você tem:

const [query, setQuery] = useState();
Melhor:

const [query, setQuery] = useState("");
3. Qual é a estrutura do seu db.json?
O parâmetro q faz busca textual em campos do objeto. Por exemplo:

{
  "products": [
    {
      "id": 1,
      "name": "Notebook",
      "price": 3000
    }
  ]
}
Se você acessar:

http://localhost:3000/products?q=Notebook
deveria retornar esse produto.

4. Se estiver usando json-server v1
As versões mais novas mudaram algumas coisas na busca. Teste diretamente no navegador:

http://localhost:3000/products?q=Notebook
Se retornar:

[]
mesmo existindo um produto com esse nome, o problema está no json-server e não no React.

5. Veja se o hook está realmente recebendo os dados
No Search:

const { data: items } = UseFetch(url);

console.log(items);
Se aparecer [], a API não encontrou nada.

Se aparecer undefined, o problema pode estar no hook.

Se aparecer produtos, o problema está no map.

Me mostra:

Seu db.json

O código do UseFetch.jsx

A URL que aparece no console.log(url)

que eu consigo apontar exatamente onde está o erro.


a url fica com o final certo, mas visualmente nao aparece

Se a URL está ficando correta (por exemplo http://localhost:3000/products?q=notebook), então o problema provavelmente está em uma destas três coisas:

Verifique o que a API retorna
Abra diretamente no navegador:

http://localhost:3000/products?q=notebook
ou

http://localhost:3000/products?q=Notebook
O resultado é:

uma lista com produtos → problema no React

[] → problema na busca da API

Verifique se items está recebendo dados
No componente Search:

const { data: items } = UseFetch(url);

console.log(items);
Quando você pesquisa, o console mostra:

undefined
ou

[]
ou

[{...}, {...}]
?

Verifique seu hook
Nas mensagens anteriores você teve problemas com:

UseFetch
e

useFetch
Se o hook estiver funcionando na Home mas não na Search, provavelmente não é isso. Mas vale conferir se ele refaz o fetch quando a URL muda.

Por exemplo:

useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
  };

  fetchData();
}, [url]);
O [url] é essencial. Sem ele, ao mudar de /search?q=x para /search?q=y, o hook não busca novamente.

Um detalhe do json-server
Dependendo da versão, q pode não funcionar como você espera.

Se seus produtos forem:

{
  "id": 1,
  "name": "Notebook"
}
tente acessar:

http://localhost:3000/products?name=Notebook
Se isso funcionar e ?q=Notebook não funcionar, o problema é a forma de filtrar.

Me manda:

o conteúdo do db.json

o código completo do UseFetch.jsx

que dá para descobrir rapidamente onde está travando.


apareceu []

Se console.log(items) está mostrando [], então o React está funcionando. O problema é que a API não encontrou nenhum produto para a busca.

O próximo passo é verificar o db.json.

Por exemplo, se seu db.json for:

{
  "products": [
    {
      "id": 1,
      "name": "Notebook",
      "price": 3000
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 100
    }
  ]
}
Teste no navegador:

http://localhost:3000/products
e depois:

http://localhost:3000/products?q=Notebook
Se o segundo retornar [], pode ser porque a versão do json-server que você está usando não está tratando q da mesma forma que a versão do professor.

Também veja qual é a URL exata gerada na busca. Adicione:

console.log(url);
e me diga algo como:

http://localhost:3000/products?q=Notebook
ou

http://localhost:3000/products?q=undefined
Porque se você apertar "Buscar" sem digitar nada, a URL vira:

http://localhost:3000/products?q=undefined
e obviamente retorna [].

Me envie também:

O conteúdo do seu db.json

A URL exata que aparece no console.log(url)

Com isso dá para identificar o problema na hora.


meu db {
  "products": [
    {
      "name": "capa de chuva",
      "price": "50.50",
      "id": 5
    },
    {
      "name": "teclado",
      "price": "110",
      "id": 6
    },
    {
      "name": "cadeira",
      "price": "200",
      "id": 7
    },
    {
      "name": "mouse",
      "price": "60",
      "id": 8
    },
    {
      "name": "suporte monitor",
      "price": "120",
      "id": 9
    },
    {
      "name": "cabo hdmi",
      "price": "10",
      "id": 11
    },
    {
      "name": "suporte microfone",
      "price": "60",
      "id": 12
    }
  ]
}

O db.json parece estar correto.

O que eu suspeito é que você está usando uma versão mais nova do json-server, e nela o parâmetro:

?q=mouse
não está funcionando da mesma forma que nas aulas mais antigas.

Faça este teste no navegador:

http://localhost:3000/products?q=mouse
e depois:

http://localhost:3000/products?name=mouse
Se o primeiro retornar:

[]
e o segundo retornar:

[
  {
    "name": "mouse",
    "price": "60",
    "id": 8
  }
]
então encontramos o problema.

Outra coisa que quero conferir é o valor de searchParams.

No componente Search, coloque:

console.log(searchParams.toString());
e

console.log(url);
Se você pesquisar "mouse", deve aparecer:

q=mouse
e

http://localhost:3000/products?q=mouse
Também tente montar a URL explicitamente:

const query = searchParams.get("q");

const url = `http://localhost:3000/products?name=${query}`;
Se funcionar, o problema é definitivamente o parâmetro q.

Me diga o resultado de acessar no navegador:

http://localhost:3000/products?q=mouse
Ele retorna o produto ou retorna []? Isso vai confirmar a causa.


o segundo link retornou o mouse

Perfeito, então encontramos a causa.

Você está usando uma versão do json-server em que:

/products?q=mouse
não está funcionando como o professor mostra na aula, mas

/products?name=mouse
funciona.

Então no seu componente Search, troque:

const url = "http://localhost:3000/products?" + searchParams;
por algo assim:

const query = searchParams.get("q");

const url = `http://localhost:3000/products?name=${query}`;
Ficaria:

import React from "react";
import { UseFetch } from "../hooks/UseFetch";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const url = `http://localhost:3000/products?name=${query}`;

  const { data: items } = UseFetch(url);

  return (
    <div>
      <h1>Resultado da pesquisa</h1>

      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;

Se a aula usa ?q=, provavelmente ela foi gravada com uma versão mais antiga do json-server.

Uma alternativa é verificar sua versão:

npx json-server --version
ou

json-server --version
e comparar com a versão usada pelo professor. Qual versão aparece aí?


