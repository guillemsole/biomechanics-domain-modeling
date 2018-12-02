import {expect} from 'chai';
import {JointMotion} from '../../src/model/JointMotion';
import {Ligament} from '../../src/model/Ligament';

describe('JointMotion', () => {
    describe('JointMotion constructor', () => {
        it('should create a JointMotion', () => {
            const ligament = new Ligament(0, 10);
            const currentPosition = 0;
            const jointMotion = new JointMotion(ligament, currentPosition);
            expect(jointMotion.currentPosition).to.be.equal(currentPosition);
            expect(jointMotion.ligament).to.be.equal(ligament);
        });

        it('should throw error when currentPosition is smaller than Ligament bounds', () => {
            expect(() => {
                const jointMotion = new JointMotion(new Ligament(0, 10), -1);
            }).to.throw(Error);
        });

        it('should throw error when currentPosition is greater than Ligament bounds', () => {
            expect(() => {
                const jointMotion = new JointMotion(new Ligament(0, 10), 11);
            }).to.throw(Error);
        });
    });

    describe('JointMotion move', () => {
        it('should create a JointMotion', () => {
            const jointMotion = new JointMotion(new Ligament(0, 10), 1);
            jointMotion.move(0);
            expect(jointMotion.currentPosition).to.be.equal(0);
        });

        it('should throw Error when move position is outside Ligament bounds', () => {
            const jointMotion = new JointMotion(new Ligament(0, 10), 1);
            expect(() => {
                jointMotion.move(11);
            }).to.throw(Error);
        });
    });
});
