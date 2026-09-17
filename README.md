# 🎮 GameFinder — Catálogo de Jogos com Consumo Assíncrono de API

Aplicação web responsiva desenvolvida em JavaScript Puro (Vanilla JS) focada no consumo de dados, tratamento de requisições assíncronas e renderização dinâmica baseada na API REST do RAWG.

## 🔗 Demonstração Online
Acesse a aplicação em produção: [https://daniel-antonio-bandeira.github.io/GameFinder/](https://daniel-antonio-bandeira.github.io/GameFinder/)

## 🛠️ Desafios Técnicos Solucionados & Engenharia
O projeto foi estruturado para aplicar padrões limpos de manipulação de dados no front-end, focando em performance de renderização e experiência do usuário:

1. **Ciclo de Vida Assíncrono (Promises & Async/Await):** Implementação de chamadas assíncronas robustas para a API externa. Isolamento das funções de busca (`fetch`) com tratamento de exceções preventivo para garantir que falhas na API não quebrem a interface do usuário.
2. **Manipulação Eficiente do DOM (Virtual Engine Injection):** Em vez de utilizar métodos pesados de re-renderização, a aplicação reconstrói dinamicamente os elementos HTML de forma cirúrgica na tela conforme o retorno estruturado do JSON.
3. **Higienização de Entradas (Data Sanitization):** Tratamento das strings de busca inseridas pelo usuário para evitar quebras nas URLs de requisição da API REST, garantindo buscas precisas por títulos de jogos.
4. **Interface Fluida e Responsiva:** Arquitetura CSS estruturada com Flexbox/Grid para garantir adaptabilidade visual em múltiplos tamanhos de tela (Desktops e Dispositivos Móveis).

## 🚀 Funcionalidades
* Motor de busca de jogos em tempo real integrado à API global da RAWG.
* Cards dinâmicos gerados via código contendo Nome, Avaliação (Metacritic/Users) e Imagem de Capa.
* Arquitetura de funções modularizada e de responsabilidade única.

## 🧰 Tecnologias Utilizadas
* **Linguagem Principal:** JavaScript (ES6+ / Vanilla JS)
* **Arquitetura de Dados:** API REST (RAWG Engine) com persistência via HTTP Fetch Protocol
* **Camada Visual:** HTML5 Semântico e CSS3 Responsivo
