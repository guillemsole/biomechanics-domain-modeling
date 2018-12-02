import {expect} from 'chai';
import {Joint} from '../../src/model/Joint';
import {JointMotion} from '../../src/model/JointMotion';
import {Ligament} from '../../src/model/Ligament';
import {Movement, MovementType} from '../../src/model/Movement';

describe('Joint', () => {
    it('should create a Joint', () => {
        const jointMotions = new Map<MovementType, JointMotion>();
        const jointMotion = new JointMotion(new Ligament(0, 10), 0);
        const joint = new Joint('ELBOWJOINT', jointMotions.set(MovementType.FLEXIONEXTENSION, jointMotion));
        expect(joint.id).to.be.equal('ELBOWJOINT');
        expect(joint.jointMotions.get(MovementType.FLEXIONEXTENSION)).to.be.equal(jointMotion);
    });
});
