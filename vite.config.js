import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [
//         react(),
//     ],
//     server: {
//         https: {
//         key: fs.readFileSync('./key.pem'),
//         cert: fs.readFileSync('./cert.pem'),
//         },
//         host: true,
//         port: 5173,
//   },
// })


export default defineConfig(({ command }) => {
  // When running `vite serve` locally - using key pem for https
  if (command === 'serve') {
    return {
      plugins: [react()],
      server: {
        https: {
          key: fs.readFileSync('./key.pem'),
          cert: fs.readFileSync('./cert.pem'),
        },
        host: true,
        port: 5173,
      },
    }
  } 
  
  // netlify production
  else {
    return {
      plugins: [react()],
    }
  }
})