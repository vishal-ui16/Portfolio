---
name: design-fix
description: Fixes "AI slop" patterns, uneven padding, broken CSS transitions, and generic component aesthetics on web surfaces.
commands:
  - name: design-fix
    description: Formally audits and fixes design layout bugs, alignments, and aesthetics.
---

# Design Fix Protocol

When the user requests a layout correction or calls `/design-fix`, bypass generic AI component layouts and apply professional frontend engineering constraints.

## 🎯 Technical Directives

### 1. Root Out "AI Slop" Defaults
- Check for and strip out contextless, neon ambient background blobs, random background blurs, or purple-to-pink gradients unless they are explicitly written into the brand guidelines.
- Enforce clean, high-contrast layouts over cluttered cards with unnecessary double-stacked borders.

### 2. Spacing and Alignment (The 8px Rule)
- All margins, paddings, gap widths, and dimensional intervals must adhere strictly to a **4px or 8px grid system** (e.g., `p-2`, `p-4`, `p-8` in Tailwind CSS). No arbitrary "magic numbers" in inline styles.
- Audit horizontal/vertical symmetry across cards, pills, and grid blocks.

### 3. Typography & Hierarchy
- Ensure all uppercase text headers use tracking tweaks (`tracking-wide` or `letter-spacing: 0.05em`) and proportional text weight constraints to maintain a premium feel.
- Prevent layout shifts by fixing strict `line-height` parameters on hero elements.

### 4. Transition & Motion
- All interactive elements (`button`, links, hover states) must feature intentional transition animations (`transition-all duration-200 ease-out`).
- Avoid jarring motion; interactive transitions must be subtle.

## 🛠️ Execution Checklist
1. Inspect the visual code structure or the active workspace diff.
2. Draft a precise, self-contained layout refactoring plan detailing exactly what will change.
3. Apply code modifications to correct the alignment and aesthetics without changing functional application logic.
4. Re-verify the output visually (screenshot or browser preview) to confirm all issues are resolved before marking the task complete.
