# az-css
a CSS lib smaller than tailwindcss yet comprehensive
Of course\! Here is some simple documentation for your CSS and JavaScript library.

-----

## Introduction

Welcome\! This is a lightweight, comprehensive, utility-first CSS library designed for rapid development. It provides a solid foundation with a sensible reset, theming capabilities via CSS variables, and a vast collection of utility classes for building modern, responsive user interfaces.

The library is enhanced by a set of JavaScript functions that dynamically generate an extensive range of utility classes for sizing, colors, and gradients, keeping the initial CSS file small while offering maximum flexibility.

-----

## Getting Started

To use the library, follow these two steps:

1.  **Link the CSS file:** Include the main CSS file in the `<head>` of your HTML document.

    ```html
    <link rel="stylesheet" href="path/to/your/styles.css">
    <link rel="stylesheet" href="path/to/your/seq_cls_generator.js"> 
    ```

2.  **Generate and Add Dynamic Styles:** The JavaScript functions generate thousands of helpful utility classes. Run these functions and append the generated styles to your document's head.

    ```html
    <script>
    	// Your site's specific color variables (your project can generate theses color variables based on the business model that is suitable for your project, one example is to generate based on the site/domain)
    	const siteColors = {
    		lightColors: {
    			'--clr1': '#007bff',
    			'--clr2': '#f8f9fa',
    			'--clr3': '#343a40',
    			// up to 10 colors
    		},
    		darkColors: {
    			'--clr1': '#007bff',
    			'--clr2': '#f8f9fa',
    			'--clr3': '#343a40',
    			// up to 10 colors
    		}
    	};
    </script>
    ```

-----

## Core Concepts

### Theming with CSS Variables

The library is built around a flexible color system using CSS variables. You can easily customize the entire color scheme by defining these variables in your own CSS file or in a `<style>` block, targeting the `:root`.

  * `--clr1`: **Primary Color**. Used for buttons, links, active states, and accents.
  * `--clr2`: **Background Color**. Used for the body, cards, headers, and modals.
  * `--clr3`: **Text/Contrast Color**. Used for primary text, headers, and borders.

The library automatically generates transparent versions (`--clr1tr`, `--clr2tr`, `--clr3tr`) and mixed text colors (`--tclr`, `--tclri`) for you.

### Responsive Design

The library uses specific breakpoints. Utility classes can be prefixed to apply them only at certain screen sizes.

  * **Wide (`w_`)**: `min-width: 1441px`
  * **Desktop (`desk_`)**: `min-width: 992px` and `max-width: 1440px`
  * **Tablet (`tab_`)**: `min-width: 481px` and `max-width: 991px`
  * **Mobile (`mob_`)**: `max-width: 480px`

Classes without a prefix apply to all screen sizes.

**Example:**
The class `.flex` applies `display: flex` on all screens. The class `.desk_flex` applies `display: flex` only on desktop screens.

-----

## Utility Classes Documentation

### Layout & Sizing

| Class Prefix      | Property          | Example                                           | Description                                                               |
| ----------------- | ----------------- | ------------------------------------------------- | ------------------------------------------------------------------------- |
| `.l`, `.left`     | `float: left`     | `<div class="left">...</div>`                     | Floats an element to the left.                                            |
| `.r`, `.right`    | `float: right`    | `<div class="right">...</div>`                    | Floats an element to the right.                                           |
| `.clear`          | `clear: both`     | `<div class="clear"></div>`                       | Clears floats.                                                            |
| `.fixed`          | `position: fixed` | `<header class="fixed top">...</header>`           | Positions an element relative to the viewport.                            |
| `.absolute`       | `position: absolute`| `<div class="absolute">...</div>`                  | Positions an element relative to its nearest positioned ancestor.         |
| `.relative`       | `position: relative`| `<div class="relative">...</div>`                  | Establishes a positioning context for absolute children.                  |
| `.sticky`         | `position: sticky`| `<nav class="sticky top">...</nav>`                | Positions an element based on the user's scroll position.                 |
| `.w{1-99}`        | `width`           | `<div class="w50">...</div>`                      | Sets width from `0.1em` to `9.9em`. (JS Generated)                        |
| `.h{1-99}`        | `height`          | `<div class="h30">...</div>`                      | Sets height from `0.1em` to `9.9em`. (JS Generated)                       |
| `.f_w`            | `width: 100%`     | `<div class="f_w">...</div>`                      | Sets width to 100%.                                                       |
| `.h_w`            | `width: 50%`      | `<div class="h_w">...</div>`                      | Sets width to 50%. Also includes `.q_w`, `.t_w`, `.tt_w`, `.tq_w`.        |

