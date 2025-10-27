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

1.  **Link the CSS and JS files:** Include the necessary files in the `<head>` of your HTML document.

    ```html
    <!-- Core CSS files -->
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/az_anims.css">
    
    <!-- JavaScript generators -->
    <script src="js/seq_cls_generator.js"></script>
    <script src="js/az_anims.js"></script>
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

### 📐 Layout & Display

#### Flexbox Classes

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.flex`              | `display: flex`             | `<div class="flex">...</div>`             | Creates a flex container.                             |
| `.c_flex`            | `display: flex` + `center`  | `<div class="c_flex">...</div>`           | A centered flex container.                            |
| `.fd_col`, `.flex_col` | `flex-direction: column`    | `<div class="flex fd_col">...</div>`      | Stacks flex items vertically.                         |
| `.wrap`              | `flex-wrap: wrap`           | `<div class="flex wrap">...</div>`        | Allows flex items to wrap to the next line.           |
| `.space_bet`         | `justify-content: space-between` | `<div class="flex space_bet">...</div>` | Distributes items evenly with space between them.     |
| `.space_ar`          | `justify-content: space-around`  | `<div class="flex space_ar">...</div>`  | Distributes items evenly with space around them.      |
| `.justify_even`      | `justify-content: space-evenly` | `<div class="flex justify_even">...</div>` | Distributes items evenly with equal space around them. |
| `.center`            | `justify-content: center` + `align-items: center` | `<div class="flex center">...</div>` | Centers flex items on both axes.                      |
| `.gp{1-99}`          | `gap`                       | `<div class="flex gp5">...</div>`         | Sets gap between flex items from `0.1em` to `9.9em`. |

#### Grid Classes

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.grid`              | `display: grid`             | `<div class="grid">...</div>`             | Creates a grid container.                             |
| `.gp_a`              | `grid-template-columns: repeat(auto-fit, minmax(9em, 1fr))` | `<div class="grid gp_a">...</div>` | Auto-fit columns with minimum 9em width.              |
| `.cols7`             | `grid-template-columns: repeat(7, 1fr)` | `<div class="grid cols7">...</div>` | Creates 7 equal columns grid.                         |

#### Display Types

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.block`, `.blk`     | `display: block`            | `<div class="block">...</div>`            | Sets element to block display.                        |
| `.inline_block`, `.inlnblk` | `display: inline-block` | `<span class="inline_block">...</span>` | Sets element to inline-block display.                 |
| `.inline`            | `display: inline`           | `<span class="inline">...</span>`         | Sets element to inline display.                       |
| `.hidden`            | `position: absolute` + `opacity: 0` | `<div class="hidden">...</div>` | Completely hides element.                             |

### 🎨 Colors & Backgrounds

#### Text Colors

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.primary`           | `color: var(--clr1)`        | `<p class="primary">...</p>`              | Primary color text.                                   |
| `.secondary`         | `color: var(--clr2)`        | `<p class="secondary">...</p>`            | Secondary color text.                                 |
| `.dark`              | `color: var(--clr3)`        | `<p class="dark">...</p>`                 | Dark color text.                                      |
| `.light`             | `color: var(--clr2)`        | `<p class="light">...</p>`               | Light color text.                                     |
| `.positive`, `.success` | `color: green`            | `<p class="success">...</p>`              | Green/success text.                                   |
| `.negative`, `.danger` | `color: red`              | `<p class="danger">...</p>`               | Red/danger text.                                      |
| `.info`              | `color: blue`               | `<p class="info">...</p>`                 | Info color text.                                      |
| `.warn`              | `color: orange`             | `<p class="warn">...</p>`                 | Warning color text.                                   |
| `.highlighted`       | `background: yellow` + `color: black` | `<p class="highlighted">...</p>` | Highlighted background text.                          |

#### Background Colors

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.primarybg`         | `background: var(--clr1)`   | `<div class="primarybg">...</div>`        | Primary background.                                   |
| `.secondarybg`       | `background: var(--clr2)`   | `<div class="secondarybg">...</div>`      | Secondary background.                                 |
| `.darkbg`            | `background: var(--clr3)`   | `<div class="darkbg">...</div>`           | Dark background.                                      |
| `.lightbg`           | `background: var(--clr2)`   | `<div class="lightbg">...</div>`         | Light background.                                     |
| `.positivebg`        | `background: green`         | `<div class="positivebg">...</div>`      | Positive background.                                  |
| `.dangerbg`, `.negativebg` | `background: red`        | `<div class="dangerbg">...</div>`         | Danger background.                                    |
| `.infobg`            | `background: blue`          | `<div class="infobg">...</div>`           | Info background.                                      |

