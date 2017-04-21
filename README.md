# Convert PureScript librariers into javascript bundle

```sh
bower update
pulp browserify ---standalone TS --to html/timeseries.js
```

This will generate timeseries.js library in html folder.
Functions can be accessed using TS namespace:

```js
var xs = [1,2,3,2,1,2,3,4];
var model = TS.train(xs)
var ys = [1,999,2,4];
TS.predict(model)(ys);

>>> Array [ 0.17906568127123138, 0, 0.3985180025575125, 0.08045939707454697 ]
```
