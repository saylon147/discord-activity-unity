<script setup>
import UnityWebgl from 'unity-webgl'
import VueUnity from 'unity-webgl/vue'

const unityContext = new UnityWebgl({
  loaderUrl: '/Build/webgl.loader.js',
  dataUrl: '/Build/webgl.data.br',
  frameworkUrl: '/Build/webgl.framework.js.br',
  codeUrl: '/Build/webgl.wasm.br',
})

unityContext.on('device', () => alert('click device ...'))
</script>

<template>
  <div id="app">
    <VueUnity :unity="unityContext" width="100vw" height="100vh" />
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black; /* 可选: 让背景变黑 */
}

canvas {
  width: 100vw !important;
  height: 100vh !important;
  max-width: 100%;
  max-height: 100%;
}
</style>
