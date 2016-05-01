# enzyme-bug-example

Reproducting [Enzyme issue 355](https://github.com/airbnb/enzyme/issues/355).

## How to run

With Node.js 5:

    npm install
    npm test
    
Expected error message:

```
/Users/pahund/node_modules/fbjs/lib/invariant.js:46
    throw error;
    ^

Invariant Violation: traverseParentPath(...): Cannot traverse from and to the same ID, ``.
    at invariant (/Users/pahund/node_modules/fbjs/lib/invariant.js:39:15)
    at traverseParentPath (/Users/pahund/node_modules/react/lib/ReactInstanceHandles.js:157:63)
    at Object.ReactInstanceHandles.traverseAncestors (/Users/pahund/node_modules/react/lib/ReactInstanceHandles.js:285:5)
    at findDeepestCachedAncestor (/Users/pahund/node_modules/react/lib/ReactMount.js:234:24)
    at Object.ReactMount.findComponentRoot (/Users/pahund/node_modules/react/lib/ReactMount.js:708:27)
    at Object.ReactMount.findReactNodeByID (/Users/pahund/node_modules/react/lib/ReactMount.js:679:23)
    at Object.getNodeFromInstance (/Users/pahund/node_modules/react/lib/ReactMount.js:180:32)
    at findDOMNode (/Users/pahund/node_modules/react/lib/findDOMNode.js:43:23)
    at ReactWrapper.<anonymous> (/Users/pahund/git/enzyme-bug-example/node_modules/enzyme/build/ReactWrapper.js:538:66)
    at ReactWrapper.single (/Users/pahund/git/enzyme-bug-example/node_modules/enzyme/build/ReactWrapper.js:1101:19)
    at ReactWrapper.simulate (/Users/pahund/git/enzyme-bug-example/node_modules/enzyme/build/ReactWrapper.js:531:14)
    at Object.<anonymous> (enzymeTest.js:37:33)
    at Module._compile (module.js:413:34)
    at loader (/Users/pahund/git/enzyme-bug-example/node_modules/babel-register/lib/node.js:126:5)
    at Object.require.extensions.(anonymous function) [as .js] (/Users/pahund/git/enzyme-bug-example/node_modules/babel-register/lib/node.js:136:7)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Module.require (module.js:367:17)
    at require (internal/module.js:16:19)
    at /Users/pahund/git/enzyme-bug-example/node_modules/mocha/lib/mocha.js:219:27
    at Array.forEach (native)
    at Mocha.loadFiles (/Users/pahund/git/enzyme-bug-example/node_modules/mocha/lib/mocha.js:216:14)
    at Mocha.run (/Users/pahund/git/enzyme-bug-example/node_modules/mocha/lib/mocha.js:468:10)
    at Object.<anonymous> (/Users/pahund/git/enzyme-bug-example/node_modules/mocha/bin/_mocha:403:18)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Function.Module.runMain (module.js:447:10)
    at startup (node.js:146:18)
    at node.js:404:3
npm ERR! Test failed.  See above for more details.
```
