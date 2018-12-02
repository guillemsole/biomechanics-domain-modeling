import {JointMotion} from './JointMotion';
import {MotionType} from './MotionType';
import {Movement} from './Movement';

export class Joint {
    private _jointMotions: Map<MotionType, JointMotion>;
    constructor(public readonly id: string,
                jointMotions: Map<MotionType, JointMotion>) {
        if (jointMotions.size === 0) {
            throw new Error('Joint Motions must be at least 1');
        }
        this._jointMotions = jointMotions;

    }

    get jointMotions(): Map<MotionType, JointMotion> {
        return this._jointMotions;
    }

    move(movement: Movement) { // TODO: move or contract?
        const jointMovement = this.jointMotions.get(movement.type);
        if (jointMovement === undefined) {
            throw new Error('Movement ' + movement.type + ' not available');
        }
        jointMovement.move(movement.position);
    }

}