#### Background Effects

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.blurybg`           | `backdrop-filter: blur()`   | `<div class="blurybg">...</div>`         | Backdrop filter blur effect.                          |
| `.white_blurybg`     | `background: rgba(255,255,255,0.8)` + `backdrop-filter: blur()` | `<div class="white_blurybg">...</div>` | White translucent with blur.                          |
| `.cover`             | `background-size: cover`    | `<div class="cover">...</div>`           | Background size cover.                                |
| `.contain`           | `background-size: contain`  | `<div class="contain">...</div>`         | Background size contain.                              |
| `.bg_center`         | `background-position: center` | `<div class="bg_center">...</div>`     | Background position center.                           |
| `.bg_no_repeat`, `.bg_no_r` | `background-repeat: no-repeat` | `<div class="bg_no_repeat">...</div>` | No background repeat.                                 |

### 📏 Sizing & Spacing

#### Width Classes

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.q_w`               | `width: 25%`                | `<div class="q_w">...</div>`             | 25% width.                                            |
| `.t_w`               | `width: 33.33%`             | `<div class="t_w">...</div>`             | 33.33% width.                                          |
| `.h_w`               | `width: 50%`                | `<div class="h_w">...</div>`             | 50% width.                                            |
| `.tt_w`              | `width: 66.6%`              | `<div class="tt_w">...</div>`            | 66.6% width.                                          |
| `.tq_w`              | `width: 75%`                | `<div class="tq_w">...</div>`            | 75% width.                                            |
| `.f_w`               | `width: 100%`               | `<div class="f_w">...</div>`             | 100% width.                                           |
| `.fitcontent`, `.fitcont` | `width: fit-content`    | `<div class="fitcontent">...</div>`      | Width fit-content.                                    |
| `.w_h_eq`            | `aspect-ratio: 1`           | `<div class="w_h_eq">...</div>`          | Square aspect ratio.                                  |

#### Spacing Classes

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.p`                 | `padding: 1em`              | `<div class="p">...</div>`               | Padding: 1em.                                         |
| `.m`                 | `margin: 1em`               | `<div class="m">...</div>`               | Margin: 1em.                                          |
| `.ma`                | `margin: auto`              | `<div class="ma">...</div>`              | Margin auto.                                          |
| `.m0a`               | `margin: 0 auto`            | `<div class="m0a">...</div>`             | Margin 0 auto.                                        |
| `.cont`              | `padding: 0.5rem`           | `<div class="cont">...</div>`            | Padding: 0.5rem.                                      |

#### Numeric Sizing (JS Generated)

| Class Pattern        | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.w{1-99}`           | `width: {n×0.01}em`         | `<div class="w50">...</div>`             | Sets width from `0.01em` to `0.99em`.                 |
| `.h{1-99}`           | `height: {n×0.01}em`        | `<div class="h30">...</div>`             | Sets height from `0.01em` to `0.99em`.                |
| `.m{1-99}`           | `margin: {n×0.01}em`        | `<div class="m15">...</div>`             | Sets margin from `0.01em` to `0.99em`.                |
| `.p{1-99}`           | `padding: {n×0.01}em`       | `<div class="p20">...</div>`             | Sets padding from `0.01em` to `0.99em`.               |
| `.mt{1-99}`, `.mr{1-99}`, `.mb{1-99}`, `.ml{1-99}` | `margin-{side}: {n×0.01}em` | `<div class="mt10">...</div>` | Sets margin for specific sides.                       |
| `.pt{1-99}`, `.pr{1-99}`, `.pb{1-99}`, `.pl{1-99}` | `padding-{side}: {n×0.01}em` | `<div class="pt5">...</div>` | Sets padding for specific sides.                      |

