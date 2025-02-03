# Key Core Changes from Drupal 9 to Drupal 10

Here’s a comprehensive list of key differences between Drupal 10 and Drupal 9, focusing on technical updates, feature enhancements, and removed/added dependencies:

## **1. Dependency Updates**
- **Symfony 6**: Upgraded from Symfony 4, providing better performance and modern PHP features.
- **CKEditor 5**: Replaces CKEditor 4 as the default WYSIWYG editor with improved features.
- **PHP Requirements**:
    - Minimum PHP version: **8.1**.
    - Deprecated PHP features are no longer supported.

---

## **2. Removed Deprecated Code**
- All APIs, functions, and classes marked as deprecated in Drupal 9 are removed in Drupal 10.
- Modules and themes must update to use non-deprecated alternatives. See reference below.

---

## **3. Frontend Updates**
- **Olivero**: New default frontend theme, replacing Bartik.
- **Claro**: New default admin theme, replacing Seven.
- **Starterkit Theme Generator**:
    - Provides a tool to create custom themes based on Starterkit templates.
    - Replaces `Classy` as the base theme.

---

## **4. New Features and APIs**
- **Typed Data System Enhancements**:
    - Improved validation and better integration with external data sources.
- **Twig 3 Support**:
    - Modernized templating features for better performance.
- **Improved Layout Builder**:
    - Enhanced drag-and-drop functionality.
    - Better block management and support for CSS Grid.
- **Automatic Updates Initiative**:
    - Early support for automatic updates.
- **Project Browser Initiative**:
    - Allows users to discover and install contributed modules/themes directly from the admin UI.

---

## **5. JavaScript Modernization**
- **jQuery UI Removed**:
    - Modern JavaScript replaces deprecated jQuery UI components.
- Core JavaScript now aligns with ES6+ standards.

---

## **6. Multilingual Enhancements**
- Simplified configuration workflows for multilingual setups.
- Improved language management UI.

---

## **7. New Patterns in Drupal 10**

To ensure compatibility with Drupal 10, rely on modern design patterns:

1. **Dependency Injection**:
    - Instead of relying on procedural functions (e.g., `\Drupal::service()`), inject services via constructors.
    - Example:
      ```php
      public function __construct(ConfigFactoryInterface $config_factory) {
        $this->configFactory = $config_factory;
      }
      ```

2. **Entity Type Manager**:
    - Use `\Drupal::entityTypeManager()` for loading, creating, and saving entities.

3. **Service-Based Caching**:
    - Use cache tags and contexts via the `CacheBackendInterface` service.

---

## **Summary of Removed Features**
| **Removed Feature**     | **Replacement/Alternative**                              |
|-------------------------|----------------------------------------------------------|
| CKEditor 4             | CKEditor 5                                               |
| Deprecated Modules     | Updated workflows (e.g., Config Translation folded in).  |
| jQuery UI              | Replaced with modern JavaScript solutions.               |
| SimpleTest             | Replaced by PHPUnit for testing.                         |
| Bartik & Seven themes  | Olivero & Claro themes.                                  |

---

## **Deprecations**
Below are common deprecated functions and classes removed in Drupal 10:
Here is a comprehensive list of **deprecated functions and classes** that have been removed or replaced in **Drupal 10**, along with their replacements or alternatives.

---

### **Deprecated Functions**

| **Deprecated Function**         | **Replacement/Alternative**                                                                 |
|----------------------------------|--------------------------------------------------------------------------------------------|
| `drupal_set_message()`           | Use `\Drupal::messenger()->addMessage()`                                                   |
| `drupal_get_path()`              | Use `\Drupal::service('extension.path.resolver')->getPath()`                               |
| `drupal_static()`                | Use dependency injection to manage services or static caching.                             |
| `entity_load()`                  | Use `\Drupal::entityTypeManager()->getStorage($entity_type)->load($id)`                    |
| `entity_create()`                | Use `\Drupal::entityTypeManager()->getStorage($entity_type)->create($values)`              |
| `file_create_url()`              | Use `file_url_transform_relative(file_url_generator()->generate($uri))`                    |
| `db_query()`                     | Use the `\Drupal::database()` service with prepared statements or parameterized queries.   |
| `menu_tree_output()`             | Use the `MenuTreeBuilder` class instead.                                                  |
| `path_to_theme()`                | Use `\Drupal::theme()->getActiveTheme()->getPath()`                                        |
| `user_access()`                  | Use `\Drupal::currentUser()->hasPermission($permission)`                                   |
| `url()`                          | Use `\Drupal\Core\Url::fromRoute()` or `Url::fromUri()` for link generation.               |
| `check_plain()`                  | Use `Html::escape()` from `Drupal\Component\Utility\Html`.                                |
| `format_date()`                  | Use `\Drupal::service('date.formatter')->format()`                                         |

---

### **Deprecated Classes**

| **Deprecated Class**                      | **Replacement/Alternative**                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------|
| `File`                                    | Use `\Drupal\file\Entity\File`.                                                             |
| `Config`                                  | Use the `ConfigFactoryInterface` service via dependency injection.                          |
| `EntityStorageControllerInterface`        | Use `EntityStorageInterface`.                                                              |
| `Cache`                                   | Use the `CacheBackendInterface` service for caching functionality.                         |
| `Path`                                    | Use `\Drupal\Core\Path\PathMatcher` or `\Drupal\Core\Path\PathProcessor` services.         |
| `Drupal\Component\Utility\String`         | Use `\Drupal\Component\Utility\Html`, `SafeMarkup`, or `Xss` depending on the use case.    |
| `EntityManager`                           | Use `EntityTypeManager`.                                                                   |
| `TypedDataManager`                        | Use `TypedDataManagerInterface`.                                                           |

---

### **Deprecated Constants**

| **Deprecated Constant**          | **Replacement/Alternative**                                   |
|-----------------------------------|--------------------------------------------------------------|
| `REQUEST_TIME`                    | Use `$request->getRequestTime()` from the `Request` object.  |
| `DRUPAL_BOOTSTRAP_CONFIGURATION` | Use specific services to bootstrap configuration.            |
| `DRUPAL_ROOT`                     | Use `\Drupal::root()` for the Drupal root directory path.    |

---

### **Removed Modules**
Certain core modules were deprecated in Drupal 9 and are **removed in Drupal 10**. If you use them, you must replace them with alternatives:

| **Removed Module**    | **Alternative/Action Required**                                                                          |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| Quick Edit            | No direct replacement. Use admin views or edit forms instead.                                           |
| Aggregator            | Use external RSS aggregators or contributed modules.                                                    |
| SimpleTest            | Use PHPUnit for automated testing.                                                                      |
| Forum                 | Use contributed modules such as [Advanced Forum](https://www.drupal.org/project/advanced_forum).        |
| HAL (REST Module)     | Use JSON:API for modern and efficient RESTful APIs.                                                     |
| RDF                   | Evaluate if RDF support is still required; use third-party modules if needed.                           |

---

## **Key Resources**
1. [Drupal 10 Change Records](https://www.drupal.org/list-changes/drupal-10)
2. [Upgrade Status Module](https://www.drupal.org/project/upgrade_status)
3. [CKEditor 5 in Drupal 10](https://www.drupal.org/docs/core-modules-and-themes/ckeditor/ckeditor-5-in-drupal)
