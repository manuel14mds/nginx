module.exports = {
  apps : [
    {
      name   : "server1",
      script : "src/app.js",
      env:{
        PORT:8080
      }
    },
    {
      name   : "server2",
      script : "src/app.js",
      env:{
        PORT:8081
      }
    },
    {
      name   : "server3cluster",
      script : "src/app.js",
      env:{
        PORT:8082
      },
      exec_mode:"cluster",
      node_args:"--harmony",
      instances:4
    }
]
}
