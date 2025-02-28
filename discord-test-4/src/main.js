import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import the SDK
import { DiscordSDK, Common } from "@discord/embedded-app-sdk";
import { patchUrlMappings } from '@discord/embedded-app-sdk';

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
    console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
    await discordSdk.ready();
    discordSdk.commands.setOrientationLockState({ lock_state: Common.OrientationLockState.PORTRAIT });
}

async function setApp() {
    patchUrlMappings([{ prefix: '/Build', target: 'https://danger-led-dvds-rod.trycloudflare.com/Build' }]);
}

setApp();

createApp(App).mount('#app')
