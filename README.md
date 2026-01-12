# Vitoria.Code | Portfolio Full Stack

> Meu portfólio profissional interativo, desenvolvido para demonstrar minhas habilidades em desenvolvimento Full Stack. O projeto exibe meus principais trabalhos em uma interface moderna e responsiva, utilizando um backend robusto para gerenciamento de conteúdo e integração com IA.

[Link de acesso ao deploy em breve]

![Demonstração do sistema](https://github.com/vitoriapguimaraes/instaCode/blob/main/frontend/navigation.gif)

## Funcionalidades Principais

- **Galeria de Projetos**: Exibição dos meus projetos (GitHub/Web) em cards interativos com screenshots.
- **Detalhes em Modal**: Visualização expandida de cada projeto com descrição, tecnologia e links, navegável sem sair da tela.
- **Backend com IA**: Integração com a Google Gemini API para gerar descrições automáticas de novos projetos (feature herdada do projeto base).
- **Design Responsivo**: Interface adaptada para desktop e mobile, com layout fluido e elementos visuais modernos (cards flutuantes, tipografia limpa).

## Tecnologias Utilizadas

- **Frontend**: HTML5 Semântico, CSS3 Moderno (Flexbox/Grid, Variáveis), JavaScript (ES6+ Modules).
- **Backend**: Node.js, Express.js.
- **Banco de Dados**: MongoDB (Atlas).
- **Integrações/Libs**: Google Gemini AI (Geração de texto), Multer (Upload de arquivos), Cors.

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/vitoriapguimaraes/Nodejs-Instabytes.git
   ```

2. Configure o Backend:

   - Crie um arquivo `.env` na pasta `backend` com suas credenciais:
     ```env
     CONNECTION_STRING="sua_string_de_conexao_mongodb"
     GEMINI_API_KEY="sua_chave_da_api_gemini"
     ```
   - Instale as dependências e inicie:
     ```bash
     cd backend
     npm install
     npm run dev
     ```

3. Configure o Frontend:

   - Em outro terminal:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

4. Acesse a aplicação no navegador (geralmente em http://localhost:1234 ou 8080).

## Estrutura de Diretórios

```
/vitoria-code-portfolio
├── backend/                # API RESTful
│   ├── src/
│   │   ├── config/         # Conexão DB
│   │   ├── controllers/    # Lógica dos endpoints
│   │   ├── models/         # Schemas do MongoDB
│   │   ├── routes/         # Rotas da API
│   │   └── services/       # Integração com IA
│   ├── uploads/            # Armazenamento local de imagens
│   └── seed.js             # Script para popular o banco com projetos
│
└── frontend/               # Interface Web
    ├── assets/
    │   ├── images/         # Ícones e assets
    │   ├── js/             # Lógica (Fetch API, Modal)
    │   └── style.css       # Estilização Global
    ├── photos/             # Imagens de perfil/placeholders
    └── index.html          # Estrutura principal
```

## Status

- ✅ Concluído
- 🛠️ Em manutenção (Adicionando novos projetos continuamente)

> Veja as [issues abertas](https://github.com/vitoriapguimaraes/Nodejs-Instabytes/issues) para sugestões de melhorias.

## Mais Sobre Mim

Acesse os arquivos disponíveis na [Pasta Documentos](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.
