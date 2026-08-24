import { SERVICES } from '@/lib/services-data';
import { INDUSTRIES } from '@/lib/industries-data';
import { BLOGS_DATA } from '@/lib/blogs-data';
import { REPORTS_DATA } from '@/lib/reports-data';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://master-tech-alpha.vercel.app';
  const currentDate = new Date().toISOString();

  // 1. Core Static Pages
  const staticPages = [
    '',
    '/who-we-are',
    '/who-we-are/about-mimang',
    '/who-we-are/mission-and-values',
    '/who-we-are/our-vision',
    '/who-we-are/our-story',
    '/who-we-are/the-firm',
    '/what-we-do',
    '/industries',
    '/our-work',
    '/blogs',
    '/reports',
    '/insights',
    '/careers',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('/') && route.split('/').length > 2 ? 0.7 : 0.9,
  }));

  // 2. Dynamic Service Capabilities Routes
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/what-we-do/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 3. Dynamic Industry Verticals Routes
  const industryPages = INDUSTRIES.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 4. Dynamic Thought Leadership / Blog Routes
  const blogPages = BLOGS_DATA.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 5. Dynamic Market Research Reports / Whitepapers Routes
  const reportPages = REPORTS_DATA.map((report) => ({
    url: `${baseUrl}/reports/${report.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...blogPages,
    ...reportPages,
  ];
}
