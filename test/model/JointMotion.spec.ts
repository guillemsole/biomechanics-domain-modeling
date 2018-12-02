import {expect} from 'chai';
import {JointMotion} from '../../src/model/JointMotion';
import {Ligament} from '../../src/model/Ligament';

describe('JointMotion', () => {
    it('should create a JointMotion', () => {
        const ligament = new Ligament(0, 10);
        const currentPosition = 0;
        const jointMotion = new JointMotion(ligament, currentPosition);
        expect(jointMotion.currentPosition).to.be.equal(currentPosition);
        expect(jointMotion.ligament).to.be.equal(ligament);
    });
});