### 🎯 Positioning

#### Position Types

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.relative`          | `position: relative`        | `<div class="relative">...</div>`        | Establishes a positioning context.                    |
| `.absolute`          | `position: absolute`        | `<div class="absolute">...</div>`         | Positions relative to nearest positioned ancestor.   |
| `.fixed`             | `position: fixed`           | `<header class="fixed top">...</header>`  | Positions relative to viewport.                      |
| `.sticky`, `.sticky_top` | `position: sticky`      | `<nav class="sticky top">...</nav>`      | Positions based on scroll position.                  |
| `.top`               | `top: 0`                    | `<div class="absolute top">...</div>`     | Top: 0.                                               |
| `.bottom`            | `bottom: 0`                 | `<div class="absolute bottom">...</div>` | Bottom: 0.                                            |

#### Alignment

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.self_center`       | `margin: auto`              | `<div class="self_center">...</div>`     | Horizontal centering with margin auto.               |
| `.center`, `.t_center`, `.t_c` | `text-align: center` + `justify-content: center` | `<div class="center">...</div>` | Text align center + flex center.                     |
| `.t_right`, `.t_r`   | `text-align: right`         | `<div class="t_right">...</div>`         | Text align right.                                     |
| `.t_left`, `.t_l`    | `text-align: left`          | `<div class="t_left">...</div>`          | Text align left.                                      |
| `.t_justify`         | `text-align: justify`       | `<div class="t_justify">...</div>`       | Text align justify.                                   |

#### Floats

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.left`, `.l`        | `float: left`               | `<div class="left">...</div>`            | Floats element to the left.                           |
| `.right`, `.r`       | `float: right`              | `<div class="right">...</div>`           | Floats element to the right.                          |
| `.clear`             | `clear: both`               | `<div class="clear"></div>`              | Clears floats.                                        |

### 🖋️ Typography

#### Font Sizes

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.xx-small`          | `font-size: xx-small`       | `<p class="xx-small">...</p>`             | XX-small font.                                        |
| `.x-small`           | `font-size: x-small`        | `<p class="x-small">...</p>`              | X-small font.                                         |
| `.small`, `.smaller` | `font-size: small`          | `<p class="small">...</p>`                | Small font.                                           |
| `.large`, `.larger`  | `font-size: large`          | `<p class="large">...</p>`                | Large font.                                           |
| `.x-large`           | `font-size: x-large`        | `<p class="x-large">...</p>`              | X-large font.                                         |
| `.xx-large`          | `font-size: xx-large`       | `<p class="xx-large">...</p>`             | XX-large font.                                        |
| `.xxx-large`         | `font-size: xxx-large`      | `<p class="xxx-large">...</p>`            | XXX-large font.                                       |
| `.sm`                | `font-size: 0.7em`          | `<p class="sm">...</p>`                   | 0.7em font.                                           |

#### Font Styles

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.f_az`              | `font-family: monospace`    | `<code class="f_az">...</code>`          | Monospace font family.                               |
| `.b`                 | `font-weight: 900`          | `<strong class="b">...</strong>`         | Font weight 900 (bold).                               |
| `.stroked`           | `-webkit-text-stroke`       | `<h1 class="stroked">...</h1>`            | Text stroke effect.                                  |
| `.t3d`               | `text-shadow: 3D effect`    | `<h1 class="t3d">...</h1>`                | 3D text shadow effect.                               |

#### Text Direction

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.ltr`               | `direction: ltr`            | `<div class="ltr">...</div>`             | Left to right direction.                              |
| `.rtl`               | `direction: rtl`            | `<div class="rtl">...</div>`              | Right to left direction.                              |
| `.bidi`              | `unicode-bidi: plaintext`   | `<div class="bidi">...</div>`             | Unicode bidi plaintext.                               |
| `.v_lr`              | `writing-mode: vertical-lr` | `<div class="v_lr">...</div>`             | Vertical writing left-right.                         |
| `.v_rl`              | `writing-mode: vertical-rl` | `<div class="v_rl">...</div>`             | Vertical writing right-left.                          |

