import {JointMotion} from './JointMotion';
import {Movement, MovementType} from './Movement';

export class Joint {
    private _jointMotions: Map<MovementType, JointMotion>;
    constructor(public readonly id: string,
                jointMotions: Map<MovementType, JointMotion>) {
        if (jointMotions.size === 0) {
            throw new Error('Joint Motions must be at least 1');
        }
        this._jointMotions = jointMotions;

    }

    get jointMotions(): Map<MovementType, JointMotion> {
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
