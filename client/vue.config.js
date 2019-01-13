console.log("Dev config");
module.exports = {
  devServer: {
    proxy: {
      "/student/login": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: false
      },
      "/student/verify": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: false
      }
    }
  }
};
