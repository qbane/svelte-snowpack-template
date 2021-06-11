module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  alias: {
    // ...
  },
  plugins: [
    '@snowpack/plugin-svelte',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    sourcemap: false,
    treeshake: true,
    minify: true,
    target: 'es2017',
  },
  packageOptions: {
    env: {
      NODE_ENV: true,
    },
  },
  devOptions: {
    open: 'none',
    output: 'stream',
    hmrDelay: 100
  },
  buildOptions: {
    baseUrl: '.',
  },
}
