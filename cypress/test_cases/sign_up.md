# User sign-up test case

**It should do register user:**
1. Open https://chytozavryk.top/
1. Click link "Вхід" in header
2. Page should have form "Вхід"
3. Url hash should be "/?auth=signin"
5. Click button "Зареєструватися"
6. Page should have form "Зареєструватися"
7. Url hash should be "/?auth=signup"
8. Type valid {email} into form field
9. Type valid {password} into form field
10. Type valid {password} into repeat form field
11. Click checkbox "Я згоден з Правилами користування сайтом"
12. Click on button "Зареєструватися"
13. Url hash should be "/?auth=signup-success"
14. Page should have form "Ви успішно зареєструвалися"
15. Click on button "Перейти до кабінету"
16. Url hash should be "/parents"
17. Header should contains button "Вийти"


**Where:**
* {email}
valid email was not registered before

* {password} — string with pattern [0-9a-zA-Z_]{6, 16}
