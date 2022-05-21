require('./helper');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('promises-tests', () => {
    it('uses config.tags argument instead of Mustache.tags when given', function () {
        var template = '<<placeholder>>bar{{placeholder}}';

        Mustache.tags = ['{{', '}}'];
        assert.eventually.equal(Mustache.render(template, { placeholder: Promise.resolve('foo') }, {}, { tags: ['<<', '>>']}),  'foobar{{placeholder}}');
    });
});
