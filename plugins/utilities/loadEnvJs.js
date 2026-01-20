import { resolve } from 'node:path';

/**
 * Utility to load environment variables set in a JS file, for local development.
 *
 * @see https://github.com/motdotla/dotenv
 */
export default async function loadEnvJs (envJsPathParts = ['./.env.js']) {
  const envJsFile = resolve(...envJsPathParts);
  try {
    await import(envJsFile);
    console.log('.env.js loaded:', process.env);
  } catch (err) {
    console.warn('Warning: .env.js not loaded:', envJsFile, err.code, err.message);
  }
}
