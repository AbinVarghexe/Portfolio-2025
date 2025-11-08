# Design System Documentation

## Overview

This design system is based on the **Figma design** for the Abin Portfolio website. It provides a comprehensive set of design tokens, utilities, and components to ensure consistency across the application.

**Figma Design Link:** [Abin Portfolio](https://www.figma.com/design/UwNN3KEicJ7NYsNT1sCcCw/Abin-Portfolio?node-id=107-1040)

---

## Table of Contents

1. [Colors](#colors)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Components](#components)
5. [Usage Examples](#usage-examples)

---

## Colors

### Primary Colors

```typescript
import { colors } from '@/lib/design-system';

colors.primary      // #0b0b0c - Primary text/elements
colors.blue         // #0020d7 - Blue accent color
colors.indigo       // #0e0e2c - Indigo (darker blue)
colors.whiteMain    // #fafcfe - Off-white
```

### Text Colors

```typescript
colors.text.body      // #4a4a68 - Body text
colors.text.secondary // #323232 - Secondary text
colors.text.muted     // #c1c1c1 - Muted text
colors.text.dark      // #1e2939 - Dark text
```

### Background Colors

```typescript
colors.background.main      // #ececec - Main background
colors.background.card      // #e1e1e1 - Card background
colors.background.secondary // #e4e3e3 - Secondary background
colors.background.tertiary  // #d9d9d9 - Tertiary background
colors.background.accent    // #d8d8d8 - Accent background
```

### Border Colors

```typescript
colors.border.primary   // #aaaaaa
colors.border.secondary // #b4b4b4
colors.border.tertiary  // #a4a4a4
colors.border.light     // #c2c2c2
colors.border.medium    // #9b9b9b
colors.border.dark      // #929292
colors.border.card      // #c4c4c4
```

### Gradients

```typescript
import { gradients } from '@/lib/design-system';

gradients.blue // Linear gradient: #7da3f6 → #0020d7
gradients.gray // Linear gradient: #484848 → #333333
gradients.text // Linear gradient: #3c3c3c → #323232
```

---

## Typography

### Font Families

```typescript
typography.fonts.display // "Kangki" - Display/Hero text
typography.fonts.sans    // "Poppins" - Body text
```

### Font Sizes

| Variable | Size | Usage |
|----------|------|-------|
| `hero` | 120px | Hero text (name) |
| `h1` | 64px | Main headings |
| `h2` | 41.427px | Subheadings |
| `h3` | 38.244px | Section titles |
| `h4` | 31.389px | Card titles |
| `h5` | 28px | Small headings |
| `body` | 24px | Body text |
| `subtitle` | 22.947px | Subtitles |
| `small` | 18.516px | Small text |
| `button` | 17.717px | Button text |
| `label` | 14px | Labels |

### Font Weights

```typescript
typography.fontWeight.light     // 300
typography.fontWeight.regular   // 400
typography.fontWeight.medium    // 500
typography.fontWeight.semibold  // 600
typography.fontWeight.bold      // 700
```

### Heading Styles

```tsx
// Using CSS classes
<h1 className="h1">My Creative Toolbox</h1>
<h2 className="h2">Brands & Companies</h2>
<h3 className="h3">Web Development</h3>
<h4 className="h4">Design Tools</h4>
<h5 className="h5">Section Title</h5>

// Using utility function
import { headingClass } from '@/lib/design-utils';

<h1 className={headingClass('h1')}>Heading</h1>
<h2 className={headingClass('h2', 'text-blue')}>Custom Heading</h2>
```

### Text Styles

```tsx
// Using CSS classes
<p className="text-body">Body text</p>
<p className="text-subtitle">Subtitle text</p>
<p className="text-small">Small text</p>
<p className="text-label">Label text</p>
<h1 className="text-hero">ABIN VARGHESE</h1>

// Using utility function
import { textClass } from '@/lib/design-utils';

<p className={textClass('body')}>Body text</p>
<p className={textClass('subtitle', 'custom-class')}>Subtitle</p>
```

### Gradient Text

```tsx
import { gradientTextClass } from '@/lib/design-utils';

<span className={gradientTextClass('blue')}>Blue Gradient Text</span>
<span className={gradientTextClass('gray')}>Gray Gradient Text</span>

// Or using CSS class
<span className="text-gradient-blue">Blue Gradient</span>
<span className="text-gradient-gray">Gray Gradient</span>
```

---

## Spacing

```typescript
import { spacing } from '@/lib/design-system';

spacing.xs   // 5px
spacing.sm   // 10px
spacing.md   // 15px
spacing.lg   // 20px
spacing.xl   // 30px
spacing['2xl'] // 50px
spacing['3xl'] // 70px
spacing['4xl'] // 100px
```

### Usage with Utility Function

```tsx
import { spacingClass } from '@/lib/design-utils';

<div className={spacingClass('gap', 'lg')}>Content with 20px gap</div>
<div className={spacingClass('px', '2xl')}>Content with 50px horizontal padding</div>
<div className={spacingClass('py', 'xl')}>Content with 30px vertical padding</div>
```

---

## Components

### Buttons

#### Primary Button (Gray Gradient)

```tsx
import { buttonClass } from '@/lib/design-utils';

<button className={buttonClass('primary')}>
  Contact me
</button>

// Or using CSS class
<button className="btn btn-primary">
  Contact me
</button>
```

#### Blue Button (Blue Gradient)

```tsx
<button className={buttonClass('blue')}>
  Resume
</button>

// Or using CSS class
<button className="btn btn-blue">
  Resume
</button>
```

#### Button with Icon

```tsx
<button className={buttonClass('blue')}>
  <span>Resume</span>
  <div className="btn-icon">
    <ArrowRight className="w-[21.26px] h-[21.26px]" />
  </div>
</button>
```

### Cards

#### Default Card

```tsx
import { cardClass } from '@/lib/design-utils';

<div className={cardClass('default')}>
  <h3>Web Development</h3>
  <p className="text-subtitle">Lorem ipsum dolor sit amet...</p>
</div>

// Or using CSS class
<div className="card">
  <h3>Web Development</h3>
  <p>Description</p>
</div>
```

#### Secondary Card (Tool Card)

```tsx
<div className={cardClass('secondary')}>
  <div className="tool-icon">
    <img src={iconUrl} alt="Tool icon" />
  </div>
  <div>
    <h5>Design Tools</h5>
    <p className="text-label">Lorem ipsum dolor...</p>
  </div>
</div>

// Or using CSS class
<div className="card-secondary">
  Content
</div>
```

### Tags

```tsx
import { tagClass } from '@/lib/design-utils';

<button className={tagClass(true)}>Graphic Design</button>
<button className={tagClass(false)}>Video Editing</button>

// Or using CSS classes
<button className="tag tag-active">Graphic Design</button>
<button className="tag tag-inactive">Video Editing</button>
```

### Tool Cards

```tsx
import { toolCardClass } from '@/lib/design-utils';

<div className={toolCardClass()}>
  <div className="tool-icon">
    <img src={figmaIcon} alt="Figma" />
  </div>
  <div>
    <h5 className="text-[28px] font-medium">Figma</h5>
    <p className="text-label">Lorem ipsum dolor sit amet</p>
  </div>
</div>
```

### Gradient Sections

```tsx
import { gradientSectionClass } from '@/lib/design-utils';

<div className={gradientSectionClass()}>
  <h2 className="text-white">✧ Brands & Companies ✧</h2>
  <p className="text-white/80">Lorem ipsum dolor...</p>
</div>
```

### Ticker/Marquee

```tsx
import { tickerClass } from '@/lib/design-utils';

<div className={tickerClass()}>
  Web Developer ✧ Graphic Designer ✧ Video Editor ✧ VFX Artist
</div>
```

---

## Usage Examples

### Example 1: Hero Section

```tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-[35px]">
      <h1 className="text-hero text-center">
        ABIN
        <br />
        VARGHESE
      </h1>
      
      <div className="flex items-center gap-[5px]">
        <p className={headingClass('h4')}>Lorem</p>
        <div className="badge">ipsum.</div>
      </div>
      
      <p className="text-body text-center max-w-[942px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="flex gap-[22px]">
        <button className={buttonClass('primary')}>
          Contact me
          <div className="btn-icon">
            <ArrowRight className="w-[21.26px] h-[21.26px]" />
          </div>
        </button>
        <button className={buttonClass('blue')}>
          Resume
          <div className="btn-icon">
            <ArrowRight className="w-[21.26px] h-[21.26px]" />
          </div>
        </button>
      </div>
    </section>
  );
}
```

### Example 2: Projects Section

```tsx
import { headingClass, textClass, cardClass } from '@/lib/design-utils';

export default function Projects() {
  return (
    <section className="w-full max-w-[1190px] mx-auto px-4">
      <div className="flex flex-col gap-2 mb-[55px]">
        <h1 className={headingClass('h1')}>
          My <span className="text-blue">Recent Project's</span>
        </h1>
        <p className={textClass('body', 'text-secondary')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      
      <div className={cardClass('default')}>
        <h3 className={headingClass('h3')}>Web Development</h3>
        <p className={textClass('subtitle', 'mt-[15px]')}>
          Lorem Ipsum is simply dummy text...
        </p>
        <img 
          src="/project-image.jpg" 
          alt="Project" 
          className="mt-[42px] rounded-[31.552px]"
        />
      </div>
    </section>
  );
}
```

### Example 3: Toolbox Section

```tsx
import { toolCardClass } from '@/lib/design-utils';

export default function Toolbox() {
  const tools = [
    { name: 'Figma', icon: '/icons/figma.svg', description: 'Lorem ipsum...' },
    { name: 'Photoshop', icon: '/icons/ps.svg', description: 'Lorem ipsum...' },
    // ... more tools
  ];
  
  return (
    <section>
      <h1 className="h1 mb-2">
        My <span>Creative</span> <span className="text-blue">Toolbox</span>
      </h1>
      
      <div className="grid grid-cols-1 gap-[15px] max-w-[621px]">
        {tools.map((tool) => (
          <div key={tool.name} className={toolCardClass()}>
            <div className="tool-icon">
              <img src={tool.icon} alt={tool.name} />
            </div>
            <div>
              <h5 className="text-[28px] font-medium">{tool.name}</h5>
              <p className="text-label">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## CSS Variables

All design tokens are available as CSS variables in your global stylesheet (`globals.css`):

```css
/* Colors */
var(--color-primary)
var(--color-blue)
var(--color-indigo)
var(--color-text-body)
var(--color-bg-main)

/* Typography */
var(--font-size-h1)
var(--font-weight-semibold)

/* Spacing */
var(--spacing-lg)

/* Gradients */
var(--gradient-blue)
var(--gradient-gray)
```

---

## Best Practices

1. **Use Utility Functions:** Prefer using the utility functions from `design-utils.ts` for type-safety and consistency.

2. **Combine with Tailwind:** The design system works seamlessly with Tailwind classes:
   ```tsx
   <button className={cn(buttonClass('primary'), 'mt-4 w-full')}>
     Click me
   </button>
   ```

3. **Responsive Design:** Use responsive utilities:
   ```tsx
   <p className={responsiveText('24px', '16px')}>
     Responsive text
   </p>
   ```

4. **Custom Colors:** Always use design system colors for consistency:
   ```tsx
   // ✅ Good
   <div className="text-[#0020d7]">Blue text</div>
   
   // ❌ Avoid
   <div className="text-blue-600">Blue text</div>
   ```

5. **Spacing:** Use the spacing scale:
   ```tsx
   // ✅ Good
   <div className="gap-[20px]">Content</div>
   
   // ❌ Avoid
   <div className="gap-5">Content</div>
   ```

---

## TypeScript Support

All design tokens are fully typed:

```typescript
import { 
  colors, 
  typography, 
  type ColorKey, 
  type FontSize 
} from '@/lib/design-system';

const myColor: ColorKey = 'primary';
const myFontSize: FontSize = 'h1';
```

---

## Additional Resources

- **Figma Design:** [View in Figma](https://www.figma.com/design/UwNN3KEicJ7NYsNT1sCcCw/Abin-Portfolio?node-id=107-1040)
- **Google Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins)
- **Global Styles:** `src/styles/globals.css`
- **Design Tokens:** `src/lib/design-system.ts`
- **Utilities:** `src/lib/design-utils.ts`
