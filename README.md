# !!! WORK IN PROGRESS !!!

# embetty-vue-3 [![npm](https://img.shields.io/npm/v/embetty-vue-3.svg)](https://www.npmjs.com/package/embetty-vue-3)

Embetty displays remote content like videos without compromising your privacy.

This is a Vue.js alternative to the original [embetty](https://github.com/heiseonline/embetty) implementation (which is based on Web Components). To use it, you need to have a [embetty server](https://github.com/heiseonline/embetty-server) up and running.


## Usage

### Setup when using a bundler (webpack, rollup, etc.)

```js
import { createApp } from 'vue'

import EmbettyVue3 from 'embetty-vue-3'
import 'embetty-vue-3/dist/styles.css'

import App from './App.vue'

createApp(App)
  .use(EmbettyVue3, {
    // optional, but recommended
    serverUrl: '/path/to/embetty-server', // without trailing slash

    // optional
    posterImageMode: 'cover' // or 'contain'
  })
  .mount('#app')
```

### Using the components

```html
<embetty-video type="youtube" video-id="m6UOo2YGbIE" />
```

If you didn't specify the server URL globally (either the options passed to `Vue.use` or the `<meta>` tag), you must specify it on every component:

```html
<embetty-video server-url="/path/to/embetty-server" type="youtube" video-id="m6UOo2YGbIE" />
```

See [`src/App.vue`](src/App.vue) for a lot of examples and component options.


## Differences to original implementation

*embetty-vue-3*'s `<embetty-video>` component supports type `native`: Provide an URL to a video file as `video-id` to load it on click in a `<video>` HTML element.


## Development

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
