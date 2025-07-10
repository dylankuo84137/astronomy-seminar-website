# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for an astronomy seminar (天文、幾何與人智學研討會) featuring Dr. Oliver Conradt. The website documents a 3-day seminar on astronomy, geometry, and anthroposophy held at a Waldorf school in Taiwan.

**Last Updated**: July 10, 2025 - Restructured for better maintainability: separated CSS and JavaScript into external files

## Architecture

### Single-Page Application Structure
- **Static HTML**: `index.html` with clean, semantic markup
- **External CSS**: `styles.css` containing all styling for better maintainability
- **External JavaScript**: `script.js` containing all interactive functionality
- **Client-Side Navigation**: JavaScript-based section switching without page reloads
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Content Organization
The website is organized into main sections:
- **Home** (`#home`): Seminar overview with key concepts
- **Speaker** (`#speaker`): Dr. Oliver Conradt's biography
- **Day 1-3** (`#day1`, `#day2`, `#day3`): Daily schedules with detailed content summaries
- **Topics** (`#topics`): Categorized subject matter (astronomy, geometry, anthroposophy, teaching)
- **Resources** (`#resources`): Audio recordings, PDFs, and educational materials
- **Discussion** (`#discussion`): Live comment system powered by CommentBox.io

### Key Features
- **Navigation System**: Sticky navigation with section-based routing
- **External Links**: Google Drive/Docs integration for resources and meeting notes
- **Interactive Elements**: Hover effects, smooth scrolling, card animations
- **Bilingual Content**: Traditional Chinese with English subtitles and academic terms
- **Comment System**: Integrated CommentBox.io for user discussions and feedback

## Development Commands

### No Build Process Required
This is a static website that runs directly in browsers:
- **Development**: Open `index.html` in any modern web browser
- **Testing**: No specific test commands - manual browser testing across devices
- **Deployment**: Copy `index.html` to any web server or hosting platform

### Quick Start
```bash
# Clone and view
cd /path/to/project
open index.html  # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

## Content Structure

### Data Sources
- **Meeting Records**: Linked Google Docs with session transcripts
- **Audio Files**: Google Drive hosted recordings for each session
- **Educational Materials**: PDFs including GA17 texts, mathematical worksheets, and teaching resources
- **Multilingual Support**: Chinese primary content with English academic references

### Content Management
- All content is hardcoded in HTML with inline styling
- External resources are linked via Google Drive/Docs URLs
- No database or CMS - content updates require direct HTML editing
- Comments are managed through CommentBox.io dashboard (external service)

## Technical Details

### Styling Approach (`styles.css`)
- **External CSS**: All styles in separate stylesheet for better maintainability
- **Color Scheme**: Waldorf-inspired palette (dark blues #2c3e50, warm gold #d4a574)
- **Typography**: Playfair Display for headings, Georgia serif for body text
- **Layout**: CSS Grid for complex layouts, Flexbox for alignment
- **External Fonts**: Google Fonts integration for Playfair Display

### JavaScript Functionality (`script.js`)
- **Section Navigation**: Dynamic show/hide of content sections
- **Event Handling**: Click events for navigation and interactive elements
- **Smooth Scrolling**: Enhanced UX for internal navigation
- **Link Management**: Special handling for external Google Drive links
- **CommentBox.io Integration**: Automated comment system initialization with project ID `5713580993282048-proj`

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No transpilation or polyfills required
- Responsive design works on mobile devices

## Content Editing Guidelines

### Adding New Content
1. **HTML Structure**: Locate the appropriate section in `index.html`
2. **CSS Styling**: Add new styles to `styles.css` following existing patterns
3. **JavaScript Functionality**: Add new interactive features to `script.js`
4. **Navigation**: Update navigation if adding new sections
5. **Testing**: Test responsiveness across device sizes

### Resource Links
- Use Google Drive/Docs for external resources
- Include descriptive anchor text with file types
- Add `target="_blank" rel="noopener"` for security

### Styling Consistency
- **CSS Organization**: All styles in `styles.css` with clear section comments
- **Color Scheme**: Follow established Waldorf-inspired palette
- **Typography**: Use existing font hierarchy (Playfair Display + Georgia)
- **Layout**: Maintain consistent spacing and visual hierarchy

## Third-Party Services

### CommentBox.io Integration
- **Service**: Hosted comment system for static websites
- **Project ID**: `5713580993282048-proj`
- **Features**: User comments, moderation, social login support
- **Management**: Comments managed through CommentBox.io dashboard
- **Styling**: Custom CSS to match website design theme

## Future Enhancements

### Planned Features
- Enhanced search functionality for resources
- Additional comment moderation features
- Email notifications for new comments
- Advanced user authentication options

### Technical Improvements
- Potential migration to modern framework (React, Vue, etc.)
- Build process for optimization (minification, bundling)
- Content management system integration
- Database backend for dynamic content