# Server Configuration for ArchitectUI Angular

This guide provides multiple solutions for handling Angular routing on different server setups.

## The Problem
When accessing URLs like `/architectui-angular-free/dashboards/analytics` directly or refreshing the page, you get a 404 error because the server looks for physical files that don't exist. Angular's client-side routing only works after `index.html` is loaded.

## Solutions by Server Type

### 1. Apache Server (.htaccess) - RECOMMENDED

The build includes an `.htaccess` file with multiple fallback methods. Ensure your Apache server has:

- `mod_rewrite` enabled
- `AllowOverride All` in your virtual host or directory configuration

**Virtual Host Configuration:**
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html
    
    <Directory "/var/www/html/architectui-angular-free">
        AllowOverride All
        Options -MultiViews
    </Directory>
</VirtualHost>
```

### 2. Nginx Server

Add this to your nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    # Handle Angular app in subdirectory
    location /architectui-angular-free/ {
        alias /var/www/html/architectui-angular-free/;
        try_files $uri $uri/ /architectui-angular-free/index.html;
    }
}
```

### 3. PHP Server Fallback

If `.htaccess` doesn't work, set up a custom 404 page:

1. Configure your server to use `404.php` as the error page
2. The included `404.php` file will serve `index.html` for all missing routes

**For cPanel/shared hosting:**
- Upload `404.php` to your directory
- In cPanel Error Pages, set 404 to redirect to `/architectui-angular-free/404.php`

### 4. Node.js/Express Server

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use('/architectui-angular-free', express.static(path.join(__dirname, 'architectui-angular-free')));

// Handle Angular routing
app.get('/architectui-angular-free/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'architectui-angular-free/index.html'));
});

app.listen(3000);
```

### 5. IIS Server (web.config)

Create a `web.config` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/architectui-angular-free/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Testing Your Configuration

1. Upload all files from `dist/architectui-angular-free/browser/` to your server
2. Access your app at `https://your-domain.com/architectui-angular-free/`
3. Try direct URLs:
   - `https://your-domain.com/architectui-angular-free/dashboards/analytics`
   - `https://your-domain.com/architectui-angular-free/elements/buttons-standard`
4. Refresh the page on any route to ensure it works

## Troubleshooting

### Still Getting 404?

1. **Check if mod_rewrite is enabled** (Apache):
   ```bash
   apache2ctl -M | grep rewrite
   ```

2. **Verify AllowOverride** (Apache):
   Your virtual host needs `AllowOverride All`

3. **Check server logs** for specific error messages

4. **Test with PHP fallback**:
   Configure `404.php` as your error page

5. **Verify base href**:
   Ensure `index.html` has `<base href="/architectui-angular-free/">`

### Common Issues

- **Permission errors**: Ensure `.htaccess` has proper permissions (644)
- **Server doesn't support .htaccess**: Use PHP fallback or server-specific config
- **Wrong base path**: Verify base href matches your deployment path
- **Missing files**: Ensure all files from `browser/` folder are uploaded

## Contact Support

If you're still having issues, provide:
1. Server type (Apache, Nginx, shared hosting, etc.)
2. Error logs
3. Your exact deployment URL
4. Server configuration (if accessible)