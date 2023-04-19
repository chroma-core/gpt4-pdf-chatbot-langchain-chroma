/**
 * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.
 */

if (!process.env.COLLECTION_NAME) {
  throw new Error('Missing collection name in .env file');
}

const COLLECTION_NAME = process.env.COLLECTION_NAME ?? '';

export { COLLECTION_NAME }