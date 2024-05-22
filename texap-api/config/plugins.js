module.exports = () => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: '...', // Update here your cloud_name
        api_key: '...', // Update here your api_key
        api_secret: '...', // Update here your api_secret
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
