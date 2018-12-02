export class Ligament {
    public readonly minExtension: number; // TODO: should be called muscle extension? or extension?
    public readonly maxExtension: number;
    constructor(minExtension: number, maxExtension: number) {
        if (minExtension < 0) { // TODO: min must be always 0?
            throw new Error('Min extension must be greater than 0');
        }
        if (maxExtension > 360) {
            throw new Error('Max extension must be smaller than 360');
        }

        if (minExtension >= maxExtension) {
            throw new Error('Max extension must be greater than min extension');
        }
        this.minExtension = minExtension;
        this.maxExtension = maxExtension;
    }

    allowsMovementTo(movementAngle: number): boolean { // TODO: change movement position to model MovementAngle
        return movementAngle >= this.minExtension && movementAngle <= this.maxExtension;
    }

}
