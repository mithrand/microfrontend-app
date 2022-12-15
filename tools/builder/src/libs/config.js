const getConfig = () => ({
  device: process.env.DEVICE || '',
})

module.exports = {
  getConfig,
}