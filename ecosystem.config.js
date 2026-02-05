module.exports = {
  apps: [{
    name: 'simple-phone-api',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    // Error handling log file
    error_file: 'logs/err.log',
    // Output log file
    out_file: 'logs/out.log',
    // Time format in logs
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
};
