console.log("Dev config");
module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:5000"
      }
    }
  }
};
