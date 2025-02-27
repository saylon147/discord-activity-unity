import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { patchUrlMappings } from '@discord/embedded-app-sdk';

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
    console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
    await discordSdk.ready();
}

async function setApp() {
    patchUrlMappings([{ prefix: '/Build', target: 'https://period-brown-values-geographical.trycloudflare.com/Build' }]);
}

setApp();

createApp(App).mount('#app')
