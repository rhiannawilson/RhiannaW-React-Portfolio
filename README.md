# RhiannaW-React-Portfolio
A platform designed for employers to easily assess, with a focus on single-page react application.

# Description 
This project is a single-page React portfolio designed for web developers to showcase their work to potential employers. The portfolio features a sleek, user-friendly interface with sections including About Me, Portfolio, Contact, and Resume. The navigation bar highlights the active section, allowing for seamless browsing without page reloads. The Portfolio section displays titled images of six key projects, each linked to both the live application and its GitHub repository. The Contact section includes a form with validation to ensure accurate submissions, while the Resume section provides a downloadable resume and a list of the developer's proficiencies. This portfolio is an ideal tool for developers to present their skills and experience in a professional and accessible way.

## Github Repo:
https://github.com/rhiannawilson/CMSify

## Github Deployed page:
https://cmsify.onrender.com

### Table of Contents:
- [Description](#description)
- [Directory Structure](#directory-structure)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Appearance & Functionality](#appearance--functionality) 
- [Contributions](#contributions)
- [Credits](#credits)
- [License](#license)
- [Author](#author)

## Directory Structure
```  
├── RHIANNAW-REACT-PORTFOLIO
    ├── dist/
    ├── node_modules/ 
    ├── public/
        ├── vite.svg
    ├── src/ 
        ├── assets/ 
        ├── components/
            ├── pages/
                ├── aboutme.jsx
                ├── contact.jsx
        ├── Footer.jsx
        ├── Header.jsx
        ├── HomePage.jsx
        ├── Nav.jsx  
    ├── .eslintrc.cjs 
    ├── .gitignore
    ├── index.html 
    ├── LICENSE   
    ├── package-lock.json
    ├── package.json
    ├── README.md 
    └── vite.config.js  
```

### User Story
```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

### Acceptance Criteria
```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```
[Back to Table of Contents](#table-of-contents)

## Appearance & Functionality 
#### View of Project
>![View of ](./assets/ViewOfProject.png)

#### Login & Signup Page
>![View of ](./assets/LoginSignupPage.png)

#### Profile Page
>![View of ](./assets/ProfilePage.png)

#### Blog Post Page 
>![View of ](./assets/BlogPostPage.png)

[Back to Table of Contents](#table-of-contents)

### Technical Details
- eslint

### .gitignore 
- > .DS_store 
- > node_modules
    
[Back to Table of Contents](#table-of-contents)
## Contributions
React 
Vite

## Credits
Rhianna Wilson

[Back to Table of Contents](#table-of-contents)

## License
![alt text](https://img.shields.io/badge/License-_MIT-blue.svg)

## Author
@ Rhianna Wilson
> [rhiannawilson](https://github.com/rhiannawilson)

[Back to Table of Contents](#table-of-contents)