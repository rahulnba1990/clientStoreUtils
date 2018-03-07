# clientStoreUtils

A helper library that contains very basic utility methods require for client side storage access. It contains basif utility methods to get, set and remove items for client side stores like localStorage, sessionStorage and cookie.

## Installation

Include the script in your webpage either in header or body.
```html
<script type="text/javascript" "path_to_the_script"></script>
```

 ## Local Storage Utilities

 ### clientStoreUtils.getLocalStoreItem
 To get the value of item stored in localStorage
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to retrieve |
 | format | (optional) Format of the value stored. Available formats are JSON, INTEGER and FLOAT. Usefull if you have stored JSON object in localStorage. |
 
 
 ### clientStoreUtils.setLocalStoreItem
 To store new item in localStorage
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to store |
 | data | value of the item you want to store |
 | format | (optional) Format of the value stored. Available formats are JSON. Usefull if you want to stored JSON object in localStorage. |
 
 
 ### clientStoreUtils.removeLocalStoreItem
 To remove item from localStorage
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to delete |

 ## Session Storage Utilities
 
 ### clientStoreUtils.getSessionStoreItem
 To get the value of item stored in sesionStorage
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to retrieve |
 | format | (optional) Format of the value stored. Available formats are JSON, INTEGER and FLOAT. Usefull if you have stored JSON object in sessionStorage. |
 
 
 ### clientStoreUtils.setSessionStoreItem
 To store new item in sessionStorage
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to store |
 | data | value of the item you want to store |
 | format | (optional) Format of the value stored. Available formats are JSON. Usefull if you want to stored JSON object in sessionStorage. |
 
 
 ### clientStoreUtils.removeSessionStoreItem
 To remove item from sessionStorage
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to delete |

 ## Cookie Utilities
 
 ### clientStoreUtils.getCookie
 To get the value of item stored in cookie
 
 | Parameters | Details |
 | ---------- | ------- |
 | key | key name of the item you want to retrieve |
 | format | (optional) Set JSON as format if you have stored JSON object in cookie |
 
 
 ### clientStoreUtils.setCookie
 To create a new cookie
 
 | Parameters | Details |
 | ---------- | ------- |
 | name | key name of the item you want to store |
 | data | value of the item you want to store |
 | days | (optional) age of cookie in days |
 | hours | (optional) age of cookie in hours |
 | minutes | (optional) age of cookie in miutes |
 | seconds | (optional) age of cookie in seconds |
 | format | (optional) Set JSON as format if you want to store JSON object in cookie |
 *Note: At least one from days,hours,minutes and seconds is mandatory.
 
 ### clientStoreUtils.removeCookie
 To remove item from cookie
 
 | Parameters | Details |
 | ---------- | ------- |
 | name | name of the cookie you want to delete |