import {Ligament} from './Ligament';
import {Movement} from './Movement';

export class JointMotion {
    // TODO: si té estat, ha de tenir id. Els value objects son stateless? Un value object pot contenir un value object
    // TODO: Hi ha alguna caracterísitca de cadascun dels moviments que tingui sentit guardar
    // TODO: Can we extend from this class
    private _currentPosition: number;
    constructor(public readonly ligament: Ligament,
                currentPosition: number) {
        if (!this.ligament.allowsMovementTo(currentPosition)) {
            throw new Error('Cannot perform this movement');
        }
        this._currentPosition = currentPosition;
    }

    get currentPosition(): number {
        return this._currentPosition;
    }

    move(position: number) {
        if (!this.ligament.allowsMovementTo(position)) {
            throw new Error('Cannot perform this movement');
        }
        this._currentPosition = position;
        // FIRE domain event;
    }

}
