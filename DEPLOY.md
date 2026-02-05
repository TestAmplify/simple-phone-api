# EC2 Deployment Guide

This guide details the steps to set up your EC2 instance to host the **Simple Phone API** and ensure it runs reliably.

## Prerequisites
- An AWS EC2 instance (Ubuntu 20.04/22.04 recommended).
- SSH access to the instance.
- A domain name pointing to the EC2 public IP (already set up as `http://phone-api.testamplify.io/`).

## Step 1: Initial Server Setup (Run these on EC2)

Connect to your EC2 instance via SSH:
```bash
ssh -i /path/to/key.pem ubuntu@your-ec2-ip
```

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install Node.js (v18 or LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node -v # Verify installation
```

### 3. Install PM2 (Process Manager)
PM2 ensures the app stays alive and restarts automatically.
```bash
sudo npm install -g pm2
```

### 4. Install Nginx (Reverse Proxy)
Nginx will handle incoming HTTP traffic on port 80 and forward it to our app on port 3000.
```bash
sudo apt install -y nginx
```

## Step 2: Configure Nginx

Create a configuration file for your domain:
```bash
sudo nano /etc/nginx/sites-available/simple-phone-api
```

Paste the following configuration:
```nginx
server {
    listen 80;
    server_name phone-api.testamplify.io;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the configuration and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/simple-phone-api /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default # Remove default site if not needed
sudo nginx -t # Test configuration
sudo systemctl restart nginx
```

## Step 3: Application Setup

### 1. Create Deployment Directory
```bash
sudo mkdir -p /var/www/myapp
sudo chown -R $USER:$USER /var/www/myapp
```

### 2. Manual First Deployment (Optional but Recommended)
You can clone the repo directly or let the GitHub Action handle it. If setting up manually:
```bash
git clone https://github.com/your-repo/simple-phone-api.git /var/www/myapp
cd /var/www/myapp
npm install
```

## Step 4: Start Application with PM2

Navigate to your app directory and start the app using the ecosystem file we created:
```bash
cd /var/www/myapp
pm2 start ecosystem.config.js --env production
```

### Save PM2 List
To ensure the app restarts on server reboot:
```bash
pm2 save
pm2 startup
```
**Important:** The `pm2 startup` command will generate a command starting with `sudo env PATH=...`. You **must copy and run that command** to finalize the setup.

Example output to copy/paste:
```bash
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

## Step 5: Verify Deployment
- Visit `http://phone-api.testamplify.io/` in your browser.
- Check logs if needed: `pm2 logs`

## Step 6: GitHub Actions (CI/CD)
The project is configured with `.github/workflows/deploy.yml` to automatically deploy changes.
Ensure you have set the following **Secrets** in your GitHub Repository settings:
- `DEPLOY_KEY`: Your private SSH key (PEM format).
- `HOST`: The public IP of your EC2 instance.
- `USER`: The username (usually `ubuntu`).
- `TARGET_DIR`: `/var/www/myapp`