### 🎭 Borders & Effects

#### Border Sides

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.border_t`          | `border-top: 1em solid`     | `<div class="border_t">...</div>`        | Top border (1em solid).                              |
| `.border_b`          | `border-bottom: 1em solid`  | `<div class="border_b">...</div>`        | Bottom border.                                        |
| `.border_l`          | `border-left: 1em solid`    | `<div class="border_l">...</div>`        | Left border.                                          |
| `.border_r`          | `border-right: 1em solid`   | `<div class="border_r">...</div>`        | Right border.                                         |
| `.border`, `.brdr`   | `border: 1em solid`         | `<div class="border">...</div>`          | All sides border.                                     |

#### Border Styles

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.solid`             | `border-style: solid`       | `<div class="solid">...</div>`           | Solid border (all sides).                            |
| `.solid_t`, `.solid_r`, `.solid_b`, `.solid_l` | `border-{side}-style: solid` | `<div class="solid_t">...</div>` | Individual side solid borders.                        |
| `.dotted`            | `border-style: dotted`      | `<div class="dotted">...</div>`          | Dotted border (all sides).                            |
| `.dotted_t`, `.dotted_r`, `.dotted_b`, `.dotted_l` | `border-{side}-style: dotted` | `<div class="dotted_t">...</div>` | Individual side dotted borders.                       |
| `.dashed`            | `border-style: dashed`      | `<div class="dashed">...</div>`          | Dashed border (all sides).                            |
| `.dashed_t`, `.dashed_r`, `.dashed_b`, `.dashed_l` | `border-{side}-style: dashed` | `<div class="dashed_t">...</div>` | Individual side dashed borders.                        |

#### Border Radius

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.radius_r`          | `border-radius: 1vw` (right side) | `<div class="radius_r">...</div>` | Right side radius (1vw).                              |
| `.radius_l`          | `border-radius: 1vw` (left side) | `<div class="radius_l">...</div>` | Left side radius (1vw).                               |

### 🎪 Shadows & Effects

#### Box Shadows

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.shadow`, `.slightshadow` | `box-shadow: regular`    | `<div class="shadow">...</div>`          | Regular shadow.                                       |
| `.shadow_d`, `.d_shadow`, `.slightshadowdown` | `box-shadow: down` | `<div class="shadow_d">...</div>` | Down shadow.                                          |
| `.shadow_u`, `.u_shadow` | `box-shadow: up`          | `<div class="shadow_u">...</div>`        | Up shadow.                                            |
| `.shadow_l`, `.l_shadow` | `box-shadow: left`        | `<div class="shadow_l">...</div>`        | Left shadow.                                          |
| `.shadow_r`, `.r_shadow` | `box-shadow: right`       | `<div class="shadow_r">...</div>`        | Right shadow.                                         |
| `.shadow_ld`, `.ld_shadow` | `box-shadow: left-down`  | `<div class="shadow_ld">...</div>`       | Left-down shadow.                                     |
| `.shadow_rd`, `.rd_shadow` | `box-shadow: right-down` | `<div class="shadow_rd">...</div>`       | Right-down shadow.                                    |
| `.innershadow`       | `box-shadow: inset`         | `<div class="innershadow">...</div>`     | Inner shadow.                                         |

