import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import path from "path"
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer"
import postcssPxToViewport from "postcss-px-to-viewport-8-plugin"

function resolve(name) {
  return path.join(__dirname,name)
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src')
    },
    extensions: ['.ts', '.tsx','.jsx','.js', '.json']
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxToViewport({
          unitToConvert: "px",
          viewportWidth: 750,
          unitPrecision: 3,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          // exclude: [/node_modules/,/^(?!.*h5)/],
          landscape: false,
        })
      ]
    }
  },


  plugins: [
    react(),
    viteCompression({
      deleteOriginFile: true
    }),
    svgr()
  ],
})
