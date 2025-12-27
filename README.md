# The Photo Booth Guy - Modern Website

A modern, responsive website for The Photo Booth Guy, built with Next.js 14, TypeScript, Tailwind CSS, and GSAP animations.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth GSAP animations throughout
- 📱 Mobile-first approach
- 🚀 Optimized for performance
- 🔍 SEO-friendly with proper metadata
- ♿ Accessible design

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd thephotoboothguy.ca
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

```
thephotoboothguy.ca/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── equipment/         # Equipment page
│   ├── contact/           # Contact page
│   ├── templates/         # Templates page
│   └── backdrops/         # Backdrops page
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PackageCard.tsx
│   ├── Testimonial.tsx
│   ├── Gallery.tsx
│   └── ContactForm.tsx
├── lib/                   # Utility functions
│   └── gsap.ts           # GSAP animation utilities
└── public/               # Static assets
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Add Custom Domain**:
   - In your Vercel project settings, go to "Domains"
   - Add `thephotoboothguy.ca`
   - Follow the DNS configuration instructions
   - Your site will be live at your custom domain!

### Option 2: Netlify

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Custom Domain**:
   - In site settings, go to "Domain management"
   - Add your custom domain
   - Configure DNS as instructed

### Option 3: Traditional Hosting

If you prefer traditional hosting:

1. Build the project:
   ```bash
   npm run build
   npm run start
   ```

2. The site will run on port 3000 by default
3. Configure your server to run Node.js
4. Set up a process manager like PM2
5. Configure your web server (nginx/Apache) as a reverse proxy

## Environment Variables

Currently, no environment variables are required. If you need to add:
- Contact form submission endpoint
- Analytics IDs
- API keys

Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Customization

### Adding Images

Replace placeholder images in:
- `app/templates/page.tsx` - Template gallery images
- `app/backdrops/page.tsx` - Backdrop gallery images

Add your images to the `public/` folder and update the image paths.

### Updating Contact Information

Contact information is located in:
- `components/Footer.tsx`
- `app/contact/ContactContent.tsx`

### Modifying Content

All page content is in:
- `app/HomeContent.tsx` - Home page
- `app/equipment/EquipmentContent.tsx` - Equipment page
- `app/contact/ContactContent.tsx` - Contact page
- `app/templates/TemplatesContent.tsx` - Templates page
- `app/backdrops/BackdropsContent.tsx` - Backdrops page

## Contact Form

The contact form is currently set up with a placeholder submission handler. To connect it to a real backend:

1. Update `components/ContactForm.tsx`
2. Replace the setTimeout with an actual API call
3. Consider using services like:
   - Formspree
   - EmailJS
   - Your own API endpoint

## Performance Optimization

The site is already optimized with:
- Image optimization via Next.js Image component
- Code splitting
- Lazy loading
- GSAP animations optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 The Photo Booth Guy. All rights reserved.

## Support

For questions or issues, contact:
- Email: info@photoboothguys.ca
- Phone: 647-378-5332
