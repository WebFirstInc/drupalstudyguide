# Acquia Certified Drupal 10 Frontend Specialist
## Self Evaluation Answers
### Answer Key

---

**1. What templating engine does Drupal 10 use by default?**
> **Answer**: C. Twig  
> **Explanation**: Drupal 10 utilizes Twig as its default templating engine, providing a secure and flexible way to design templates.  
> **Reference**: [Twig in Drupal](https://www.drupal.org/docs/develop/theming-drupal/twig-in-drupal)  

**2. Where are theme `.twig` files stored in a custom Drupal theme?**
> **Answer**: B. `/themes/{theme_name}/templates/`  
> **Explanation**: In a custom Drupal theme, Twig template files are typically located in the `templates` directory within the theme's folder.  
> **Reference**: [Working With Twig Templates](https://www.drupal.org/docs/develop/theming-drupal/twig-in-drupal/working-with-twig-templates)  

**3. Which of the following is the correct way to print a variable in a Twig template?**
> **Answer**: A. <code v-pre>{{</code> variable <code v-pre>}}</code>  
> **Explanation**: In Twig templates, variables are printed using double curly braces.  
> **Reference**: [Twig Syntax](https://twig.symfony.com/doc/3.x/templates.html)  

**4. How do you override a specific block template in a custom theme?**
> **Answer**: B. Create a file named `block--{machine-name}.html.twig` in the `templates` folder.  
> **Explanation**: To override a specific block's template, create a Twig file following the naming convention `block--{machine-name}.html.twig` in your theme's `templates` directory.  
> **Reference**: [Twig Template Naming Conventions](https://www.drupal.org/docs/develop/theming-drupal/twig-in-drupal/twig-template-naming-conventions)  

**5. Which of the following files is used to declare CSS and JavaScript libraries in a theme?**
> **Answer**: B. `theme.libraries.yml`  
> **Explanation**: In Drupal themes, CSS and JavaScript libraries are declared in the `theme.libraries.yml` file.  
> **Reference**: [Adding assets (CSS, JS) to a Drupal theme via *.libraries.yml](https://www.drupal.org/docs/develop/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml)  

**6. How do you attach a library to a specific block in a Twig template?**
> **Answer**: A. <code v-pre>{{</code> attach_library('theme_name/library_name') <code v-pre>}}</code>  
> **Explanation**: To attach a library within a Twig template, use the `attach_library` function with the theme and library name.  
> **Reference**: [Attaching a library via a Twig template](https://www.drupal.org/docs/develop/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml#attach-library-specific-twig)  

**7. What is the recommended way to add a JavaScript file in a custom theme?**
> **Answer**: C. Define it in `theme.libraries.yml` and attach it to templates.  
> **Explanation**: The recommended approach is to define JavaScript files in the `theme.libraries.yml` file and attach them as needed in templates.  
> **Reference**: [Adding assets (CSS, JS) to a Drupal theme via *.libraries.yml](https://www.drupal.org/docs/develop/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml#attach-library-all-pages)  

**8. Which function is used to preprocess variables before rendering a template?**
> **Answer**: B. `hook_preprocess_HOOK()`  
> **Explanation**: The `hook_preprocess_HOOK()` functions allow developers to preprocess variables before they are rendered in templates.  
> **Reference**: [Twig best practices - preprocess functions and templates](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/twig-best-practices-preprocess-functions-and-templates)  

**9. What is the purpose of `hook_theme()` in Drupal?**
> **Answer**: A. To declare new theme implementations.  
> **Explanation**: The `hook_theme()` function is used to declare new theme implementations, specifying how and when templates are used.  
> **Reference**: [hook_theme()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook_theme/10)  

**10. How can you generate a render array for an image in Drupal?**
> **Answer**: C. Using `['#theme' => 'image', '#uri' => 'public://image.jpg']`  
> **Explanation**: In Drupal, you can create a render array for an image by specifying the `#theme` element as 'image' and providing the `#uri` to the image file.  
> **Reference**: [Render API Overview](https://www.drupal.org/docs/drupal-apis/render-api)  

**11. What HTML attribute should be used to provide alternative text for images in Drupal?**
> **Answer**: A. `alt`  
> **Explanation**: The `alt` attribute in HTML is used to provide alternative text descriptions for images, which is essential for accessibility and is a best practice in Drupal theming.  
> **Reference**: [HTML: alt Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt)  

**12. Which of the following best describes ARIA (Accessible Rich Internet Applications) attributes in Drupal theming?**
> **Answer**: C. They help screen readers interpret dynamic content and improve accessibility.  
> **Explanation**: ARIA (Accessible Rich Internet Applications) attributes enhance accessibility by providing additional semantic information to assistive technologies like screen readers.  
> **Reference**: [MDN Web Docs: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) & [Drupal Accessibility Standards](https://www.drupal.org/docs/accessibility)  

**13. What CSS feature allows responsive design in Drupal themes?**
> **Answer**: B. Media Queries  
> **Explanation**: Media queries are a CSS feature that enable the application of styles based on the characteristics of the device, such as its width, height, or orientation, facilitating responsive design in Drupal themes.  
> **Reference**: [Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)  

**14. What is the purpose of Drupal's `advagg` module?**
> **Answer**: A. To manage CSS/JS aggregation and minification  
> **Explanation**: The Advanced CSS/JS Aggregation (`advagg`) module enhances Drupal's default aggregation and minification capabilities, improving site performance by optimizing the delivery of CSS and JavaScript files.  
> **Reference**: [AdvAgg Module](https://www.drupal.org/project/advagg)  

**15. How does Drupal optimize CSS and JavaScript for performance?**
> **Answer**: B. By using aggregation and compression  
> **Explanation**: Drupal improves performance by aggregating multiple CSS and JavaScript files into single files and compressing them, reducing the number of HTTP requests and the overall file size.  
> **Reference**: [Aggregate CSS and JS files in Drupal core](https://www.drupal.org/docs/administering-a-drupal-site/managing-site-performance-and-scalability/aggregate-css-and-js-files-in-drupal-core)  

**16. What module provides a toolbar with debugging information about blocks, templates, and queries?**
> **Answer**: C. Web Profiler  
> **Explanation**: The Web Profiler module adds a toolbar to Drupal that displays debugging information, including details about blocks, templates, and database queries, aiding developers in performance analysis and debugging.  
> **Reference**: [Web Profiler Module](https://www.drupal.org/project/devel)  

**17. How can you enable Twig debugging in Drupal 10?**
> **Answer**: A. Set `debug: true` in `services.yml`  
> **Explanation**: To enable Twig debugging in Drupal 10, you can set `debug: true` in the `twig.config` parameters within the `services.yml` file, which allows for the display of template suggestions and other helpful debugging information.  
> **Reference**: [Twig Debugging](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/debugging-twig-templates)  

**18. How can you make a theme translation-ready in Drupal?**
> **Answer**: A. Use `t()` function in PHP and `trans` filter in Twig  
> **Explanation**: To make a Drupal theme translation-ready, use the `t()` function in PHP code and the `trans` filter in Twig templates to mark strings for translation, enabling multilingual support.  
> **Reference**: [Translation API overview](https://www.drupal.org/docs/8/api/translation-api/overview)  

**19. What module is required for multilingual content translation in Drupal?**
> **Answer**: C. Content Translation  
> **Explanation**: The Content Translation module in Drupal allows for the translation of content entities, such as nodes, enabling multilingual support for site content.  
> **Reference**: [Choosing and installing multilingual modules](https://www.drupal.org/docs/administering-a-drupal-site/multilingual-guide/choosing-and-installing-multilingual-modules)  

**20. What is the recommended way to apply a custom template to a specific content type?**
> **Answer**: A. Create `node--{content-type}.html.twig` in the theme  
> **Explanation**: To apply a custom template to a specific content type in Drupal, create a Twig template file named `node--{content-type}.html.twig` in your theme's `templates` directory, replacing `{content-type}` with the machine name of your content type.  
> **Reference**: [Twig Template Naming Conventions](https://www.drupal.org/docs/develop/theming-drupal/twig-in-drupal/twig-template-naming-conventions)  

---

These explanations and references should help validate the correct answers and provide further insight into Drupal's backend development practices.
