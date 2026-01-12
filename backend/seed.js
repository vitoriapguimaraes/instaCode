import "dotenv/config";
import { MongoClient } from "mongodb";

const seedData = [
  {
    description: "E-commerce Full Stack com React e Node.js",
    imgUrl: "https://placehold.co/600x400/222/FFF?text=E-commerce+App",
    alt: "Interface de E-commerce",
  },
  {
    description: "API de Gerenciamento de Tarefas (REST)",
    imgUrl: "https://placehold.co/600x400/379777/FFF?text=Task+API",
    alt: "Código da API",
  },
  {
    description: "Dashboard Financeiro com Python (Pandas)",
    imgUrl: "https://placehold.co/600x400/45474b/FFF?text=Finance+Dashboard",
    alt: "Gráficos Financeiros",
  },
  {
    description: "Landing Page Responsiva para Startups",
    imgUrl: "https://placehold.co/600x400/e0e0e0/333?text=Landing+Page",
    alt: "Design Responsivo",
  },
  {
    description: "Clone do Instagram (Backend + Frontend)",
    imgUrl: "https://placehold.co/600x400/ff3366/FFF?text=Instabytes+Project",
    alt: "Clone Instagram",
  },
  {
    description: "Bot Discord com Integração API",
    imgUrl: "https://placehold.co/600x400/7289da/FFF?text=Discord+Bot",
    alt: "Bot Discord",
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
