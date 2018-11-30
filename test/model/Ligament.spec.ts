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
});
