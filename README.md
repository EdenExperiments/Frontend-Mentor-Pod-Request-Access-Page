# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](/starter-code/assets/Screenshot_5.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- JavaScript

### What I learned

My main focus on starting this project was to practice some custom form validation. Which on the JS side, produced the below:

```js
const ValidateEmail = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailInput.value.match(mailformat))
    {
        errorP.style.display = "block"
        emailInput.focus();
        return false;
    } else {
        errorP.style.display = "none";
        emailInput.focus();
    }
}
```

### Continued development

The HTML and CSS is a bit sloppy, it could be shortened and I could improve performance of the page by not uploading all 3 image versions at load, and load which is required dependent on screen width. These are things which I will improve on in future projects. 

## Author

- Website - [Macaulay Eden](https://github.com/EdenExperiments)
- Frontend Mentor - [EdenExperiments](https://www.frontendmentor.io/profile/EdenExperiments)
