const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "content" arg length is 0', () => {
        expect(formatFullname('', 20)).to.equal('Error');
      });

      it('should return an error if "content" arg is not a string', () => {
        expect(formatFullname(undefined, 20)).to.equal('Error');
        expect(formatFullname(12, 20)).to.equal('Error');
        expect(formatFullname({}, 20)).to.equal('Error');
        expect(formatFullname([], 20)).to.equal('Error');
        expect(formatFullname(function() {}, 20)).to.equal('Error');
      });
   
      it('should return an error if format is diffrent then <firstname> <lastname>', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
      });
  
  });