### Flexbox

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.flex`              | `display: flex`             | `<div class="flex">...</div>`             | Creates a flex container.                             |
| `.c_flex`            | `display: flex` + `center`  | `<div class="c_flex">...</div>`           | A centered flex container.                            |
| `.fd_col`, `.flex_col` | `flex-direction: column`    | `<div class="flex fd_col">...</div>`      | Stacks flex items vertically.                         |
| `.wrap`              | `flex-wrap: wrap`           | `<div class="flex wrap">...</div>`        | Allows flex items to wrap to the next line.           |
| `.space_bet`         | `justify-content: space-between` | `<div class="flex space_bet">...</div>` | Distributes items evenly with space between them.     |
| `.space_ar`          | `justify-content: space-around`  | `<div class="flex space_ar">...</div>`  | Distributes items evenly with space around them.      |
| `.center`            | `justify-content: center` + `align-items: center` | `<div class="flex center">...</div>` | Centers flex items on both axes.                      |
| `.gp{1-99}`           | `gap`                       | `<div class="flex gp5">...</div>`         | Sets gap between flex items from `0.1em` to `9.9em`. |

### Spacing (JS Generated)

The precise margin and padding utilities from `0.1em` to `9.9em`.

  * **Margin**: `.m{1-99}`, `.mt{1-99}`, `.mr{1-99}`, `.mb{1-99}`, `.ml{1-99}`
  * **Padding**: `.p{1-99}`, `.pt{1-99}`, `.pr{1-99}`, `.pb{1-99}`, `.pl{1-99}`

**Example:** `.mt15` applies `margin-top: 1.5em`. `.p20` applies `padding: 2.0em`.

-----

## JavaScript Generated Styles

The JavaScript functions provide thousands of utility classes on demand.

### Sizing & Transform Utilities

This function generates classes for common CSS properties with numeric values.

  * **Rotation:** `.rot{-360 to 360}` applies `rotate` in 5-degree increments.
      * Example: `.rot90` will apply `rotate: 90deg`.
  * **Sizing/Spacing:** Generates margin, padding, width, height, gap, line-height, font-size, border-width, and border-radius classes from `0.1em` to `9.9em` in `0.1em` increments. The class name is the prefix followed by the value multiplied by 10.
      * Example: `.fs12` applies `font-size: 1.2em`. `.brdr_r5` applies `border-radius: 0.5em`.
  * **Opacity:** `.op{0-10}` applies `opacity` from 0.0 to 1.0.
      * Example: `.op5` applies `opacity: 0.5`.

### Color Utilities

This function generates a comprehensive set of color utilities for all named CSS colors and the theme colors (`--clr1` to `--clr10`).

The pattern is `.{colorName}{modifier}`.

  * **Text Color:** `.{colorName}` (e.g., `.red`, `.clr1`)
  * **Background Color:** `.{colorName}bg` (e.g., `.bluebg`, `.clr2bg`)
  * **Border Color:** `.{colorName}_brdr` (e.g., `.green_brdr`, `.clr3_brdr`)
  * **Hover States:** Add `hov` for hover effects (e.g., `.redbghov:hover`)
  * **Text Stroke:** `.{colorName}strk` (e.g., `.blackstrk`)

This function also generates responsive versions of all color classes (e.g., `.mob_red`, `.desk_clr1bg`).

### Gradient Utilities

This function generates text and background gradients for every combination of named colors and theme colors.

The pattern is `.{clr<N>}_{clr<N>}_{angle}{modifier}`.

  * **Angle:** The angle is specified in `45`-degree increments from `0` to `360`.
  * **Text Gradient:** `.{c1}_{c2}_{angle}`
      * Example: `.red_blue_90` creates text with a linear gradient from red to blue at a 90-degree angle.
  * **Background Gradient:** `.{c1}_{c2}_{angle}bg`
      * Example: `.clr1_clr2_180bg` creates a background with a linear gradient from theme color 1 to theme color 2 at a 180-degree angle.
