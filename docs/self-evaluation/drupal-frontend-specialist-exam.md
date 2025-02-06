# Acquia Certified Drupal 10 Frontend Specialist - Self Evaluation Quiz
This self-evaluation quiz consists of **20 questions** covering key topics from the **Acquia Certified Drupal 10 Frontend Specialist Exam**, including **Drupal theming, Twig, CSS/JS asset management, rendering, accessibility, and frontend performance optimization**.

---

### 1. Drupal Theming & Twig

**1. What templating engine does Drupal 10 use by default?**
- A. Handlebars
- B. Smarty
- C. Twig
- D. Blade

**2. Where are theme `.twig` files stored in a custom Drupal theme?**
- A. `/modules/custom/{theme_name}/templates/`
- B. `/themes/{theme_name}/templates/`
- C. `/libraries/{theme_name}/templates/`
- D. `/web/{theme_name}/templates/`

**3. Which of the following is the correct way to print a variable in a Twig template?**
- A. <code v-pre>{{ variable }}</code>
- B. `{% print variable %}`
- C. `echo variable;`
- D. `{# variable #}`

**4. How do you override a specific block template in a custom theme?**
- A. Modify the `block.module` file directly.
- B. Create a file named `block--{machine-name}.html.twig` in the `templates` folder.
- C. Change the settings in the Drupal UI.
- D. Add a new field to the block.

---

### 2. Asset Management (CSS, JS, and Libraries)

**5. Which of the following files is used to declare CSS and JavaScript libraries in a theme?**
- A. `theme.info.yml`
- B. `theme.libraries.yml`
- C. `theme.routing.yml`
- D. `theme.assets.yml`

**6. How do you attach a library to a specific block in a Twig template?**
- A. <code v-pre>{{ attach_library('theme_name/library_name') }}</code>
- B. `{% include 'theme_name/library_name' %}`
- C. `drupal_add_css('theme_name/library_name');`
- D. `{% attach_css 'theme_name/library_name' %}`

**7. What is the recommended way to add a JavaScript file in a custom theme?**
- A. Add the file directly in `theme.info.yml`
- B. Include it using `script` tags in `html.html.twig`
- C. Define it in `theme.libraries.yml` and attach it to templates
- D. Place it in the `/assets/js/` directory without declaring it

---

### 3. Rendering and Theme Hooks

**8. Which function is used to preprocess variables before rendering a template?**
- A. `hook_theme()`
- B. `hook_preprocess_HOOK()`
- C. `hook_theme_suggestions()`
- D. `hook_render_alter()`

**9. What is the purpose of `hook_theme()` in Drupal?**
- A. To declare new theme implementations
- B. To alter existing Twig templates
- C. To define the regions in a theme
- D. To override block visibility settings

**10. How can you generate a render array for an image in Drupal?**
- A. Using `theme('image', ['path' => 'path/to/image.jpg'])`
- B. Creating a custom Twig template
- C. Using `['#theme' => 'image', '#uri' => 'public://image.jpg']`
- D. Embedding the image directly in a template

---

### 4. Accessibility & Responsive Design

**11. What HTML attribute should be used to provide alternative text for images in Drupal?**
- A. `alt`
- B. `title`
- C. `data-caption`
- D. `aria-text`

**12. Which of the following best describes ARIA (Accessible Rich Internet Applications) attributes in Drupal theming?**
- A. They provide visual enhancements for interactive elements.
- B. They are used to add JavaScript animations to improve user experience.
- C. They help screen readers interpret dynamic content and improve accessibility.
- D. They replace standard HTML attributes for styling elements.

**13. What CSS feature allows responsive design in Drupal themes?**
- A. CSS Grid
- B. Media Queries
- C. Variables
- D. Web Components

---

### 5. Performance Optimization

**14. What is the purpose of Drupal's `advagg` module?**
- A. To manage CSS/JS aggregation and minification
- B. To improve site accessibility
- C. To optimize database queries
- D. To create custom theme regions

**15. How does Drupal optimize CSS and JavaScript for performance?**
- A. By minifying all assets by default
- B. By using aggregation and compression
- C. By loading all assets asynchronously
- D. By preventing external files from being included

---

### 6. Debugging and Development Tools

**16. What module provides a toolbar with debugging information about blocks, templates, and queries?**
- A. Devel
- B. Admin Toolbar
- C. Web Profiler
- D. Views UI

**17. How can you enable Twig debugging in Drupal 10?**
- A. Set `debug: true` in `services.yml`
- B. Modify `settings.php` to enable `twig_debug`
- C. Enable the Devel module
- D. Use the `drush debug-twig` command

---

### 7. Multilingual Theming

**18. How can you make a theme translation-ready in Drupal?**
- A. Use `t()` function in PHP and `trans` filter in Twig
- B. Store all text as static HTML
- C. Use inline JavaScript for translations
- D. Define translations in the `theme.info.yml` file

**19. What module is required for multilingual content translation in Drupal?**
- A. Translation Management Tool
- B. Internationalization (i18n)
- C. Content Translation
- D. Locale

---

### 8. Site Building and Best Practices

**20. What is the recommended way to apply a custom template to a specific content type?**
- A. Create `node--{content-type}.html.twig` in the theme
- B. Modify `html.html.twig` directly
- C. Add custom CSS classes using the Block module
- D. Override the entire theme in `settings.php`

---

[Answers can be found here](/self-evaluation/drupal-frontend-specialist-exam-answers)
