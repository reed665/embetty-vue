import EmbettyTweet from '../src/components/EmbettyTweet.vue';
import EmbettyVideo from '../src/components/EmbettyVideo.vue';

var EmbettyPlugin = {
  /**
   * @param {!VueApp} app Vue app.
   * @param {?EmbettyVueOptions} options Options for embetty-vue.
   */
  install: (app, options = {}) => {
    app.component('EmbettyTweet', EmbettyTweet)
    app.component('EmbettyVideo', EmbettyVideo)
    app.config.globalProperties._embettyVueOptions = options
  }
};

export default EmbettyPlugin;
export { EmbettyPlugin, EmbettyTweet, EmbettyVideo };
