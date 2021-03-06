import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            "displaName": true,
            "fileName": false,
          }
        ]
      ]
    }
  })],
  build: {
    minify: 'esbuild',
    target: "esnext"
  }
})
