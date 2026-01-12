# Guia de Deploy - InstaBytes

Este guia vai te ajudar a colocar seu projeto no ar!

## 1. Backend (API) - Deploy no Render

O Render é ótimo para hospedar APIs Node.js gratuitamente.

1.  Crie uma conta no [Render](https://render.com/).
2.  Clique em **New +** e selecione **Web Service**.
3.  Conecte seu repositório do GitHub.
4.  Nas configurações:
    - **Name**: `instabytes-backend` (ou o que preferir)
    - **Root Directory**: `backend` (Importante! É onde está o `package.json` do servidor)
    - **Build Command**: `npm install`
    - **Start Command**: `npm start` (ou `node server.js`)
    - **Environment Variables** (Variáveis de Ambiente):
      - `CONNECTION_STRING`: Cole a string do MongoDB Atlas aqui.
      - `GEMINI_API_KEY`: Se estiver usando a API do Gemini.
5.  Clique em **Create Web Service**.
6.  Aguarde o deploy finalizar. O Render vai te dar uma URL (ex: `https://instabytes-backend.onrender.com`).
7.  **COPIE ESSA URL**.

## 2. Frontend (Site) - Deploy na Vercel

A Vercel é perfeita para sites estáticos e projetos com Parcel/Vite.

1.  Antes de tudo, no seu código local (`frontend/assets/js/fetchApis.js`), cole a URL do backend que você copiou no passo anterior na variável `PROD_URL`.
    ```javascript
    const PROD_URL = "https://sua-url-do-render.onrender.com";
    ```
2.  Faça o `commit` e `push` dessa alteração para o GitHub.
3.  Crie uma conta na [Vercel](https://vercel.com/).
4.  Clique em **Add New...** -> **Project**.
5.  Importe seu repositório do GitHub.
6.  Nas configurações:
    - **Framework Preset**: Selecione **Other** (ou Parcel se aparecer).
    - **Root Directory**: Clique em `Edit` e selecione a pasta `frontend`.
    - **Build Command**: `npx parcel build index.html` (Geralmente a Vercel detecta, mas garanta que seja algo assim).
    - **Output Directory**: `dist` (Padrão do Parcel).
7.  Clique em **Deploy**.

## Resumo

- **Backend** roda no Render e conecta no MongoDB.
- **Frontend** roda na Vercel e consome a API do Render.
- Quando acessar o site na Vercel, ele saberá automaticamente usar a URL de produção!