#### Visual Effects

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.invert`            | `filter: invert()`          | `<div class="invert">...</div>`          | Filter invert.                                        |
| `.invisible`         | `opacity: 0`                | `<div class="invisible">...</div>`       | Opacity 0.                                            |
| `.flip_x`            | `transform: scaleX(-1)`      | `<div class="flip_x">...</div>`          | Transform scaleX(-1).                                 |
| `.flip_y`            | `transform: scaleY(-1)`      | `<div class="flip_y">...</div>`          | Transform scaleY(-1).                                 |
| `.no_scale`          | `transform: none`           | `<div class="no_scale">...</div>`        | Remove scale transforms.                              |

### 🗂️ Components & States

#### UI Components

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.card`              | `box-shadow` + styling     | `<div class="card">...</div>`            | Card component with shadow.                           |
| `.tab`               | Tab styling                 | `<div class="tab">...</div>`              | Tab styling.                                          |
| `.actv_tb`           | Active tab styling          | `<div class="actv_tb">...</div>`         | Active tab.                                           |
| `.tag`               | Tag component styling       | `<span class="tag">...</span>`            | Tag component.                                        |
| `.collapsible`       | Collapsible styling         | `<div class="collapsible">...</div>`      | Collapsible element.                                  |
| `.tgl`               | Toggle switch styling       | `<div class="tgl">...</div>`              | Toggle switch.                                        |

#### States & Interactions

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.slctd`, `.selected` | Selected state styling     | `<div class="selected">...</div>`        | Selected state.                                       |
| `.disabled`          | Disabled state styling     | `<button class="disabled">...</button>`  | Disabled state.                                       |
| `.attractive`        | Shimmer effect             | `<div class="attractive">...</div>`      | Shimmer effect.                                       |
| `.pointer`           | `cursor: pointer`           | `<div class="pointer">...</div>`          | Cursor pointer.                                       |
| `.grab`              | `cursor: grab`              | `<div class="grab">...</div>`             | Cursor grab.                                          |
| `.no_of`             | `overflow: hidden`          | `<div class="no_of">...</div>`            | Overflow hidden.                                      |
| `.of_a`, `.ofa`      | `overflow: auto`            | `<div class="of_a">...</div>`             | Overflow auto.                                        |

### 🎮 Z-index Layers

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.zi0`               | `z-index: 1050`             | `<div class="zi0">...</div>`             | Highest z-index (1050).                               |
| `.zi1`               | `z-index: 1010`             | `<div class="zi1">...</div>`             | High z-index (1010).                                  |
| `.zi2`               | `z-index: 1000`             | `<div class="zi2">...</div>`             | Medium-high z-index (1000).                           |
| `.zi3`               | `z-index: 999`              | `<div class="zi3">...</div>`             | Medium z-index (999).                                 |
| `.zi4`               | `z-index: 888`              | `<div class="zi4">...</div>`             | Medium-low z-index (888).                             |
| `.zi5`               | `z-index: 777`              | `<div class="zi5">...</div>`             | Low z-index (777).                                    |
| `.zi6`               | `z-index: 666`              | `<div class="zi6">...</div>`             | Lower z-index (666).                                  |
| `.zi`                | `z-index: 1`                | `<div class="zi">...</div>`              | Lowest z-index (1).                                   |

### 🎬 Animations

#### Animation Base Classes

