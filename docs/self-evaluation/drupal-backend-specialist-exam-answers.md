# Acquia Certified Drupal 10 Backend Specialist
## Self Evaluation Answers
### Answer Key

---

**1. What is the primary difference between entities and configuration entities in Drupal?**
> **Answer**: C. Entities represent content and users, while configuration entities store settings and   configurations.  
> **Explanation**: In Drupal, entities are used to represent and manage data such as content (nodes),   users, and taxonomy terms. Configuration entities, on the other hand, are used to store settings and configurations that define how the site behaves.  
> **Reference**: [Understanding Drupal: Concept: Types of Data](https://www.drupal.org/docs/user_guide/en/understanding-drupal.html)  

**2. How does the Typed Data API contribute to Drupal’s data handling?**
> **Answer**: A. It provides a type-safe structure for working with data in entities and fields.  
> **Explanation**: The Typed Data API in Drupal offers a consistent and type-safe way to interact with   data, ensuring that data types are validated and handled appropriately across entities and fields.  
> **Reference**: [Typed Data API Overview](https://www.drupal.org/docs/develop/drupal-apis/typed-data-api/typed-data-api-overview)  

**3. Which Drupal API is primarily responsible for defining and managing entity types?**
> **Answer**: C. Entity API  
> **Explanation**: The Entity API in Drupal is responsible for defining and managing entity types,   providing a unified way to handle different kinds of data entities within the system.  
> **Reference**: [Introduction to Entity API in Drupal 8](https://www.drupal.org/docs/drupal-apis/entity-api/introduction-to-entity-api-in-drupal-8)  

**4. What is the required file to define a custom Drupal module?**
> **Answer**: C. `{module_name}.info.yml`  
> **Explanation**: To define a custom module in Drupal, you need to create an `.info.yml` file named after   your module (e.g., `my_module.info.yml`). This file provides essential metadata about the module, such as its name, type, description, and dependencies.  
> **Reference**: [Creating Modules](https://www.drupal.org/docs/develop/creating-modules)  

**5. Which of the following statements about services in Drupal is TRUE?**
> **Answer**: B. Services are registered in `{module_name}.services.yml` and instantiated by the container.  
> **Explanation**: In Drupal, services are defined in a module's `.services.yml` file. These services are   then managed by Drupal's service container, which handles their instantiation and dependency injection.  
> **Reference**: [Services and Dependency Injection in Drupal](https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/services-and-dependency-injection-in-drupal)  

**6. What is the purpose of the `hook_help()` function in a custom module?**
> **Answer**: A. To provide user guidance and documentation for the module.  
> **Explanation**: The `hook_help()` function allows a module to define help text that can be displayed to   users, offering guidance and documentation about the module's functionality.  
> **Reference**: [hook_help() Documentation](https://api.drupal.org/api/drupal/core%21modules%21help%21help.api.php/function/hook_help/10)  
 
**7. Which service is used to load an entity in Drupal?**
> **Answer**: C. `\Drupal::entityTypeManager()->getStorage()`  
> **Explanation**: To load an entity in Drupal, you use the `entityTypeManager` service to get the   appropriate storage handler for the entity type, and then use it to load the entity.  
> **Reference**: [Working with the Entity API](https://www.drupal.org/docs/drupal-apis/entity-api/working-with-the-entity-api)  

**8. What is the correct way to programmatically create a new node entity?**
> **Answer**: B. Using `Node::create()` and `save()`  
> **Explanation**: To programmatically create a new node in Drupal, you can use the `Node::create()` method   to instantiate a new node object, set its properties, and then call the `save()` method to persist it.  
> **Reference**: [Programmatically Creating Nodes](https://www.drupal.org/docs/drupal-apis/entity-api/programmatically-creating-nodes)  

**9. Which API is primarily responsible for defining and managing plugin-based extensibility in Drupal?**
> **Answer**: B. Plugin API  
> **Explanation**: The Plugin API in Drupal provides a flexible system for managing small pieces of   functionality, allowing for easy extension and customization.  
> **Reference**: [Plugin API Overview](https://www.drupal.org/docs/drupal-apis/plugin-api/plugin-api-overview)  

**10. How do you define a custom plugin type in Drupal?**
> **Answer**: A. By creating a new class with an annotation in the `src/Plugin` directory.  
> **Explanation**: To define a custom plugin type in Drupal, you create a new PHP class in the `src/Plugin`   directory of your module, using annotations to define the plugin's metadata.  
> **Reference**: [Creating a Custom Plugin Type](https://www.drupal.org/docs/drupal-apis/plugin-api/creating-your-own-plugin-manager)  

**11. Which of the following statements about Drupal’s Database API is TRUE?**
> **Answer**: B. The Database API provides an abstraction layer to prevent SQL injection and ensure   compatibility.  
> **Explanation**: Drupal's Database API offers an abstraction layer that helps prevent SQL injection   attacks and ensures compatibility across different database systems.  
> **Reference**: [Database API Overview](https://www.drupal.org/docs/drupal-apis/database-api/database-api-overview)  

**12. What is the correct way to retrieve a configuration value in Drupal?**
> **Answer**: B. `\Drupal::config('my_module.settings')->get('my_value')`  
> **Explanation**: To retrieve a configuration value in Drupal, you use the `config` service to access the   desired configuration object and then call the `get()` method with the specific key.  
> **Reference**: [Configuration API Overview](https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-api-overview)  

**13. Which of the following is a valid use case for the State API?**
> **Answer**: A. Storing temporary runtime data, such as the last cron run time.  
> **Explanation**: The State API is intended for storing temporary, environment-specific data that does not   need to be deployed across environments, such as the last time cron was run.  
> **Reference**: [State API](https://www.drupal.org/docs/drupal-apis/state-api)  

**14. How does Drupal's Cache API improve performance?**
> **Answer**: B. By using cache bins to store rendered HTML, database queries, and computed values.  
> **Explanation**: Drupal's Cache API enhances performance by storing frequently used data, such as   rendered HTML and computed values, in cache bins, reducing the need for repeated processing.  
> **Reference**: [Cache API](https://www.drupal.org/docs/drupal-apis/cache-api)  

**15. Which of the following is a best practice for securing user-submitted data in Drupal?**
> **Answer**: C. Use the `Html::escape()` function to sanitize user-generated content before rendering.  
> **Explanation**: To prevent cross-site scripting (XSS) attacks, it's essential to sanitize user-generated   content before rendering it. The `Html::escape()` function is commonly used for this purpose in Drupal.  
> **Reference**: [Writing secure code for Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/writing-secure-code-for-drupal)  

**16. What is the correct permissions for index.php?**
> **Answer**: A. -rw-r-----
> **Explanation**: The "index.php" file (representative of all code files) can be edited by "deploy" and can be read by the www-data group (we assume the www-data user is in the www-data group). No other users can read that file. This is a fairly secure method of configuring your site. You generally don't want random users who have the ability to read files on your server to see inside those files, hence the last three permissions are --- instead of r-x.  
> **Reference**: [Securing file permissions and ownership](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership)  

**17. What is the correct way to write a message to Drupal’s log file?**
> **Answer**: A. `\Drupal::logger('mymodule')->notice('Log message here');`  
> **Explanation**: To write a message to Drupal's log, you can use the `logger` service, specifying the   channel (e.g., 'mymodule') and the log level (e.g., `notice`), followed by the message.  
> **Reference**: [Logging API](https://www.drupal.org/docs/8/api/logging-api/overview)  

**18. Which service provides a structured way to output debugging information in Drupal?**
> **Answer**: C. `\Drupal::service('devel.dumper')`  
> **Explanation**: The Devel module provides a `dumper` service that offers structured and readable output   for debugging purposes.  
> **Reference**: [Devel Module](https://www.drupal.org/project/devel)  

**19. What is the purpose of Kernel tests in Drupal?**
> **Answer**: B. To test integration between Drupal’s backend and its database.  
> **Explanation**: Kernel tests in Drupal are designed to test the integration of various subsystems,   including interactions with the database, without bootstrapping the entire Drupal environment.  
> **Reference**: [Running PHPUnit tests](https://www.drupal.org/docs/develop/automated-testing/phpunit-in-drupal/running-phpunit-tests)  

**20. What command is used to run PHPUnit tests for a custom module?**
> **Answer**: D. `./vendor/bin/phpunit --testsuite=custom_module`  
> **Explanation**: To run PHPUnit tests for a custom module, you can use the PHPUnit executable located in   the `vendor/bin` directory, specifying the test suite corresponding to your module.  
> **Reference**: [Running PHPUnit Tests](https://www.drupal.org/docs/develop/automated-testing/phpunit-in-drupal/running-phpunit-tests)  

---

These explanations and references should help validate the correct answers and provide further insight into Drupal's backend development practices.
