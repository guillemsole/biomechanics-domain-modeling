import {MotionType} from './MotionType';

export class Movement {
    constructor(public readonly type: MotionType,
                public readonly position: number) {

    }
}
