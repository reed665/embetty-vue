<template>
  <div id="app">
    <h1>embetty-vue</h1>

    <header>Also try resizing the page!</header>

    <h2>Setup</h2>

    <article>
      <h3>NPM</h3>
      <pre class="language-js"><code>import EmbettyVue from 'embetty-vue';

      Vue.use(EmbettyVue, {
      // required
      serverUrl: '/path/to/embetty-server', // without trailing spaces

      // optional
      posterImageMode: 'cover' // or 'contain', see example below
      });</code></pre>
    </article>


    <h2>Video</h2>

    <article>
      <h3>YouTube</h3>
      <embetty-video type="youtube" video-id="m6UOo2YGbIE" />
      <pre class="language-html"><code>&lt;embetty-video type="youtube" video-id="m6UOo2YGbIE" /&gt;</code></pre>
    </article>

    <article>
      <h3>YouTube with <code>width</code></h3>
      <p>Aspect ratio of 16:9 is preserved.</p>
      <embetty-video :width="500" type="youtube" video-id="3L4fHrIJ3A4" />
      <pre class="language-html"><code>&lt;embetty-video :width="500" type="youtube" video-id="3L4fHrIJ3A4" /&gt;</code></pre>
    </article>

    <article>
      <h3>YouTube with <code>height</code> and <code>width</code></h3>
      <p>Poster image is cropped.</p>
      <embetty-video
        :width="500"
        :height="200"
        type="youtube"
        video-id="3L4fHrIJ3A4" />
      <pre class="language-html"><code>&lt;embetty-video
      :width="500"
      :height="200"
      type="youtube"
      video-id="3L4fHrIJ3A4" /&gt;</code></pre>
    </article>

    <article>
      <h3>YouTube with <code>height</code> and <code>poster-image-mode="contain"</code></h3>
      <p>Width is still 100%.</p>
      <embetty-video
        :height="200"
        type="youtube"
        video-id="3L4fHrIJ3A4"
        poster-image-mode="contain" />
      <pre class="language-html"><code>&lt;embetty-video
      :height="200"
      type="youtube"
      video-id="3L4fHrIJ3A4"
      poster-image-mode="contain" /&gt;</code></pre>
    </article>

    <article>
      <h3>YouTube with <code>start-at</code> (human readable syntax)</h3>
      <embetty-video type="youtube" video-id="m6UOo2YGbIE" start-at="2h53m19s" />
      <pre class="language-html"><code>&lt;embetty-video type="youtube" video-id="m6UOo2YGbIE" start-at="2h53m19s" /&gt;</code></pre>
    </article>

    <article>
      <h3>Vimeo with <code>start-at</code> (in seconds as a string)</h3>
      <embetty-video type="vimeo" video-id="1084537" start-at="97" />
      <pre class="language-html"><code>&lt;embetty-video type="vimeo" video-id="1084537" start-at="97" /&gt;</code></pre>
    </article>

    <article>
      <h3>Vimeo with <code>start-at</code> (in seconds as a number)</h3>
      <embetty-video :start-at="97" type="vimeo" video-id="1084537" />
      <pre class="language-html"><code>&lt;embetty-video type="vimeo" video-id="1084537" :start-at="97" /&gt;</code></pre>
    </article>

    <article>
      <h3>Facebook</h3>
      <embetty-video type="facebook" video-id="10156049485672318" />
      <pre class="language-html"><code>&lt;embetty-video type="facebook" video-id="10156049485672318" /&gt;</code></pre>
    </article>
  </div>
</template>

<style lang="scss">
// Demo styling
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  max-width: 900px;
  margin: 0 auto;
}

header {
  padding: 1ex;
  margin: 1.5em 0 2.5em;
  background: rgb(255, 238, 140);
}

article {
  margin-bottom: 2.5em;
}

.my-theme {
  --embetty-border-color: red;
  --embetty-font-family: 'Comic Sans MS'
}
</style>

<script>
export default {
  name: 'App'
};
</script>
