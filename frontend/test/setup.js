/**
 * setup.js
 *
 * Setup for Mocha tests, used to make the sass style modules work without webpack loaders.
 *
 * @see https://gist.github.com/ryanseddon/e76fd16af2f8f4f4bed8
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2016
 */
const jsdom = require("jsdom").jsdom;
const exposedProperties = ["window", "navigator", "document", "location"];

global.document = jsdom("<!doctype html><html><body></body></html>");
global.window = document.defaultView;

Object.keys(document.defaultView).forEach(property => {
    if (typeof global[property] === "undefined") {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: "mocha"
};

