# Frontend Mentor - Browser Extensions Manager UI Solution

This is a solution to the
[Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states (with sessions storage
  persistence)
- Filter active and inactive extensions dynamically
- Remove extensions from the list (with a confirmation dialog)
- Select their color theme
- View the optimal layout for the interface depending on their device's screen
  size
- See hover and focus states for all interactive elements on the page

### Screenshot

preview.jpg

### Links

- Solution URL:
  [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/)
- Live Site URL: [Live Demo](https://your-deployment-url.vercel.app/)

---

## My process

### Built with

- **Semantic HTML5** & **React Components**
- **Tailwind CSS** for styling
- **Flexbox** & **CSS Grid** for layout
- **TypeScript** for type safety
- **Mobile-first workflow**

### What I learned

This project taught me how to implement **React UI Dark mode and light** for
good user experinece depending on their choice of theme.

I also implemented a **confirmation modal** before deletion — which improved UX
and prevented accidental removals.

A snippet of my proudest functionality:

```index.css

@import "tailwindcss";

@theme {
  --color-neutral-900: hsl(227, 75%, 14%);
  --color-neutral-800: hsl(226, 25%, 17%);
  --color-neutral-700: hsl(225, 23%, 24%);
  --color-neutral-600: hsl(226, 11%, 37%);
  --color-neutral-300: hsl(0, 0%, 78%);
  --color-neutral-200: hsl(217, 61%, 90%);
  --color-neutral-100: hsl(0, 0%, 93%);
  --color-neutral-0: hsl(200, 60%, 99%);

  --color-red-400: hsl(3, 86%, 64%);
  --color-red-500: hsl(3, 71%, 56%);
  --color-red-700: hsl(3, 77%, 44%);

  --color-gradient-light: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
  --color-gradient-dark: linear-gradient(180deg, #040918 0%, #091540 100%);

  --font-Nato-Sans: "Noto Sans", sans-serif;
}

@custom-variant dark (&:where(.dark, .dark *));

```

And for safe removals:

```tsx
{
  showConfirm && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>
          Are you sure you want to remove <b>{cardTitle}</b>?
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
          <button onClick={handleRemove} className="bg-red-600 text-white">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
```

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs) – For quick responsive
  styling.
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks) –
  The two very most powerfull hooks i used in this project includes useState and
  useEffect, very powerful for maintaining data across components (useState).

---

## Author

- GitHub - [Hyacinth Augustine](https://github.com/yourusername)
- Frontend Mentor -
  [@Hyacinthaugustine](https://www.frontendmentor.io/profile/Hyacinthaugustine)
- Twitter - [@yourusername](https://x.com/HyacinthAu0203)

---

## Acknowledgments

Thanks to **Frontend Mentor** for the challenge and to the **tailwindcss team**
for their great documentation. Inspiration also came from looking at other
community solutions on Frontend Mentor.
