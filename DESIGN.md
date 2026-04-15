```markdown
# Portfolio Design System: The Cinematic Developer

## 1. Overview & Creative North Star
**Creative North Star: "The Neon Curator"**
This design system rejects the "template" aesthetic of generic portfolios. Instead, it draws inspiration from high-end editorial magazines and cinematic interfaces. We move beyond a standard grid by treating the screen as a canvas of light and depth. The "Neon Curator" aesthetic balances the precision of code (clean typography, rigid spacing) with the soul of a creative (vibrant accent bleeds, glassmorphism, and tonal layering). 

The goal is to present a front-end developer not just as a builder of components, but as an architect of experiences. We achieve this through intentional asymmetry—placing oversized `display-lg` typography against condensed `surface-container` modules—and by replacing structural lines with atmospheric depth.

---

## 2. Colors & Surface Philosophy
The palette is anchored in a deep, nocturnal blue (`background: #060e20`), providing a high-contrast stage for vibrant electric cyan (`primary: #81ecff`) and emerald (`secondary: #69f6b8`) accents.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be felt, not seen. Use background color shifts (e.g., a `surface-container-low` card sitting on a `surface` background) to define containment.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of frosted glass.
*   **Layer 0 (Base):** `surface` (#060e20) – The infinite void.
*   **Layer 1 (Sections):** `surface-container-low` (#091328) – Subtle containment for large content blocks.
*   **Layer 2 (Cards/Modules):** `surface-container` (#0f1930) – The primary interactive surface.
*   **Layer 3 (Modals/Popovers):** `surface-container-highest` (#192540) – Maximum elevation.

### The "Glass & Gradient" Rule
To elevate the "out-of-the-box" feel, primary CTAs and Hero sections should utilize a **Signature Texture**:
*   **Linear Gradient:** From `primary` (#81ecff) to `primary-container` (#00e3fd) at a 135-degree angle.
*   **Glassmorphism:** Apply to floating navigation or overlay cards using `surface-variant` (#192540) at 60% opacity with a `backdrop-blur` of 12px to 20px.

---

## 3. Typography
We utilize a high-contrast pairing of **Space Grotesk** (Display/Headlines) and **Inter** (Body/UI).

*   **Space Grotesk (The Voice):** Used for `display` and `headline` scales. Its geometric, tech-leaning quirks signal a "front-end" identity. 
    *   *Usage:* Use `display-lg` for hero statements, allowing it to overlap two different surface containers to break the grid.
*   **Inter (The Engine):** Used for `title`, `body`, and `label` scales. Inter provides clinical readability. 
    *   *Usage:* Keep `body-md` for long-form descriptions. Use `label-md` in All Caps with 0.05em letter spacing for category tags.

The typography hierarchy conveys a "Code-Editor-meets-Art-Gallery" vibe: large, bold headers followed by ultra-clean, legible metadata.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card inside a `surface-container-high` section. This "recessed" look feels more sophisticated than a standard lift.
*   **Ambient Shadows:** For floating elements (like a "Back to Top" button), use a 32px blur with 6% opacity, using the `primary` color as the shadow tint rather than black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token (#40485d) at 15% opacity. Never use a 100% opaque border.
*   **Motion Depth:** When a card is hovered, do not just lift it; change its background from `surface-container` to `surface-bright` (#1f2b49) to simulate light hitting the surface.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text, `rounded-md`. No border.
*   **Secondary:** Glassmorphism style. `surface-variant` at 20% opacity, `outline-variant` ghost border, `primary` text.
*   **Tertiary:** Text only in `secondary`, with a 2px underline that expands on hover.

### Cards & Projects
*   **Forbid Dividers:** Use `1.5rem` (xl) spacing to separate content.
*   **Project Card:** Use `surface-container`. The image should be flush to the top, while the text content sits in a padded area below. Use a subtle `primary` glow (5% opacity) behind the card to indicate "active" projects.

### Glass Navigation
*   **Floating Dock:** A fixed-bottom or top navigation bar using `surface-container-lowest` at 70% opacity with `backdrop-blur-xl`. Use `primary` for the active icon state.

### Chips
*   **Skill Tags:** `rounded-full`, background: `surface-container-highest`, text: `on-surface-variant`. On hover, shift background to `secondary_container` (#006c49).

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place a `display-lg` heading on the left and a small `body-sm` description offset to the right. 
*   **Embrace Negative Space:** Let the `background` (#060e20) breathe. High-end design is defined by what you leave out.
*   **Tint Your Greys:** Every "grey" in this system is actually a desaturated blue. Stick strictly to the provided surface tokens to maintain the "Nocturnal" feel.

### Don't:
*   **Don't use 100% White:** Always use `on-surface` (#dee5ff) or `on-surface-variant` (#a3aac4). Pure white (#ffffff) vibrates too harshly against the deep background.
*   **Don't use Divider Lines:** If you feel the need for a line, increase the padding by 16px instead. 
*   **Don't Over-Glass:** Glassmorphism is a spice, not the main dish. Limit it to navigation and 1-2 featured "Hero" cards per page.
*   **Don't use Standard Shadows:** Avoid the "Default" Figma/CSS shadow. If it doesn't look like ambient light, it doesn't belong in this system.