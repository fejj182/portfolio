# Vercel Deployment Spike - 20-01-2025

## Overview
This spike covers everything you need to know about deploying and managing your Astro portfolio on Vercel going forward.

## Current Setup Analysis

### Project Configuration
- **Framework**: Astro 5.14.6
- **Site URL**: https://jeff.dev (configured in astro.config.mjs)
- **Build Command**: `astro build` (default)
- **Output Directory**: `dist/` (default)
- **Node Version**: Not explicitly configured (Vercel auto-detects)

### Current State
- ✅ Successfully deployed to Vercel
- ✅ Custom domain configured (jeff.dev)
- ✅ No custom Vercel configuration files found
- ✅ Using default Astro build settings

## Essential Vercel Knowledge Areas

### 1. Deployment Management

#### Automatic Deployments
- **Git Integration**: Every push to main branch triggers automatic deployment
- **Preview Deployments**: Pull requests get preview URLs for testing
- **Branch Protection**: Configure branch protection rules for production safety

#### Manual Deployments
```bash
# Deploy from local
vercel --prod

# Deploy preview
vercel
```

#### Rollback Strategy
- Use Vercel dashboard to rollback to previous deployments
- Keep deployment history for quick rollbacks
- Test rollback procedures in staging environment

### 2. Environment Configuration

#### Environment Variables
- **Production**: Set in Vercel dashboard under Project Settings
- **Preview**: Inherits from production unless overridden
- **Development**: Use `.env.local` (not committed to git)

#### Common Variables for Astro
```bash
# Site URL for production
PUBLIC_SITE_URL=https://jeff.dev

# Analytics (if using)
PUBLIC_GA_ID=your-ga-id

# API endpoints
PUBLIC_API_URL=https://api.jeff.dev
```

### 3. Performance Optimization

#### Build Optimization
- **Static Generation**: Astro generates static files by default
- **Image Optimization**: Use Astro's built-in image optimization
- **Code Splitting**: Automatic with Astro's build process

#### Caching Strategy
- **Static Assets**: Automatically cached by Vercel CDN
- **Cache Headers**: Configure in `vercel.json` if needed
- **ISR**: Consider for dynamic content if needed

#### Core Web Vitals Monitoring
- Enable Vercel Analytics for performance insights
- Monitor LCP, FID, CLS metrics
- Use Speed Insights for real user monitoring

### 4. Security Considerations

#### Security Headers
Create `vercel.json` for custom headers:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

#### Content Security Policy (CSP)
- Implement CSP headers for XSS protection
- Configure for external resources (fonts, images, scripts)
- Test thoroughly to avoid breaking functionality

### 5. Domain and DNS Management

#### Custom Domain Setup
- **Primary Domain**: jeff.dev (already configured)
- **WWW Redirect**: Configure www.jeff.dev → jeff.dev
- **SSL Certificate**: Automatic with Vercel
- **DNS Records**: Managed through Vercel dashboard

#### Domain Best Practices
- Use HTTPS everywhere (automatic with Vercel)
- Configure proper redirects
- Set up subdomains if needed (blog.jeff.dev, api.jeff.dev)

### 6. Monitoring and Analytics

#### Vercel Analytics
- Enable in project settings
- Track page views, performance metrics
- Monitor Core Web Vitals
- Set up custom events if needed

#### Error Tracking
- Consider integrating Sentry or similar
- Monitor 404 errors and broken links
- Set up alerts for critical errors

#### Uptime Monitoring
- Use external services (UptimeRobot, Pingdom)
- Monitor site availability
- Set up incident response procedures

### 7. Content Management

#### Content Updates
- **Blog Posts**: Add new markdown files in `src/content/blog/`
- **Projects**: Update files in `src/content/projects/`
- **Automatic Deployment**: Changes trigger new builds
- **Preview**: Test changes in preview deployments first

#### Content Strategy
- Use consistent frontmatter across content
- Optimize images before adding to content
- Consider content scheduling for regular updates

### 8. Development Workflow

#### Local Development
```bash
# Start development server
npm run dev

# Build locally
npm run build

# Preview production build
npm run preview
```

#### Testing Strategy
- Test builds locally before pushing
- Use preview deployments for testing
- Implement automated testing if needed
- Test on different devices and browsers

#### Git Workflow
- Use feature branches for new content
- Test in preview deployments before merging
- Use conventional commits for better tracking
- Keep main branch stable and deployable

### 9. Cost Management

#### Vercel Pricing Tiers
- **Hobby**: Free tier (suitable for personal portfolios)
- **Pro**: $20/month (for commercial use)
- **Enterprise**: Custom pricing

#### Usage Monitoring
- Monitor bandwidth usage
- Track function invocations
- Set up usage alerts
- Optimize images and assets to reduce costs

### 10. Backup and Recovery

#### Code Backup
- Git repository serves as primary backup
- Regular pushes to remote repository
- Consider multiple remote repositories

#### Content Backup
- Content files are in git repository
- Regular commits for content changes
- Consider automated backups for critical data

#### Disaster Recovery
- Document deployment procedures
- Keep deployment scripts versioned
- Test recovery procedures regularly

## Action Items

### Immediate (Next 7 Days)
- [ ] Set up Vercel Analytics
- [ ] Configure security headers in `vercel.json`
- [ ] Test preview deployment workflow
- [ ] Set up monitoring alerts

### Short Term (Next 30 Days)
- [ ] Implement error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Optimize images and assets
- [ ] Create deployment documentation

### Long Term (Next 90 Days)
- [ ] Implement automated testing
- [ ] Set up CI/CD pipeline
- [ ] Consider performance optimizations
- [ ] Plan for scaling if needed

## Useful Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/vercel/)
- [Vercel Analytics](https://vercel.com/analytics)
- [Core Web Vitals](https://web.dev/vitals/)

## Notes

- Your site is currently live at https://jeff.dev
- No custom Vercel configuration needed for basic Astro deployment
- Consider adding `vercel.json` for advanced configuration
- Monitor performance and user experience regularly
- Keep dependencies updated for security and performance

---

*This spike was created on 20-01-2025 to document Vercel deployment knowledge for the portfolio project.*
