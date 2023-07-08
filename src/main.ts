import './app.css'
import App from './App.svelte'

const targetElement = document.getElementById('app');
let app;

if (targetElement) {
  app = new App({
    target: targetElement,
  })
}
else console.log("APP BROKE : TARGET ELEMENT NOT FOUND")

export default app
