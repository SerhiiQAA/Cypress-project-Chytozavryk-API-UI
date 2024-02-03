# User sign-up test case

**It should do register user:**
1. Open https://demo.realworld.io/
1. Click link in app header
1. Url path should be /#/register
1. Page heading should be
1. Page should have form
1. Type {username} into Username form field
1. Type {email} into form field
1. Type {password} into form field
1. Click on button
1. Header should contains {username}


**Where:**
* {username}
string with pattern [0-9a-zA-Z_]{5, 10}
was not registered before
* {email}
valid email
was not registered before
* {password} — string with pattern [0-9a-zA-Z_]{6, 16}
