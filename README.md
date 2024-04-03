# Steps For Jenkins Execution Using Cypress.io On W3Schools.

- Visit Package.json in the the projoct
- You the see that "scripts" component is added.
```
"scripts": {
        "install": "npm install cypress --save-dev",
        "start": "npx cypress run"
}
```
- Download Jenkins https://www.jenkins.io/download/
- Run Jenkins
- In the Dashboard click "New Item"
  ![Screenshot 2024-04-04 003520](https://github.com/janidhu-wijetunga/Cypress-Jenkins-W3Schools/assets/88225802/73285850-7209-4955-aa5b-57f53fdf700e)

- Type the project name and select "Freestyle project" and click OK
![Screenshot 2024-04-04 003652](https://github.com/janidhu-wijetunga/Cypress-Jenkins-W3Schools/assets/88225802/bf2e946b-6217-4fe3-bca8-dedf1dcc9628)

- In General section, click "Advanced" and check "Use custom workspace" and add your working directory along with a display name.
![Screenshot 2024-04-04 004031](https://github.com/janidhu-wijetunga/Cypress-Jenkins-W3Schools/assets/88225802/65f272ba-166c-482b-95f9-668c9decbfc5)

- Add the below steps and "Apply" and "Save".
![Screenshot 2024-04-04 004718](https://github.com/janidhu-wijetunga/Cypress-Jenkins-W3Schools/assets/88225802/46e69cce-0d24-47db-9a72-ba6e1c27760d)

- Then click "Build Now" to run your build.
![Screenshot 2024-04-04 004845](https://github.com/janidhu-wijetunga/Cypress-Jenkins-W3Schools/assets/88225802/b1a5d72f-ff70-40e4-aa81-b9f8158bafd0)
