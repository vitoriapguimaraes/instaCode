import "dotenv/config";
import { MongoClient } from "mongodb";

const seedData = [
  {
    description: "Gato fofo explorando o jardim",
    imgUrl: "http://placecats.com/400/400",
    alt: "Gato no jardim",
  },
  {
    description: "Paisagem incrível de montanhas",
    imgUrl: "http://placecats.com/400/401",
    alt: "Montanhas",
  },
  {
    description: "Café da manhã reforçado",
    imgUrl: "http://placecats.com/400/402",
    alt: "Café da manhã",
  },
  {
    description: "Codando em um café",
    imgUrl: "http://placecats.com/400/403",
    alt: "Laptop com código",
  },
  {
    description: "Gatinho dormindo",
    imgUrl: "http://placecats.com/400/404",
    alt: "Gato dormindo",
  },
  {
    description: "Setup gamer neon",
    imgUrl: "http://placecats.com/400/405",
    alt: "Setup gamer",
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
