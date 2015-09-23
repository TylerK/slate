# Slate UI Kit

This UI toolkit is a highly-modular design system meant for rapid UI development and cross-platform consistency. It contains different atoms and components that can be assembled into more complex page layouts. Initial roll out will only have web. Other platforms will be following shortly. 

## Getting Started

styleguide requires [node.js](http://nodejs.org). Make sure your have `v0.10` or higher installed before proceeding.

**Grab all the dependencies**
```
$ npm install
```

**Start the local development environment:**

```
$ npm start
```

### Development Environment Features

- Live preview sever (using [BrowserSync](http://www.browsersync.io/))
- CSS Autoprefixing
- Stylus compilation
- Browserify bundling
- Image optimization`

## Build

**Build for release:**

```
$ npm run build
```

Build outputs to the `dist` directory. `/dist/index.html` is the UI kit's entry point for browsers. 

## Contributing
Pull requests are welcome! 

* Please create a feature branch to work on with the following naming convention: `initials/feature-name` and issue a PR through Stash when ready for review. 
    - Note: When a PR is ready for merge please squash all commits on your feature branch down to a single, well worded commit message before merging. 

* All new files should be hyphen-seperated: `some-file.html`

* In lieu of an official code style guide for this UI kit, please observe and work with current code styles.

## Notes

* Sometimes when creating new files or moving files, you will need to restart `npm start` as the watch processes can miss new files being created, moved, or deleted. 

## Feature TODO's

* Responsive break point selector
* Mobile specific UI
