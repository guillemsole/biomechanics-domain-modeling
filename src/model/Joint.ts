import {JointMotion} from './JointMotion';
import {Movement, MovementType} from './Movement';

export class Joint {
    constructor(public readonly id: string,
                public readonly jointMotions: Map<MovementType, JointMotion>) {

    }

    move(movement: Movement) { // TODO: move or contract?
        const jointMovement = this.jointMotions.get(movement.type);
        if (jointMovement === undefined) {
            throw new Error('Movement ' + movement.type + ' not available');
        }
        jointMovement.move(movement);
    }

}
