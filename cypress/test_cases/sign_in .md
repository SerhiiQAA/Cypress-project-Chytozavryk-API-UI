# User sign-in test case

**It should do login user:**
1. Open https://chytozavryk.top/
1. Click link "Вхід" in header
2. Page should have form "Вхід"
3. Url hash should be "/?auth=signin"
4. Type valid {email} into form field
5. Type valid {password} into form field
6.  Click on button "Увійти"
7.  Header should contains button "Кабінет"


**Where:**
* {email}
valid email was registered before

* {password} — string with pattern [0-9a-zA-Z_]{6, 16}
