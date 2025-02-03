# Acquia Certified Drupal 10 Developer
## Self Evaluation Answers
### Answer Key

---

**1. What type of architecture does Drupal use?**  
> **Answer**: D. Modular      
> **Explanation**: Drupal employs a modular architecture, allowing developers to extend and customize   functionality by enabling or creating modules.    
> **Reference**: [1.1. Concept: Drupal as a Content Management System](https://www.drupal.  org/docs/user_guide/en/understanding-drupal.html)  

**2. Which of the following is NOT a standard Drupal content entity?**
> **Answer**: C. Plugin    
> **Explanation**: In Drupal, standard content entities include nodes, users, and blocks. Plugins are a   design pattern used to extend functionality but are not content entities.  
> **Reference**: [Plugin API overview](https://www.drupal.  org/docs/drupal-apis/plugin-api/plugin-api-overview) & [2.3. Concept: Content Entities and Fields](https://www.drupal.org/docs/user_guide/en/planning-data-types.html)  

**3. In Drupal, which component is responsible for defining a new content type?**
> **Answer**: D. Bundle    
> **Explanation**: A bundle is a subtype of an entity type. In Drupal, content types are bundles of the   node entity type.  
> **Reference**: [Bundles](https://www.drupal.org/docs/drupal-apis/entity-api/bundles)    

**4. What is the primary function of the Entity API?**
> **Answer**: B. Handling structured content storage and retrieval    
> **Explanation**: The Entity API in Drupal manages the storage, loading, and handling of structured data   entities.  
> **Reference**: [Introduction to Entity API in Drupal 8](https://www.drupal.  org/docs/drupal-apis/entity-api/introduction-to-entity-api-in-drupal-8)  

**5. Which of the following statements about Taxonomy in Drupal is TRUE?**
> **Answer**: C. Taxonomies are used to categorize content using Terms and Vocabularies.    
> **Explanation**: Drupal's Taxonomy system categorizes content using vocabularies (groups of terms) and   terms (individual items within a vocabulary).  
> **Reference**: [Taxonomy module overview](https://www.drupal.  org/docs/8/core/modules/taxonomy/taxonomy-module-overview)  

**6. Which module is used to configure and display views in Drupal?**
> **Answer**: B. Views module    
> **Explanation**: The Views module allows users to create, manage, and display lists of content.    
> **Reference**: [9.1. Concept: Uses of Views](https://www.drupal.org/docs/user_guide/en/views-concept.html)    

**7. What templating system does Drupal use for rendering HTML output?**
> **Answer**: B. Twig    
> **Explanation**: Drupal uses the Twig templating engine for rendering HTML, providing a secure and   flexible way to manage templates.  
> **Reference**: [Working With Twig Templates](https://www.drupal.  org/docs/develop/theming-drupal/twig-in-drupal/working-with-twig-templates)  

**8. Where are theme `.twig` files stored in a custom Drupal theme?**
> **Answer**: B. `/themes/{theme_name}/templates/`    
> **Explanation**: In a custom Drupal theme, Twig template files are typically stored in the `templates`   directory within the theme's folder.  
> **Reference**: [Working With Twig Templates](https://www.drupal.  org/docs/develop/theming-drupal/twig-in-drupal/working-with-twig-templates)  

**9. Which hook is used to preprocess variables before rendering a template in Drupal?**
> **Answer**: A. `hook_preprocess_HOOK()`    
> **Explanation**: The `hook_preprocess_HOOK()` functions are used to modify variables before they are   passed to the theme layer for rendering.  
> **Reference**: [Twig best practices - preprocess functions and templates](https://www.drupal.  org/docs/theming-drupal/twig-in-drupal/twig-best-practices-preprocess-functions-and-templates)  

**10. How can you override a specific block template in a custom theme?**
> **Answer**: A. Create a file named `block--{machine-name}.html.twig` in the `templates` folder.    
> **Explanation**: To override a specific block's template, create a Twig file named `block--{machine-name}  .html.twig` in your theme's `templates` directory, replacing `{machine-name}` with the block's machine name.  
> **Reference**: [Working With Twig Templates](https://www.drupal.  org/docs/develop/theming-drupal/twig-in-drupal/working-with-twig-templates)  

**11. Which Drupal API is used to interact with configuration settings?**
> **Answer**: B. Config API    
> **Explanation**: The Config API manages configuration data, allowing modules to store and retrieve   configuration settings.  
> **Reference**: [Simple Configuration API](https://www.drupal.  org/docs/drupal-apis/configuration-api/simple-configuration-api)  

**12. Which method retrieves a configuration value in Drupal?**
> **Answer**: B. `\Drupal::config()->get()`    
> **Explanation**: The `\Drupal::config()->get()` method is used to retrieve configuration values in Drupal.    
> **Reference**: [Simple Configuration API](https://www.drupal.  org/docs/drupal-apis/configuration-api/simple-configuration-api)  

**13. Which Drupal API is responsible for handling structured data storage and retrieval?**
> **Answer**: C. Entity API    
> **Explanation**: The Entity API manages the storage and retrieval of structured data entities in Drupal.    
> **Reference**: [Introduction to Entity API in Drupal 8](https://www.drupal.  org/docs/drupal-apis/entity-api/introduction-to-entity-api-in-drupal-8)  

**14. Which hook is used to alter the render array of a block before it is displayed?**
> **Answer**: B. `hook_block_view_alter()`    
> **Explanation**: The `hook_block_view_alter()` function allows developers to modify the render array of a   block before it is rendered.  
> **Reference**: [Block API](https://api.drupal.org/api/drupal/core%21modules%21block%21block.api.  php/group/block_api/10)  

**15. Which caching mechanism should be used to store temporary data that does not need to persist across page reloads?**
> **Answer**: B. State API    
> **Explanation**: The State API is designed for storing temporary, non-persistent data that is specific to   a particular environment and does not need to be synchronized across different environments. It is suitable for data that may change frequently and does not need to persist across page reloads.  
> **Reference**: [State API Overview](https://www.drupal.  org/docs/develop/drupal-apis/state-api/state-api-overview)  

**16. Which of the following is the correct way to define a custom module in Drupal?**
> **Answer**: A. Create a `.info.yml` file inside the `modules/custom/{module_name}/` directory    
> **Explanation**: To define a custom module in Drupal, you need to create a directory named after your   module in `modules/custom/` and include a `{module_name}.info.yml` file within that directory. This file provides metadata about the module, such as its name, type, description, and package.  
> **Reference**: [Let Drupal know about your module with an .info.yml file](https://www.drupal.  org/docs/develop/creating-modules/let-drupal-know-about-your-module-with-an-infoyml-file)  

**17. How do you declare a custom service in a Drupal module?**
> **Answer**: B. In a `services.yml` file    
> **Explanation**: In Drupal, custom services are declared in a `{module_name}.services.yml` file located   in the module's directory. This YAML file defines the service's class and any dependencies it may have.  
> **Reference**: [Services and dependency injection in Drupal](https://www.drupal.  org/docs/drupal-apis/services-and-dependency-injection/services-and-dependency-injection-in-drupal)  

**18. Which of the following best describes a Drupal plugin?**
> **Answer**: B. A self-contained piece of functionality defined by an annotation and managed by a Plugin   Manager  
> **Explanation**: A Drupal plugin is a reusable piece of functionality that is discovered and instantiated   by a plugin manager. Plugins are defined using annotations in the docblock of a class and provide a way to extend Drupal's functionality in a consistent manner.  
> **Reference**: [Plugin API Overview](https://www.drupal.  org/docs/drupal-apis/plugin-api/plugin-api-overview)  

**19. Which function should be used to add a route in a custom module?**
> **Answer**: C. Define routes in a `.routing.yml` file    
> **Explanation**: In Drupal, routes are defined in a `{module_name}.routing.yml` file within the module's   directory. This YAML file maps URL paths to controllers or other callbacks and specifies parameters, requirements, and other routing options.  
> **Reference**: [Routing System Overview](https://www.drupal.  org/docs/drupal-apis/routing-system/routing-system-overview)  

**20. Which of the following is the correct way to trigger a form submission handler in Drupal?**
> **Answer**: C. Define a form class that extends `FormBase` or `ConfigFormBase`    
> **Explanation**: To create a form in Drupal, you define a form class that extends `FormBase` (for   standard forms) or `ConfigFormBase` (for configuration forms). Within this class, you implement methods such as `buildForm()`, `submitForm()`, and `getFormId()` to define the form's structure and behavior.  
> **Reference**: [Introduction to Form API](https://www.drupal.  org/docs/drupal-apis/form-api/introduction-to-form-api)  

---

These explanations and references should help validate the correct answers and provide further insight into Drupal's backend development practices.
