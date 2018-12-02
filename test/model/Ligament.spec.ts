import {expect} from 'chai';
import {Ligament} from '../../src/model/Ligament';

describe('Ligament test', () => {
    it('should create a Ligament with minimum and maximum muscle extension', () => {
        const minExtension = 0;
        const maxExtension = 10;
        const ligament = new Ligament(minExtension, maxExtension);
        expect(ligament.minExtension).to.be.equal(minExtension);
        expect(ligament.maxExtension).to.be.equal(maxExtension);
    });

    it('should throw error when minExtension is smaller than 0', () => {
        expect(() => {
            const ligament = new Ligament(-5, 10);
        }).to.throw(Error);
    });

    it('should throw error when maxExtension is greater than 360', () => {
        expect(() => {
            const ligament = new Ligament(0, 400);
        }).to.throw(Error);
    });

    it('should throw error when minExtension is equal to maxExtension', () => {
        expect(() => {
            const ligament = new Ligament(10, 10);
        }).to.throw(Error);
    });

    it('should throw error when minExtension is greater than maxExtension', () => {
        expect(() => {
            const ligament = new Ligament(10, 0);
        }).to.throw(Error);
    });

    it('should be in range', () => {
        const ligament = new Ligament(10, 20);
        expect(ligament.allowsMovementTo(10)).to.be.equal(true);
        expect(ligament.allowsMovementTo(20)).to.be.equal(true);
        expect(ligament.allowsMovementTo(15)).to.be.equal(true);

    });

    it('should be outside range', () => {
        const ligament = new Ligament(10, 20);
        expect(ligament.allowsMovementTo(5)).to.be.equal(false);
    });

    it('should throw', () => {
        const ligament = new Ligament(10, 20);
        expect(ligament.allowsMovementTo(25)).to.be.equal(false);
    });
});
