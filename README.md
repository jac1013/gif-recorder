# Gif Recorder

To Install:

```bash 
$ npm install
```

## To build for development

- **in a terminal window** -> npm start  
- **in another terminal window** -> npm run electron:serve

## To build for production

- Using development variables (environments/index.ts) :  `npm run electron:dev`
- Using production variables (environments/index.prod.ts) :  `npm run electron:prod`

|Command|Description|
|--|--|
|`npm run start:web`| Execute the app in the browser |
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Ma |

## Execute E2E tests

You can find end-to-end tests in /e2e folder.

You can run tests with the command lines below : 
- **in a terminal window** -> First, start a web server on port 4200 : `npm run start:web`  
- **in another terminal window** -> Then, launch Protractor (E2E framework): `npm run e2e`

Special Thanks to this [Angular 4 + Electron starter Project](https://github.com/maximegris/angular-electron) 
