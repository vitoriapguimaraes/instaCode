import "dotenv/config";
import { MongoClient } from "mongodb";

const seedData = [
  {
    description:
      "BookStack AI - Gerenciamento de biblioteca pessoal com sugestões de IA e analytics.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/bookstack-ai/raw/main/frontend/public/demo/navigation.gif",
    alt: "BookStack AI Demo",
  },
  {
    description:
      "Utilitários Consolidados - Hub de ferramentas de automação (PDF, Áudio, Imagens) com IA.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/productivityHub/raw/main/demo/navigation.gif",
    alt: "Utilitários Consolidados Demo",
  },
  {
    description:
      "ArcadeHub - Plataforma unificada de jogos clássicos e interativos modernizados.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/arcadeHub/raw/main/public/demo/navigation.gif",
    alt: "ArcadeHub Demo",
  },
  {
    description:
      "Mathematics Hub - Hub unificado com 3 ferramentas (Média, Conversor, Calculadora).",
    imgUrl:
      "https://github.com/vitoriapguimaraes/mathematicsHub/raw/main/demo/navigation.gif",
    alt: "Mathematics Hub Demo",
  },
  {
    description:
      "Recicla Certo - Aplicação web que simplifica a reciclagem no dia a dia.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/reciclaCerto/raw/main/results/display.gif",
    alt: "Recicla Certo Demo",
  },
  {
    description:
      "MediApp - Sistema de gestão médica com prontuários, receitas e agendamento.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/medicalRecord/raw/main/docs/ConsultorioMedico-drawio.png",
    alt: "MediApp Arquitetura",
  },
  {
    description:
      "Clone do Spotify (React) - Recriação da interface focado em responsividade e UX.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/cloneSpotify-react/raw/main/public/demos/screenshot_home.png",
    alt: "Clone Spotify React",
  },
  {
    description: "Clone do Spotify - Recriação da interface (Home e Busca).",
    imgUrl:
      "https://github.com/vitoriapguimaraes/cloneSpotify/raw/main/results/display-PaginaSpotify.gif",
    alt: "Clone Spotify Demo",
  },
  {
    description: "Instabytes - Gerenciamento de posts com upload e IA.",
    imgUrl: "https://placehold.co/600x400/ff3366/FFF?text=Instabytes",
    alt: "Instabytes Project",
  },
  {
    description: "Meu Portfolio - Site interativo com todos os meus projetos.",
    imgUrl: "https://placehold.co/600x400/222/FFF?text=Portfolio",
    alt: "Portfolio Project",
  },
  {
    description: "APP SOS Cancer - Projeto voluntário para ONG de Pongaí.",
    imgUrl: "https://placehold.co/600x400/e91e63/FFF?text=SOS+Cancer",
    alt: "SOS Cancer App",
  },
  {
    description: "TechTaste - App mobile tipo iFood feito em Flutter.",
    imgUrl:
      "https://github.com/vitoriapguimaraes/Flutter-TechTaste/raw/main/software_view.gif",
    alt: "TechTaste Demo",
  },
  {
    description:
      "Automação Cadastro Produtos - Preenchimento automático via CSV.",
    imgUrl: "https://placehold.co/600x400/379777/FFF?text=Automacao+Cadastro",
    alt: "Automação Python",
  },
  {
    description: "Automação Backup - Backups organizados por data e hora.",
    imgUrl: "https://placehold.co/600x400/45474b/FFF?text=Automacao+Backup",
    alt: "Backup Python",
  },
  {
    description: "HashZap - Chat em tempo real com Flask-SocketIO.",
    imgUrl: "https://placehold.co/600x400/7289da/FFF?text=HashZap",
    alt: "Chat HashZap",
  },
  {
    description: "Relatórios Email - Envio automático de relatórios HTML.",
    imgUrl: "https://placehold.co/600x400/e0e0e0/333?text=Relatorio+Email",
    alt: "Automação Email",
  },
];

async function seed() {
  console.log("Conectando ao banco...");
  const client = new MongoClient(process.env.CONNECTION_STRING);

  try {
    await client.connect();
    console.log("Conectado!");

    const db = client.db("imersao-istabytes");
    const collection = db.collection("posts");

    console.log("Inserindo posts iniciais...");
    const result = await collection.insertMany(seedData);

    console.log(`${result.insertedCount} posts inseridos com sucesso!`);
  } catch (err) {
    console.error("Erro ao inserir dados:", err);
  } finally {
    await client.close();
    console.log("Conexão fechada.");
  }
}

seed();
