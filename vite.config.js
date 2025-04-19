import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv/config'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.PUBLIC_KEY': JSON.stringify(process.env.PUBLIC_KEY),
      'process.env.SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
      'process.env.TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID),
    },
    plugins: [react()],
    base: "/portfolio",
  }
  }
)