| Class                | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.az_anim`           | Animation base              | `<div class="az_anim">...</div>`         | Required for all animations.                          |
| `.az_anim_hov`       | Animation on hover          | `<div class="az_anim_hov">...</div>`     | Required for hover animations.                        |
| `.infinite`          | `animation-iteration-count: infinite` | `<div class="az_anim infinite">...</div>` | Infinite repetition.                                  |
| `.dur_{n}`           | `animation-duration: {n}s`  | `<div class="az_anim dur_2">...</div>`   | Animation duration.                                   |
| `.delay_{n}`         | `animation-delay: {n}s`      | `<div class="az_anim delay_1">...</div>` | Animation delay.                                       |

#### Animation Types

**Attention Seekers:** `.cube_rotate`, `.blink_txt`, `.blink_bg`, `.blink_b_shadow`, `.blink_brdr_r`, `.bounce`, `.flash`, `.pulse`, `.rubberBand`, `.shakeX`, `.shakeY`, `.headShake`, `.swing`, `.tada`, `.wobble`, `.jello`

**Back Entrances:** `.backInDown`, `.backInLeft`, `.backInRight`, `.backInUp`, `.backOutDown`, `.backOutLeft`, `.backOutRight`, `.backOutUp`

**Bouncing:** `.bounceIn`, `.bounceInDown`, `.bounceInLeft`, `.bounceInRight`, `.bounceInUp`, `.bounceOut`, `.bounceOutDown`, `.bounceOutLeft`, `.bounceOutRight`, `.bounceOutUp`

**Fading:** `.fadeIn`, `.fadeInDown`, `.fadeInDownBig`, `.fadeInLeft`, `.fadeInLeftBig`, `.fadeInRight`, `.fadeInRightBig`, `.fadeInUp`, `.fadeInUpBig`, `.fadeInTopLeft`, `.fadeInTopRight`, `.fadeInBottomLeft`, `.fadeInBottomRight`, `.fadeOut`, `.fadeOutDown`, `.fadeOutDownBig`, `.fadeOutLeft`, `.fadeOutLeftBig`, `.fadeOutRight`, `.fadeOutRightBig`, `.fadeOutUp`, `.fadeOutUpBig`, `.fadeOutTopLeft`, `.fadeOutTopRight`, `.fadeOutBottomRight`, `.fadeOutBottomLeft`

**Flipping:** `.flip`, `.flipInX`, `.flipInY`, `.flipOutX`, `.flipOutY`

**Lightspeed:** `.lightSpeedInRight`, `.lightSpeedInLeft`, `.lightSpeedOutRight`, `.lightSpeedOutLeft`

**Rotating:** `.rotateIn`, `.rotateInDownLeft`, `.rotateInDownRight`, `.rotateInUpLeft`, `.rotateInUpRight`, `.rotateOut`, `.rotateOutDownLeft`, `.rotateOutDownRight`, `.rotateOutUpLeft`, `.rotateOutUpRight`

**Special:** `.hinge`, `.jackInTheBox`, `.rollIn`, `.rollOut`, `.heartBeat`, `.beatFade`

**Zooming:** `.zoomIn`, `.zoomInDown`, `.zoomInLeft`, `.zoomInRight`, `.zoomInUp`, `.zoomOut`, `.zoomOutDown`, `.zoomOutLeft`, `.zoomOutRight`, `.zoomOutUp`

**Sliding:** `.slideInDown`, `.slideInLeft`, `.slideInRight`, `.slideInUp`, `.slideOutDown`, `.slideOutLeft`, `.slideOutRight`, `.slideOutUp`, `.slideThroughLeft`, `.slideThroughRight`, `.slideThroughUp`, `.slideThroughDown`

**Scaling:** `.scaleIn`

**Gradient Effects:** `.gradientShift`, `.fadeEffect`, `.spin`, `.spinBg`, `.spinConicGrad`

**Example:** `<div class="az_anim bounce infinite dur_2">...</div>` creates a bouncing animation that repeats infinitely for 2 seconds.

### 🌈 Gradients

#### Gradient Classes (JS Generated)

The gradient system generates text and background gradients for every combination of named colors and theme colors.

| Pattern              | Property                    | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.{color1}_{color2}_{angle}` | `background: linear-gradient({angle}deg, {color1}, {color2})` | `<div class="red_blue_90">...</div>` | Text gradient from color1 to color2 at specified angle. |
| `.{color1}_{color2}_{angle}bg` | `background: linear-gradient({angle}deg, {color1}, {color2})` | `<div class="clr1_clr2_180bg">...</div>` | Background gradient from color1 to color2 at specified angle. |

**Angles:** Available in 45-degree increments from 0 to 360 (0, 45, 90, 135, 180, 225, 270, 315, 360)

