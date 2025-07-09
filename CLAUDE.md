# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for an astronomy seminar (天文、幾何與人智學研討會) featuring Dr. Oliver Conradt. The website documents a 3-day seminar on astronomy, geometry, and anthroposophy held at a Waldorf school in Taiwan.

## Architecture

### Single-Page Application Structure
- **Static HTML**: Single `index.html` file with embedded CSS and JavaScript
- **No Build Process**: Pure HTML/CSS/JavaScript - no build tools, package managers, or dependencies
- **Client-Side Navigation**: JavaScript-based section switching without page reloads
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Content Organization
The website is organized into main sections:
- **Home** (`#home`): Seminar overview with key concepts
- **Speaker** (`#speaker`): Dr. Oliver Conradt's biography
- **Day 1-3** (`#day1`, `#day2`, `#day3`): Daily schedules with detailed content summaries
- **Topics** (`#topics`): Categorized subject matter (astronomy, geometry, anthroposophy, teaching)
- **Resources** (`#resources`): Audio recordings, PDFs, and educational materials
- **Discussion** (`#discussion`): Placeholder for future comment system

### Key Features
- **Navigation System**: Sticky navigation with section-based routing
- **External Links**: Google Drive/Docs integration for resources and meeting notes
- **Interactive Elements**: Hover effects, smooth scrolling, card animations
- **Bilingual Content**: Traditional Chinese with English subtitles and academic terms

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

## Technical Details

### Styling Approach
- **Embedded CSS**: All styles in `<style>` tags within HTML head
- **Color Scheme**: Professional academic palette (dark blues, warm oranges)
- **Typography**: Georgia serif for academic feel, custom fonts for headings
- **Layout**: CSS Grid for complex layouts, Flexbox for alignment

### JavaScript Functionality
- **Section Navigation**: Dynamic show/hide of content sections
- **Event Handling**: Click events for navigation and interactive elements
- **Smooth Scrolling**: Enhanced UX for internal navigation
- **Link Management**: Special handling for external Google Drive links

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No transpilation or polyfills required
- Responsive design works on mobile devices

## Content Editing Guidelines

### Adding New Content
1. Locate the appropriate section in `index.html`
2. Follow existing HTML structure and CSS classes
3. Update navigation if adding new sections
4. Test responsiveness across device sizes

### Resource Links
- Use Google Drive/Docs for external resources
- Include descriptive anchor text with file types
- Add `target="_blank" rel="noopener"` for security

### Styling Consistency
- Follow existing color scheme and typography
- Use established CSS classes for cards, buttons, and layouts
- Maintain consistent spacing and visual hierarchy

## Future Enhancements

### Planned Features
- Backend integration for discussion system
- User authentication for comments
- Administrative interface for content management
- Enhanced search functionality for resources

### Technical Improvements
- Potential migration to modern framework (React, Vue, etc.)
- Build process for optimization (minification, bundling)
- Content management system integration
- Database backend for dynamic content