import {expect} from 'chai';
import {Joint} from '../../src/model/Joint';
import {JointMotion} from '../../src/model/JointMotion';
import {Ligament} from '../../src/model/Ligament';
import {Movement, MovementType} from '../../src/model/Movement';

describe('Joint', () => {
    describe('Joint constructor', () => {
        it('should create a Joint', () => {
            const jointMotions = new Map<MovementType, JointMotion>();
            const jointMotion = new JointMotion(new Ligament(0, 10), 0);
            const joint = new Joint('ELBOWJOINT', jointMotions.set(MovementType.FLEXIONEXTENSION, jointMotion));
            expect(joint.id).to.be.equal('ELBOWJOINT');
            expect(joint.jointMotions.get(MovementType.FLEXIONEXTENSION)).to.be.equal(jointMotion);
        });
        it('should throw error when JointMotions is an empty map', () => {
            const jointMotions = new Map<MovementType, JointMotion>();
            expect(() => {
                const joint = new Joint('ELBOWJOINT', jointMotions)
            }).to.throw(Error);
        });
    });
    describe('Joint move', () => {
        it('should move flexion to position 1 a Joint', () => {
            const movementType = MovementType.FLEXIONEXTENSION;
            const jointMotion = new JointMotion(new Ligament(0, 10), 0);
            const joint = new Joint('ELBOWJOINT', new Map([[movementType, jointMotion]]));
            joint.move(new Movement(movementType, 1));
            expect(joint.jointMotions.get(movementType)!.currentPosition).to.be.equal(1);
        });
        it('should throw error when trying perform a motion not inluded', () => {
            const jointMotion = new JointMotion(new Ligament(0, 10), 0);
            const joint = new Joint('ELBOWJOINT', new Map([[MovementType.FLEXIONEXTENSION, jointMotion]]));
            expect(() => {
                joint.move(new Movement(MovementType.ABDUCTIONADDUCTION, 1));
            }).to.throw(Error);
        });
    });


});
