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
      },
      "/student/signup": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: false
      },
      "/student/forget": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: false
      },
      "/student/info": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: false
      }
    }
  }
};
