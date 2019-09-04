module.exports = {
  configSchema: {
    user: {
      type: 'string',
      default: 'svrx',
      description: 'username for hello world'
    }
  },

  assets: {
    script: ['./client.js']
  },

  hooks: {
    async onCreate({ logger, config }) {
      logger.log(`Hello ${config.get('user')} from server`);
    }
  }
};