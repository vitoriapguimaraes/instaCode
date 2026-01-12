import "dotenv/config";
import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js";

let connection;
try {
  connection = await connectToDatabase(process.env.CONNECTION_STRING);
} catch (e) {
  connection = null;
}

// Mock data for offline mode
let mockPosts = [
  {
    _id: "mock1",
    description: "Post de exemplo (Modo Offline)",
    imgUrl: "http://localhost:3000/assets/cat.png", // Example image
    alt: "Gato fofo",
  },
  {
    _id: "mock2",
    description: "Outro post de exemplo",
    imgUrl: "http://placecats.com/300/200",
    alt: "Gatinho",
  },
];

// Função assíncrona para buscar todos os posts do banco de dados
export async function getAllPosts() {
  if (!connection) {
    return mockPosts;
  }
  // Seleciona o banco de dados "imersao-instabytes"
  const db = connection.db("imersao-istabytes");
  // Seleciona a coleção "posts" dentro do banco de dados
  const collection = db.collection("posts");
  // Retorna um array com todos os documentos da coleção
  return collection.find().toArray();
}

export async function createPost(newPost) {
  if (!connection) {
    const mockPost = { ...newPost, _id: `mock${Date.now()}` };
    mockPosts.push(mockPost);
    return { insertedId: mockPost._id };
  }
  const db = connection.db("imersao-istabytes");
  const collection = db.collection("posts");
  return collection.insertOne(newPost);
}

export async function updatePost(id, newPost) {
  if (!connection) {
    const index = mockPosts.findIndex((p) => p._id === id);
    if (index !== -1) {
      mockPosts[index] = { ...mockPosts[index], ...newPost };
      return { modifiedCount: 1 };
    }
    return { modifiedCount: 0 };
  }
  const db = connection.db("imersao-istabytes");
  const collection = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(objID) }, { $set: newPost });
}
