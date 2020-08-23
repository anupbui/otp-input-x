
# OTP Input Web Component

This is a project for OTP Input Web Component using Stencil with type support all major frameworkslike react, angular, vuejs.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

#  OTP Input 

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/anupbui/otp-input-x.git otp-input-x
cd otp-input-x
git remote rm origin
```

and to install

```bash
npm install otp-input-x
```

## Using this component

There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/otp-input-x@0.9.0/dist/otp-input-x.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install otp-input-x --save`
- Put a script tag similar to this `<script src='node_modules/otp-input-x/dist/otp-input-x.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a react app
- Run `npm install otp-input-x --save`
- Add an import to the npm packages `import otp-input-x;`
- Then you can use the element anywhere in your template, JSX, html etc