**Examples:**
- `.red_blue_90` - Text gradient from red to blue at 90 degrees
- `.clr1_clr2_180bg` - Background gradient from theme color 1 to theme color 2 at 180 degrees
- `.green_yellow_45` - Text gradient from green to yellow at 45 degrees

### 📱 Responsive Design

#### Responsive Prefixes

All utility classes can be prefixed for responsive behavior:

| Prefix               | Breakpoint                  | Example                                  | Description                                           |
| -------------------- | --------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `.w_`                | `min-width: 1441px`         | `<div class="w_flex">...</div>`          | Wide screens (1441px+).                               |
| `.desk_`             | `min-width: 992px` and `max-width: 1440px` | `<div class="desk_flex">...</div>` | Desktop (992px-1440px).                               |
| `.tab_`              | `min-width: 481px` and `max-width: 991px` | `<div class="tab_flex">...</div>` | Tablet (481px-991px).                                 |
| `.mob_`              | `max-width: 480px`          | `<div class="mob_flex">...</div>`        | Mobile (480px and below).                             |

**Example:** `.flex` applies `display: flex` on all screens. `.desk_flex` applies `display: flex` only on desktop screens.

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





-----

## Quick Reference

### 📐 Layout & Display
**Flexbox:** `flex`, `c_flex`, `fd_col`, `flex_col`, `wrap`, `space_bet`, `space_ar`, `justify_even`, `center`
**Grid:** `grid`, `gp_a`, `cols7`
**Display:** `block`, `blk`, `inline_block`, `inlnblk`, `inline`, `hidden`

### 🎨 Colors & Backgrounds
**Text Colors:** `primary`, `secondary`, `dark`, `light`, `positive`, `success`, `negative`, `danger`, `info`, `warn`, `highlighted`
**Background Colors:** `primarybg`, `secondarybg`, `darkbg`, `lightbg`, `positivebg`, `dangerbg`, `negativebg`, `infobg`
**Background Effects:** `blurybg`, `white_blurybg`, `cover`, `contain`, `bg_center`, `bg_no_repeat`, `bg_no_r`

### 📏 Sizing & Spacing
**Width:** `q_w`, `t_w`, `h_w`, `tt_w`, `tq_w`, `f_w`, `fitcontent`, `fitcont`, `w_h_eq`
**Spacing:** `p`, `m`, `ma`, `m0a`, `cont`
**Numeric:** `w{1-99}`, `h{1-99}`, `m{1-99}`, `p{1-99}`, `mt{1-99}`, `mr{1-99}`, `mb{1-99}`, `ml{1-99}`, `pt{1-99}`, `pr{1-99}`, `pb{1-99}`, `pl{1-99}`

### 🎯 Positioning
**Position:** `relative`, `absolute`, `fixed`, `sticky`, `sticky_top`, `top`, `bottom`
**Alignment:** `self_center`, `center`, `t_center`, `t_c`, `t_right`, `t_r`, `t_left`, `t_l`, `t_justify`
**Floats:** `left`, `l`, `right`, `r`, `clear`

### 🖋️ Typography
**Font Sizes:** `xx-small`, `x-small`, `small`, `smaller`, `large`, `larger`, `x-large`, `xx-large`, `xxx-large`, `sm`
**Font Styles:** `f_az`, `b`, `stroked`, `t3d`
**Text Direction:** `ltr`, `rtl`, `bidi`, `v_lr`, `v_rl`

### 🎭 Borders & Effects
**Border Sides:** `border_t`, `border_b`, `border_l`, `border_r`, `border`, `brdr`
**Border Styles:** `solid`, `solid_t`, `solid_r`, `solid_b`, `solid_l`, `dotted`, `dotted_t`, `dotted_r`, `dotted_b`, `dotted_l`, `dashed`, `dashed_t`, `dashed_r`, `dashed_b`, `dashed_l`
**Border Radius:** `radius_r`, `radius_l`

