# iCAD Design & Construction Website

A mobile-responsive website for iCAD Design & Construction, a construction company based in Galle, Sri Lanka.

## Features

- **Mobile-First Design**: Fully responsive layout optimized for all devices
- **Fast Loading**: Optimized CSS and minimal JavaScript for quick page loads
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Interactive Gallery**: Image lightbox with keyboard and touch navigation
- **Contact Integration**: Click-to-call and WhatsApp links
- **Sticky Contact Bar**: Always-accessible contact buttons on mobile devices
- **Google Maps Integration**: Embedded map showing location in Galle

## Project Structure

```
I-CAD/
├── index.html              # Homepage
├── services.html           # Services page
├── projects.html           # Projects/Gallery page
├── about.html              # About Us page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Main stylesheet (mobile-first)
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── gallery.js         # Image gallery lightbox
├── images/
│   ├── hero/              # Hero section images
│   ├── projects/          # Project gallery images
│   └── icons/             # Service icons
└── README.md              # Project documentation
```

## Setup Instructions

1. **Download/Clone the project** to your local machine

2. **Replace placeholder content**:
   - Update contact information (phone numbers, email, address) in all HTML files
   - Replace placeholder images in `projects.html` with actual project photos
   - Update Google Maps embed in `contact.html` with your exact location
   - Customize text content as needed

3. **Update Contact Information**:
   - Replace `+94XXXXXXXXX` with your actual phone number
   - Replace `info@icad-construction.com` with your actual email
   - Update the WhatsApp number in all WhatsApp links
   - Update the address in `contact.html` and structured data

4. **Add Images**:
   - Replace placeholder images in the gallery with your project photos
   - Add a hero image if desired (update `index.html`)
   - Add service icons if you prefer custom icons over emojis

5. **Deploy**:
   - Upload all files to your web server
   - Ensure all file paths are correct (relative paths are used)
   - Test on mobile and desktop devices

## Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #1e3a5f;      /* Main brand color */
  --secondary-color: #2c5f7c;    /* Secondary color */
  --accent-color: #ff6b35;       /* Accent/CTA color */
  /* ... more variables ... */
}
```

### Content

- All text content can be edited directly in the HTML files
- Service descriptions can be customized in `services.html`
- Company information can be updated in `about.html`
- Structured data (JSON-LD) should be updated in `index.html` with your actual business information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal JavaScript (vanilla JS, no frameworks)
- Optimized CSS with efficient selectors
- Lazy loading for gallery images
- Compressed image placeholders (replace with optimized images)

## SEO

The website includes:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data (JSON-LD) for LocalBusiness
- Semantic HTML5 elements
- Alt text for all images
- Proper heading hierarchy

## Contact Form

The contact form currently uses a `mailto:` link to open the user's email client. For production use, you may want to:
- Integrate with a form handling service (e.g., Formspree, Netlify Forms)
- Add a backend API to handle form submissions
- Add email notification system

## License

© 2024 iCAD Design & Construction. All rights reserved.

## Support

For questions or support, please contact:
- Email: info@icad-construction.com
- Phone: +94-XXX-XXXXXXX

