export default (on, config) => {
    // eslint-disable-next-line no-undef
    require('cypress-plugin-snapshots/plugin')(on, config);
    return config;  
  }; 
  