### 🎪 Shadows & Effects
**Box Shadows:** `shadow`, `slightshadow`, `shadow_d`, `d_shadow`, `slightshadowdown`, `shadow_u`, `u_shadow`, `shadow_l`, `l_shadow`, `shadow_r`, `r_shadow`, `shadow_ld`, `ld_shadow`, `shadow_rd`, `rd_shadow`, `innershadow`
**Visual Effects:** `invert`, `invisible`, `flip_x`, `flip_y`, `no_scale`

### 🗂️ Components & States
**UI Components:** `card`, `tab`, `actv_tb`, `tag`, `collapsible`, `tgl`
**States:** `slctd`, `selected`, `disabled`, `attractive`, `pointer`, `grab`, `no_of`, `of_a`, `ofa`

### 🎮 Z-index Layers
`zi0`, `zi1`, `zi2`, `zi3`, `zi4`, `zi5`, `zi6`, `zi`

### 🎬 Animations
**Base:** `az_anim`, `az_anim_hov`, `infinite`, `dur_{n}`, `delay_{n}`
**Types:** `cube_rotate`, `blink_txt`, `blink_bg`, `blink_b_shadow`, `blink_brdr_r`, `bounce`, `flash`, `pulse`, `rubberBand`, `shakeX`, `shakeY`, `headShake`, `swing`, `tada`, `wobble`, `jello`, `backInDown`, `backInLeft`, `backInRight`, `backInUp`, `backOutDown`, `backOutLeft`, `backOutRight`, `backOutUp`, `bounceIn`, `bounceInDown`, `bounceInLeft`, `bounceInRight`, `bounceInUp`, `bounceOut`, `bounceOutDown`, `bounceOutLeft`, `bounceOutRight`, `bounceOutUp`, `fadeIn`, `fadeInDown`, `fadeInDownBig`, `fadeInLeft`, `fadeInLeftBig`, `fadeInRight`, `fadeInRightBig`, `fadeInUp`, `fadeInUpBig`, `fadeInTopLeft`, `fadeInTopRight`, `fadeInBottomLeft`, `fadeInBottomRight`, `fadeOut`, `fadeOutDown`, `fadeOutDownBig`, `fadeOutLeft`, `fadeOutLeftBig`, `fadeOutRight`, `fadeOutRightBig`, `fadeOutUp`, `fadeOutUpBig`, `fadeOutTopLeft`, `fadeOutTopRight`, `fadeOutBottomRight`, `fadeOutBottomLeft`, `flip`, `flipInX`, `flipInY`, `flipOutX`, `flipOutY`, `lightSpeedInRight`, `lightSpeedInLeft`, `lightSpeedOutRight`, `lightSpeedOutLeft`, `rotateIn`, `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight`, `rotateOut`, `rotateOutDownLeft`, `rotateOutDownRight`, `rotateOutUpLeft`, `rotateOutUpRight`, `hinge`, `jackInTheBox`, `rollIn`, `rollOut`, `heartBeat`, `beatFade`, `zoomIn`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInUp`, `zoomOut`, `zoomOutDown`, `zoomOutLeft`, `zoomOutRight`, `zoomOutUp`, `slideInDown`, `slideInLeft`, `slideInRight`, `slideInUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight`, `slideOutUp`, `slideThroughLeft`, `slideThroughRight`, `slideThroughUp`, `slideThroughDown`, `scaleIn`, `gradientShift`, `fadeEffect`, `spin`, `spinBg`, `spinConicGrad`

### 🌈 Gradients
**Pattern:** `{color1}_{color2}_{angle}`, `{color1}_{color2}_{angle}bg`
**Angles:** `0`, `45`, `90`, `135`, `180`, `225`, `270`, `315`, `360`

### 📱 Responsive Prefixes
`w_`, `desk_`, `tab_`, `mob_`

### ⚠️ Notifications & Alerts
`ok`, `success`, `yes`, `no`, `fail`, `serious`, `warn`, `danger`, `info`, `highlighted`

 
