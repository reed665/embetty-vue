import EmbettyVideo from './components/EmbettyVideo.vue';

var EmbettyPlugin = {
  /**
   * @param {!VueConstructor} Vue The global Vue object.
   * @param {?EmbettyVueOptions} options Options for embetty-vue.
   */
  install: function(Vue, options) {
    options = options || {};

    Vue.component('EmbettyVideo', EmbettyVideo);
    Vue.prototype._embettyVueOptions = options;
  }
};

export default EmbettyPlugin;
export { EmbettyPlugin, EmbettyVideo };
