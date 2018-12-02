export enum MovementType { // TODO: or MotionType
    FLEXIONEXTENSION,
    ABDUCTIONADDUCTION,
    ELEVATIONDEPRESSION,
    ROTATION,
}

export class Movement {
    constructor(public readonly type: MovementType,
                public readonly angle: number) {

    }
}
