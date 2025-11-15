# Google Search Console Setup Guide

**Last Updated:** 2025-11-15

This guide provides comprehensive instructions for setting up and using Google Search Console to monitor and optimize karstenwade.com's search performance.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Initial Setup](#initial-setup)
3. [Verification Methods](#verification-methods)
4. [Sitemap Submission](#sitemap-submission)
5. [URL Inspection Tool](#url-inspection-tool)
6. [Performance Monitoring](#performance-monitoring)
7. [Search Analytics](#search-analytics)
8. [Indexing Coverage](#indexing-coverage)
9. [Troubleshooting](#troubleshooting)

---

## Introduction

### What is Google Search Console?

Google Search Console (GSC) is a free tool that helps you:
- Monitor how Google sees your website
- Submit sitemaps for crawling
- Request indexing for new/updated pages
- Track search performance (queries, clicks, impressions)
- Identify and fix indexing issues
- Monitor Core Web Vitals and page experience
- Analyze mobile usability

### Why Use It?

For karstenwade.com, Google Search Console enables:
- **SEO Monitoring:** Track how your content performs in Google Search
- **Indexing Control:** Ensure all pages are discovered and indexed
- **Performance Insights:** Understand which queries drive traffic
- **Issue Detection:** Identify and fix crawling/indexing problems
- **Core Web Vitals:** Monitor page speed and user experience metrics

---

## Initial Setup

### Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account
3. Click "Add Property"

### Step 2: Choose Property Type

**Option 1: Domain Property (Recommended)**
- Covers all subdomains and protocols (http, https, www, non-www)
- Requires DNS verification
- Enter: `karstenwade.com`

**Option 2: URL Prefix Property**
- Covers only specific URL
- Multiple verification methods available
- Enter: `https://karstenwade.com`

**Recommendation:** Use Domain Property for complete coverage.

### Step 3: Verify Ownership

See [Verification Methods](#verification-methods) section below.

---

## Verification Methods

Google offers several ways to verify you own the site. Choose the method that works best for you.

### Method 1: Meta Tag Verification (Easiest for This Site)

**Recommended for karstenwade.com**

1. Google provides a verification meta tag
2. Copy the verification code
3. Add to SEO component:

```tsx
// In any page (e.g., Home.tsx)
<SEO
  googleSiteVerification="your-verification-code-here"
  // ... other props
/>
```

4. Deploy the site
5. Return to Google Search Console
6. Click "Verify"

**Example:**
```html
<meta name="google-site-verification" content="abc123xyz..." />
```

### Method 2: HTML File Upload

1. Download the verification file from Google
2. Place in `public/` directory
3. Deploy the site
4. Verify in Google Search Console

### Method 3: DNS Verification (For Domain Property)

1. Google provides a TXT record
2. Add to DNS provider:
   ```
   Type: TXT
   Host: @ (or karstenwade.com)
   Value: google-site-verification=abc123xyz...
   TTL: 3600
   ```
3. Wait for DNS propagation (up to 48 hours)
4. Click "Verify" in Google Search Console

### Method 4: Google Analytics

If Google Analytics is already installed:
1. Use the same Google account for both tools
2. Google automatically verifies via GA tracking code

---

## Sitemap Submission

### Submit Your Sitemap

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `https://karstenwade.com/sitemap.xml`
3. Click "Submit"

### Monitor Sitemap Status

**Check for:**
- ✅ **Success:** "Sitemap submitted successfully"
- ⚠️ **Warnings:** Partial processing (some URLs failed)
- ❌ **Errors:** Couldn't fetch sitemap

### Sitemap Contents

The sitemap includes:
- Home page: `/`
- Papers: `/papers`
- Writing: `/writing`
- CV: `/cv`
- Theories: `/theories`

### Re-submit After Updates

After adding new pages or updating content:
1. Update `lastmod` dates in `public/sitemap.xml`
2. Deploy the changes
3. Google will automatically re-crawl (or manually re-submit)

---

## URL Inspection Tool

### Inspect a URL

1. Click **URL Inspection** in left sidebar
2. Enter full URL: `https://karstenwade.com/cv`
3. Click "Enter"

### Understand the Results

**If Indexed:**
- Last crawl date
- Canonical URL
- Referring page
- Coverage status

**If Not Indexed:**
- Reason for exclusion
- Option to request indexing

### Request Indexing

1. Inspect the URL
2. Click "Request Indexing"
3. Wait 1-2 minutes for Google to check
4. Google adds to priority crawl queue
5. Typically indexed within 24-48 hours

### When to Request Indexing

- New pages published
- Major content updates
- After fixing indexing errors
- Important time-sensitive content

---

## Performance Monitoring

### Core Web Vitals

1. Go to **Experience** → **Core Web Vitals**
2. Review:
   - **LCP (Largest Contentful Paint):** Should be < 2.5s
   - **FID (First Input Delay):** Should be < 100ms
   - **CLS (Cumulative Layout Shift):** Should be < 0.1

**For karstenwade.com:**
- Monitor all pages
- Focus on mobile performance
- Address issues flagged as "Poor"

### Mobile Usability

1. Go to **Experience** → **Mobile Usability**
2. Check for issues:
   - Text too small
   - Clickable elements too close
   - Content wider than screen
   - Viewport not set

**Expected Result:** Zero issues (site is fully responsive)

### Page Experience Report

1. Go to **Experience** → **Page Experience**
2. Review overall score
3. Identify pages with poor experience
4. Fix issues and monitor improvements

---

## Search Analytics

### Access Search Performance

1. Go to **Performance** (left sidebar)
2. View metrics:
   - **Total Clicks:** Users who clicked your site in search results
   - **Total Impressions:** How often your site appeared in search
   - **Average CTR:** Click-through rate (clicks ÷ impressions)
   - **Average Position:** Average ranking position

### Filter Data

**By Date:**
- Last 7 days, 28 days, 3 months, 6 months, 16 months

**By Query:**
- See which search terms show your site
- Identify high-performing keywords
- Find opportunities for content optimization

**By Page:**
- Which pages get the most traffic
- Which pages have high impressions but low clicks (optimize titles/descriptions)

**By Country:**
- Geographic distribution of traffic

**By Device:**
- Desktop vs. Mobile vs. Tablet

### Optimization Insights

**High Impressions, Low Clicks:**
- Improve meta titles and descriptions
- Make snippets more compelling

**High Position, Low CTR:**
- Enhance snippet appeal
- Add structured data for rich results

**Low Position, High CTR:**
- Good content, needs more authority
- Build internal links
- Acquire backlinks

---

## Indexing Coverage

### Check Index Status

1. Go to **Indexing** → **Pages**
2. Review:
   - **Indexed:** Pages successfully in Google's index
   - **Not Indexed:** Pages excluded or with errors

### Common Exclusions

**Expected (OK):**
- Duplicate without user-selected canonical
- Crawled - currently not indexed

**Needs Attention:**
- Server error (5xx)
- Redirect error
- Blocked by robots.txt
- Page with redirect

### Fix Indexing Issues

1. Click on the error type
2. View affected URLs
3. Use URL Inspection tool for details
4. Fix the underlying issue
5. Request re-indexing

---

## Troubleshooting

### Issue: "DNS Verification Failed"

**Solutions:**
1. Wait 24-48 hours for DNS propagation
2. Check TXT record is correct at DNS provider
3. Try using `dig` command:
   ```bash
   dig karstenwade.com TXT
   ```
4. Ensure no typos in verification string

### Issue: "Sitemap Could Not Be Fetched"

**Solutions:**
1. Verify sitemap URL is accessible:
   ```bash
   curl https://karstenwade.com/sitemap.xml
   ```
2. Check sitemap format is valid XML
3. Ensure robots.txt allows sitemap access
4. Check for redirect loops

### Issue: "Submitted URL Not Found (404)"

**Solutions:**
1. Verify URL exists and is accessible
2. Check for typos in sitemap
3. Ensure page is deployed
4. Test URL in browser

### Issue: "Redirect Error"

**Solutions:**
1. Check for redirect chains (too many redirects)
2. Verify canonical URLs are correct
3. Remove unnecessary redirects
4. Update sitemap with final URLs

### Issue: "Blocked by robots.txt"

**Solutions:**
1. Review `public/robots.txt`
2. Ensure no `Disallow` rules blocking important pages
3. Test with robots.txt tester in GSC
4. Update robots.txt if needed

### Issue: "Page Not Mobile-Friendly"

**Solutions:**
1. Use responsive design (already implemented)
2. Check viewport meta tag is present
3. Ensure text is readable without zooming
4. Test with Mobile-Friendly Test tool

---

## Best Practices

### Regular Monitoring

- **Weekly:** Check for new indexing issues
- **Monthly:** Review search performance trends
- **Quarterly:** Analyze Core Web Vitals and page experience

### When to Check

- After publishing new content
- After major site updates
- When launching new features
- If traffic drops unexpectedly

### Data Export

Export data for analysis:
1. Go to Performance report
2. Click "Export" icon
3. Choose format (Google Sheets, Excel, CSV)
4. Analyze in spreadsheet or BI tool

---

## Additional Resources

### Google Documentation
- [Google Search Console Help](https://support.google.com/webmasters/)
- [Search Console API](https://developers.google.com/webmaster-tools/)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

### Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Support
- [Google Search Central Community](https://support.google.com/webmasters/community)
- [Search Console Twitter](https://twitter.com/googlewmc)

---

## Quick Reference

### Essential URLs
- **Google Search Console:** https://search.google.com/search-console/
- **Sitemap:** https://karstenwade.com/sitemap.xml
- **Robots.txt:** https://karstenwade.com/robots.txt

### Key Metrics to Monitor
- Total indexed pages (should be 5+)
- Average position (track improvements)
- Click-through rate (optimize if < 2%)
- Core Web Vitals (all "Good")
- Mobile usability (zero issues)

### Quick Actions
- **New Page:** Request indexing via URL Inspection
- **Traffic Drop:** Check Coverage report for new errors
- **Poor CTR:** Update meta titles/descriptions
- **Slow Pages:** Review Core Web Vitals report

---

**Questions or Issues?**

Open an issue on GitHub: https://github.com/karstenwade/karstenwade.com/issues

---

*Last verified: 2025-11-15*
