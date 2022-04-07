# MSUS Solution Accelerators

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)

## About this repository

This repository holds the code and configuration required to build the [MSUS Solution Accelerators static site](https://msussolutionaccelerators.github.io) on GitHub.

## Technology

### Jekyll

Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.

Setup instructions can be found [at the Jekyll website](https://jekyllrb.com/docs/)

### Tailwind CSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

Setup instructions can be found [at the Tailwind CSS website](https://tailwindcss.com/docs/installation)

### PostCSS

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

PostCSS is used by industry leaders including Wikipedia, Twitter, Alibaba, and JetBrains. The Autoprefixer PostCSS plugin is one of the most popular CSS processors.

PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree). This API can then be used by plugins to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.

### Autoprefixer

Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes

### shuffle.js

Categorize, sort, and filter a responsive grid of items.
More details can be found on [their GitHub site](https://vestride.github.io/Shuffle/)

## Get up and running

1. Install Jekyll [Instructions](https://jekyllrb.com/docs/installation/)
2. Install Node.js [Download Links](https://nodejs.org/en/download/)
3. In a terminal instance, start tailwind listening for changes to css classes being used

```powershell
    npm start
```

4. In another terminal instance, start jekyll listening for changes to the code

```powershell
    bundle exec jekyll serve
```

Jekyll will build the static site (into the _site folder) and start a local webserver so you can preview what the built site will look like at [http://127.0.0.1:4000](http://127.0.0.1:4000). Changes made while the server is running will cause jekyll to rebuild the site.

## Authors

- [Steve Kaschimer](mailto:v-skaschimer@microsoft.com)

## Screenshots

### Main Screen

![App Screenshot](/_images/MSUSSA-Landing.png)

### Accelerator Details Screen

![App Screenshot](/_images/MSUSSA-Details.png)
