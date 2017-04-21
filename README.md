# Convert PureScript librariers into javascript bundle

```sh
bower update
pulp browserify ---standalone TS -to html/timeseries.js
```

This will generate timeseries.js library in html folder.
Functions can be accessed using TS namespace:

```js
TS.