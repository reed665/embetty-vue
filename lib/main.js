import EmbettyVideo from '../src/components/EmbettyVideo.vue';

var EmbettyPlugin = {
  /**
   * @param {!VueConstructor} app Vue app.
   * @param {?EmbettyVueOptions} options Options for embetty-vue.
   */
  install: (app, options = {}) => {
    app.component('EmbettyVideo', EmbettyVideo)
    app.config.globalProperties._embettyVueOptions = options
  }
};

export default EmbettyPlugin;
export { EmbettyPlugin, EmbettyVideo };
