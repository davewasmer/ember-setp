import setp from 'ember-setp';
import { expect } from 'chai';

describe('setp', function() {

  it('should create empty objects for deeply nested paths', function() {
    let target = {};
    setp(target, 'foo.bar', true);
    expect(target.foo).to.exist;
    expect(target.foo.bar).to.be.true;
  });

  it('should create empty arrays for deeply nested paths with numeric segments', function() {
    let target = {};
    setp(target, 'foo.0.bar', true);
    expect(target.foo).to.be.an.instanceof(Array);
    expect(target.foo[0]).to.exist;
    expect(target.foo[0].bar).to.be.true;
  });

});
