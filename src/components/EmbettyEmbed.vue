<script>
export default {
  name: 'EmbettyEmbed',
  props: {
    serverUrl: {
      type: String,
      required: false,
      default: null,
    },
  },
  /**
   * @returns {!object} Component's data.
   */
  data() {
    return {
      fetched: false,
      data: undefined,
    }
  },
  computed: {
    /**
     * Override this in child components!
     * @returns {string | undefined} The URL to query for data in this component.
     */
    url() {
      return undefined
    },

    /**
     * @returns {!string} The server URL, either from this component's prop or the global config.
     */
    _serverUrl() {
      if (this.serverUrl)
        return this.serverUrl

      if (!this._embettyVueOptions.serverUrl)
        throw new Error(`serverUrl is neither set directly on the ${this.$vnode.tag} component nor globally.`)

      return this._embettyVueOptions.serverUrl
    },
  },
  watch: {
    url: {
      immediate: true,
      /**
       * @param {?string} url The newly set URL.
       */
      handler(url) {
        if (url)
          this.fetchData()
      },
    },
  },
  methods: {
    /**
     * Calls the API of embetty-server using the url set in the calling (child) component.
     */
    fetchData() {
      // skip fetching in SSR
      if (typeof window === 'undefined')
        return

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const thisCmp = this
      window.fetch(this.url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          thisCmp.data = data
          thisCmp.fetched = true
        })
    },

    /**
     * @param {?string} apiEndpoint The API endpoint of the embetty-server.
     * @returns {?string} The given URL, prepended with the embetty-server base URL.
     */
    _api(apiEndpoint) {
      return apiEndpoint ? (this._serverUrl + apiEndpoint) : undefined
    },
  },
}
</script>
