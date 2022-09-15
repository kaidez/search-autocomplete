# Search Autocomplete Practice

This is proof-of-concept code for a work project that didn't happen. It's small but someone may be able to get something/learn from it.

Tech requirements:

    node >= v16.13.1
    npm >= v8.1.2

Both are needed to install dependency packages and run a live server. But the most-recent version of Yarn can _probably_ be substituted without issues.

After installing the dependencies using `npm install` or `yarn install`, running `npm start` runs the the site locally on `http://localhost:9000/` via webpack dev server.

Running `tswatch` watches changes to any of the Typescript `.ts` files under `src/`, and then outputs them as `.js` files to `out/`.

Running `test` runs tests via Jest. The tests are in `src/tests` and are DEFINITELY incomplete!!!!

I wrote short notes about this at [http://www.kaidez.com/search-autocomplete](http://www.kaidez.com/search-autocomplete/).
