const yaml   = require('js-yaml');

module.exports = function yamlLoader(source) {
    if(this.cacheable) {
        this.cacheable();
    }

    let result = yaml.load(source);

    return JSON.stringify(result);
};