  Express Template

Express Template
================

Este repositório contém um template básico de aplicação em Node.js utilizando o framework Express. O objetivo do projeto foi entender como funciona a estrutura de uma API no Node, criando uma API simples onde cada parte precisa ser configurada manualmente, o que ajuda a aprender e compreender como o Express lida com rotas, middlewares, segurança e documentação de API.

📌 Descrição
------------

A ideia principal deste repositório foi entender os aspectos do Node.js de forma prática, criando uma API do zero onde todos os componentes são configurados manualmente, sem abstrações de bibliotecas como NestJS. Ao longo do desenvolvimento, foi possível aprender como integrar o Express com ferramentas de segurança (Helmet), registrar logs de requisições (Morgan), e criar uma documentação de API com Swagger. O repositório não inclui ainda a comunicação com banco de dados ou ORM, mas fornece uma base sólida para futuras melhorias.

🚀 Como Rodar
-------------

1.  Clone este repositório:
    
        git clone https://github.com/bielsolosos/Express-Template.git
    
2.  Acesse o diretório do projeto:
    
        cd Express-Template
    
3.  Instale as dependências:
    
        npm install
    
4.  Inicie o servidor:
    
        npm run dev
    
5.  O servidor estará rodando em [http://localhost:3000](http://localhost:3000).
6.  A documentação da API estará disponível em [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

📂 Estrutura do Projeto
-----------------------

    src/
      ├── config/        # Configurações da aplicação (ex: Swagger, variáveis de ambiente)
      ├── controllers/   # Lógica de controle dos endpoints da API
      ├── routes/        # Definição das rotas da API
      ├── server.ts      # Arquivo principal de execução do servidor
    

🔧 Tecnologias
--------------

*   **Express.js**: Framework web para Node.js, utilizado para construir a API.
*   **Helmet**: Middleware de segurança, que ajuda a proteger a aplicação contra vulnerabilidades conhecidas configurando cabeçalhos HTTP apropriados.
*   **Morgan**: Middleware para logging HTTP, utilizado para registrar requisições realizadas ao servidor.
*   **Swagger-jsdoc**: Biblioteca para gerar documentação da API automaticamente com base em comentários JSDoc.
*   **Swagger-ui-express**: Biblioteca para servir a documentação da API gerada pelo Swagger.
*   **Typescript**: Linguagem de tipagem estática que foi utilizada para melhorar a qualidade e manutenção do código.
*   **nodemon**: Ferramenta de desenvolvimento para reiniciar automaticamente o servidor quando mudanças no código são detectadas.

🔄 Como Funciona
----------------

O servidor Express é configurado manualmente em seu arquivo `server.ts`. O Swagger é integrado à aplicação para fornecer documentação interativa das rotas, e os middlewares de segurança e logging são adicionados para monitorar o tráfego e proteger a aplicação.

A estrutura de pastas está organizada para separar a lógica da aplicação em camadas, facilitando a manutenção e evolução do projeto. A configuração do Swagger permite que novas rotas sejam automaticamente documentadas sem a necessidade de configurações adicionais para cada uma delas.

⚙️ Middleware
-------------

*   **Helmet**: Aplica headers HTTP de segurança na aplicação.
*   **Morgan**: Registra logs de requisições HTTP feitas ao servidor.
*   **Swagger**: Gera e serve a documentação da API automaticamente.

📦 Dependências
---------------

As dependências principais utilizadas são:

*   **express** - Framework para a criação da API.
*   **helmet** - Middleware de segurança.
*   **morgan** - Middleware para logging de requisições HTTP.
*   **swagger-jsdoc** - Geração automática de documentação Swagger a partir de anotações no código.
*   **swagger-ui-express** - Exibição interativa da documentação gerada pelo Swagger.

🔒 Segurança
------------

O uso do **Helmet** protege a aplicação contra vulnerabilidades comuns, ajustando os cabeçalhos HTTP para aumentar a segurança. O **morgan** é utilizado para gerar logs detalhados de todas as requisições feitas à API, facilitando a depuração e monitoramento.

🔍 Observações
--------------

Este projeto não inclui a integração com banco de dados ou ORM (Object-Relational Mapping) até o momento, mas serve como uma base para futuros aprimoramentos. A ideia é criar uma API simples, mas com uma boa base de segurança e documentação, para que você possa expandir conforme necessário.

💬 Contribuições
----------------

Sinta-se à vontade para fazer um fork deste projeto e contribuir com melhorias, correções ou novos recursos.
