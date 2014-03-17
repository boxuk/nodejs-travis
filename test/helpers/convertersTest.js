var converters = require('../../lib/helpers/converters.js');
var assert = require("assert");
var should = require('should');

describe('String', function(){
    describe('#converters.footobar', function(){
        it('should equal bar', function(){
            // equal(expected, actual)
            assert.equal("bar", converters.footobar('foo'));
        });
    });
});

describe('Integer', function(){
    describe('#converters.numericIncrement', function(){
        it('should equal 1', function(){
            // equal(expected, actual)
            assert.equal(1, converters.numericIncrement(0));
        });
        var i = 0;
        while (i < 10) {
            it('should equal ' + (i + 1), function(){
                // equal(expected, actual)
                assert.equal((i + 1), converters.numericIncrement(i));
            });
            i++;
        }
    });
});

describe('String', function(){
    describe('#converters.getKeyByName', function(){
        var person = {name: 'joe'};
        it('should equal joe', function() {
            // equal(expected, actual)
            assert.equal('joe', converters.getKeyByName(person, 'name'));
        });
        it('should equal false', function() {
            // equal(expected, actual)
            assert.equal(false, converters.getKeyByName(person, 'age'));
        });
    });
});

describe('String', function(){
    describe('#converters.getKeyByLogicalPosition', function(){
        var address = ['123 Neverland', 'Sometown', 'USA'];
        it('should equal 123 Neverland', function() {
            // equal(expected, actual)
            assert.equal('123 Neverland', converters.getKeyByLogicalPosition(address, 1)); // it's offset.
        });
        it('should equal Sometown', function() {
            // equal(expected, actual)
            assert.equal('Sometown', converters.getKeyByLogicalPosition(address, 2)); // it's offset.
        });
        it('should equal USA', function() {
            // equal(expected, actual)
            assert.equal('USA', converters.getKeyByLogicalPosition(address, 3)); // it's offset.
        });
        it('should equal false', function() {
            // equal(expected, actual)
            assert.equal(false, converters.getKeyByLogicalPosition(address, 4)); // it's offset.
        });
    });
});