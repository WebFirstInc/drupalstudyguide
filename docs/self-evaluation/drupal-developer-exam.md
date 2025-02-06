# Acquia Certified Drupal 10 Developer - Self Evaluation Quiz

The **Acquia Certified Drupal Developer Exam** evaluates a candidate’s knowledge of development in Drupal. While Acquia does not publish the exact questions from their certification tests, they provide a **blueprint** outlining the topics covered. Below is an overview of the types of questions you might encounter based on the blueprint, combined with insights from past test-takers and official preparation resources:

This self-evaluation quiz consists of **20 questions** covering key topics from the **Acquia Certified Developer Exam**, including **Drupal architecture, essential APIs, content modeling, theming, and site-building**.

---

### 1. Drupal Basics & Architecture
1. **What type of architecture does Drupal use?**
  - A. Monolithic
  - B. Microservices
  - C. Decoupled CMS
  - D. Modular

2. **Which of the following is NOT a standard Drupal content entity?**
  - A. Node
  - B. Block
  - C. Plugin
  - D. User

3. **In Drupal, which component is responsible for defining a new content type?**
  - A. Entity
  - B. Field
  - C. Plugin
  - D. Bundle

---

### 2. Content Modeling & Site Building
4. **What is the primary function of the Entity API?**
  - A. Managing user sessions
  - B. Handling structured content storage and retrieval
  - C. Rendering Twig templates
  - D. Executing database queries

5. **Which of the following statements about Taxonomy in Drupal is TRUE?**
  - A. Taxonomies can only be applied to Nodes.
  - B. Taxonomies must be created using code.
  - C. Taxonomies are used to categorize content using Terms and Vocabularies.
  - D. Taxonomies do not support hierarchical relationships.

6. **Which module is used to configure and display views in Drupal?**
  - A. Entity API
  - B. Views module
  - C. Field module
  - D. Panels

---

### 3. Theming & Frontend Development
7. **What templating system does Drupal use for rendering HTML output?**
  - A. Smarty
  - B. Twig
  - C. Handlebars
  - D. Blade

8. **Where are theme `.twig` files stored in a custom Drupal theme?**
  - A. `/modules/custom/{theme_name}/templates/`
  - B. `/themes/{theme_name}/templates/`
  - C. `/libraries/{theme_name}/templates/`
  - D. `/web/{theme_name}/templates/`

9. **Which hook is used to preprocess variables before rendering a template in Drupal?**
  - A. `hook_preprocess_HOOK()`
  - B. `hook_theme()`
  - C. `hook_render_alter()`
  - D. `hook_theme_suggestions()`

10. **How can you override a specific block template in a custom theme?**
- A. Create a file named `block--{machine-name}.html.twig` in the `templates` folder.
- B. Modify the `block.module` file directly.
- C. Change the settings in the Drupal UI.
- D. Add a new field to the block.

---

### 4. Essential Drupal APIs
11. **Which Drupal API is used to interact with configuration settings?**
- A. State API
- B. Config API
- C. Cache API
- D. Routing API

12. **Which method retrieves a configuration value in Drupal?**
- A. `\Drupal::state()->get()`
- B. `\Drupal::config()->get()`
- C. `\Drupal::entityTypeManager()->getStorage()->load()`
- D. `\Drupal::database()->select()`

13. **Which Drupal API is responsible for handling structured data storage and retrieval?**
- A. Plugin API
- B. Render API
- C. Entity API
- D. Routing API

14. **Which hook is used to alter the render array of a block before it is displayed?**
- A. `hook_block_alter()`
- B. `hook_block_view_alter()`
- C. `hook_theme()`
- D. `hook_block_configure_alter()`

15. **Which caching mechanism should be used to store temporary data that does not need to persist across page reloads?**
- A. Config API
- B. State API
- C. Cache API
- D. Entity API

---

### 5. Custom Module Development
16. **Which of the following is the correct way to define a custom module in Drupal?**
- A. Create a `.info.yml` file inside the `modules/custom/{module_name}/` directory
- B. Add the module to `settings.php`
- C. Place a `.module` file in the `themes/custom/` directory
- D. Define the module inside the `composer.json` file

17. **How do you declare a custom service in a Drupal module?**
- A. Using a `.module` file
- B. In a `services.yml` file
- C. In the `settings.php` file
- D. In a `routing.yml` file

18. **Which of the following best describes a Drupal plugin?**
- A. A module that extends another module
- B. A self-contained piece of functionality defined by an annotation and managed by a Plugin Manager
- C. A custom entity type
- D. A way to override configurations

19. **Which function should be used to add a route in a custom module?**
- A. `hook_menu()`
- B. `hook_route_alter()`
- C. Define routes in a `.routing.yml` file
- D. `hook_form_alter()`

20. **Which of the following is the correct way to trigger a form submission handler in Drupal?**
- A. Implement `hook_form_alter()`
- B. Use `hook_theme()`
- C. Define a form class that extends `FormBase` or `ConfigFormBase`
- D. Modify the `.module` file directly

---

[Answers can be found here](/self-evaluation/drupal-developer-exam-answers)
