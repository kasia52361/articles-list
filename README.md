# Articles List App

A frontend application that will display list of article previews.

Run locally:
> `$ npm install`

> `$ npm run dev`

Build bundle:
> `$ npm run build`

## Tech

- Webpack
- React
- styled components
- Typescript
- TailwindCSS

## API Documentation
Api server can be found in `server.js` file. 

To run the server do:
> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category

## Possible ways of improvement
- check out tailwind-styled-components for better work with TailwindCSS
- consider using line clamp to truncate longer descriptions in articles previews
- consider extending more commonly used components (like Message or Loader) to other folder