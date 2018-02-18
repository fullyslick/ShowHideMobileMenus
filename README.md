# About
This is a simple `HTML, CSS, JS` code to transform a menu from desktop to mobile version. On desktop there is a horizontal menu. On mobile version the menu is hidden and a button appears. On `click` of the button the menu is shown, with a simple slide effect. The `JS` code also determines if the menu was displayed or hidden when switching from desktop to mobile back and forth. The code is implemented twice, to show that it can be used many times on the same page. Do not forget to follow the [requirements](#requirements) to avoid bugs.

## How to
To implement this code you need to have a `button` of `class="mobile-button"`, and an element of `class="mobile-menu"` that will hold an unordered list `ul`. The `.mobile-button` and `.mobile-menu` should be siblings (on the same level in the DOM). Example:
```
<button type="button" name="button" class="mobile-button">Menu</button>
<div class="mobile-menu">
  <!-- unordered list here -->
</div>
```

Copy the CSS properties from the [style.css](style.css) file. You can avoid copying the Global CSS properties as you might already have them implemented in your style sheet.

Copy the [script.js](script.js) code.

### Requirements
1. The value of the `mobileBreakPoint` in [script.js](script.js) code should be equal to the breakpoint for the mobile version in [style.css](style.css). In this example it is `650`.
2. There should be only one `button` of `class="mobile-button"` and only one sibling of `class="mobile-menu"` on a same DOM level. Example:
**AVOID THIS:**
```
<div class="some-wrapper">
   <button type="button" name="button" class="mobile-button">Top Menu</button>
   <nav class="mobile-menu">  <!-- unordered list here --> </nav>
   <button type="button" name="button" class="mobile-button">Top Menu</button>
   <div class="mobile-menu">  <!-- unordered list here --> </div>
</div>
```
**Instead wrap the button/menu pairs inside separated div-s like this:**
```
<!-- Pair one -->
<div>
    <button type="button" name="button" class="mobile-button">Top Menu</button>
    <nav class="mobile-menu"><!-- unordered list here --></nav>
</div>

<!-- Pair two --->  
<div>
   <button type="button" name="button" class="mobile-button">Top Menu</button>
   <div class="mobile-menu"><!-- unordered list here --></div>
</div>
```

#### License
The content of this repository is licensed under a [Creative Commons Attribution License](https://choosealicense.com/licenses/mit/).
