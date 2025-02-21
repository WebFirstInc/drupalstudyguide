# Acquia Certified Drupal 10 Backend Specialist - Self Evaluation Quiz
This self-evaluation quiz consists of **20 questions** covering key topics from the **Acquia Certified Drupal 10 Backend Specialist Exam**, including **Drupal architecture, content modeling, essential backend APIs, custom module development, performance, security, and debugging**.

---

### 1. Drupal Architecture & Content Modeling

**1. What is the primary difference between entities and configuration entities in Drupal?**
- A. Entities are always stored in the database, while configuration entities are stored in YAML files.
- B. Configuration entities are user-created, while entities are system-generated.
- C. Entities represent content and users, while configuration entities store settings and configurations.
- D. Configuration entities cannot be altered programmatically.

**2. How does the Typed Data API contribute to Drupal’s data handling?**
- A. It provides a type-safe structure for working with data in entities and fields.
- B. It replaces the need for database storage in content entities.
- C. It allows automatic form validation without custom code.
- D. It only applies to configuration entities.

**3. Which Drupal API is primarily responsible for defining and managing entity types?**
- A. Configuration API
- B. State API
- C. Entity API
- D. Plugin API

---

### 2. Custom Module Development

**4. What is the required file to define a custom Drupal module?**
- A. `{module_name}.routing.yml`
- B. `{module_name}.module`
- C. `{module_name}.info.yml`
- D. `{module_name}.services.yml`

**5. Which of the following statements about services in Drupal is TRUE?**
- A. Services can only be defined by core modules.
- B. Services are registered in `{module_name}.services.yml` and instantiated by the container.
- C. Services are only used for rendering content in Twig templates.
- D. Services are not extendable in custom modules.

**6. What is the purpose of the `hook_help()` function in a custom module?**
- A. To provide user guidance and documentation for the module.
- B. To render custom help pages in Twig templates.
- C. To define additional permissions for a module.
- D. To alter the structure of forms in Drupal.

---

### 3. Essential Backend APIs

**7. Which service is used to load an entity in Drupal?**
- A. `\Drupal::database()->select()`
- B. `\Drupal::config()->get()`
- C. `\Drupal::entityTypeManager()->getStorage()`
- D. `\Drupal::state()->get()`

**8. What is the correct way to programmatically create a new node entity?**
- A. Using `\Drupal::database()->insert()`
- B. Using `Node::create()` and `save()`
- C. Using `EntityFormBuilder::submitForm()`
- D. Using `EntityQueryInterface`

**9. Which API is primarily responsible for defining and managing plugin-based extensibility in Drupal?**
- A. Entity API
- B. Plugin API
- C. Render API
- D. State API

**10. How do you define a custom plugin type in Drupal?**
- A. By creating a new class with an annotation in the `src/Plugin` directory.
- B. By modifying the `.module` file and adding a new function.
- C. By altering the routing table in `routing.yml`.
- D. By defining a new block type in `config/install`.

---

### 4. Database API & Configuration Management

**11. Which of the following statements about Drupal’s Database API is TRUE?**
- A. Queries should always be executed with raw SQL.
- B. The Database API provides an abstraction layer to prevent SQL injection and ensure compatibility.
- C. Drupal does not support transactions in the Database API.
- D. Only contributed modules can use the Database API.

**12. What is the correct way to retrieve a configuration value in Drupal?**
- A. `\Drupal::state()->get('my_config')`
- B. `\Drupal::config('my_module.settings')->get('my_value')`
- C. `\Drupal::database()->select('config')->fetchAssoc()`
- D. `\Drupal::service('config.factory')->getConfig('my_module.settings')`

**13. Which of the following is a valid use case for the State API?**
- A. Storing temporary runtime data, such as the last cron run time.
- B. Managing user permissions.
- C. Storing structured content data.
- D. Defining theme templates.

---

### 5. Performance & Security

**14. How does Drupal's Cache API improve performance?**
- A. By storing frequently used data in the database permanently.
- B. By using cache bins to store rendered HTML, database queries, and computed values.
- C. By executing queries faster through database indexing.
- D. By reducing the need for Twig templates.

**15. Which of the following is a best practice for securing user-submitted data in Drupal?**
- A. Always store raw user input in the database.
- B. Use the `check_plain()` function to sanitize output.
- C. Use the `Html::escape()` function to sanitize user-generated content before rendering.
- D. Disable cache for all user-generated content.

**16. What is a safe configuration for index.php?**
- A. -rw-r-----
- B. -rwxrw-r--
- C. -rwxr-xr-x
- D. -rw-rw-rw-

---

### 6. Debugging & Logging

**17. What is the correct way to write a message to Drupal’s log file?**
- A. `\Drupal::logger('mymodule')->notice('Log message here');`
- B. `file_put_contents('drupal.log', 'Log message here');`
- C. `\Drupal::state()->set('log', 'Log message here');`
- D. `print_r('Log message here');`

**18. Which service provides a structured way to output debugging information in Drupal?**
- A. `\Drupal::debugger()`
- B. `\Drupal::service('var_dumper')`
- C. `\Drupal::service('devel.dumper')`
- D. `\Drupal::logger()`

---

### 7. Automated Testing & Best Practices

**19. What is the purpose of Kernel tests in Drupal?**
- A. To test JavaScript interactions in the frontend.
- B. To test integration between Drupal’s backend and its database.
- C. To test performance of HTTP requests.
- D. To test the responsiveness of Twig templates.

**20. What command is used to run PHPUnit tests for a custom module?**
- A. `drush test-run`
- B. `phpunit --module=custom_module`
- C. `phpunit --testsuite=custom_module`
- D. `./vendor/bin/phpunit --testsuite=custom_module`

---

[Answers can be found here](/self-evaluation/drupal-backend-specialist-exam-answers)
