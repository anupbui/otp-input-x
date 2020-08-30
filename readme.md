
# OTP Input Web Component

This is a project for OTP Input Web Component using Stencil with type support all major frameworks like react, angular, vuejs.

OTP Input X is framework agnostic web component 

# Usage in React and Angular

For React Use import as 

```
import { OtpInputX } from 'otp-input-x/react';
```

JSX

```
const [otp, setOtp] = useState("");

JSX:
<OtpInputX otp={otp} size="4" onOtpComplete={(e) => { setOtp(e.detail); }}></OtpInputX>
```
[Visit React Example](https://codesandbox.io/s/angry-violet-5i51b?file=/src/App.js)

For Angular Use import as 

```
import { OtpInputX } from 'otp-input-x/ngx';
```

[Visit Angular Example](https://codesandbox.io/s/magical-pare-l0uyo?file=/src/app/app.component.ts)

## Properties

| Property    | Attribute    | Description | Type                   | Default    |
| ----------- | ------------ | ----------- | ---------------------- | ---------- |
| `format`    | `format`     |             | `"number" \| "text"`   | `'number'` |
| `otp`       | `otp`        |             | `string`               | `''`       |
| `size`      | `size`       |             | `number`               | `6`        |
| `styleName` | `style-name` |             | `"lg" \| "md" \| "sm"` | `'md'`     |


## Events

| Event         | Description   | Type                  |
| ------------- | ------------- | --------------------- |
| `otpChange`   |`onOtpChange`  | `CustomEvent<string>` |
| `otpComplete` |`onOtpComplete`| `CustomEvent<string>` |

#  OTP Input web component is build using Stencil JS

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

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
