import {expect} from 'chai';
import {Movement, MovementType} from '../../src/model/Movement';

describe('Movement', () => {
    it('should create a FLEXIONEXTENSION movement', () => {
        const movement: Movement = new Movement(MovementType.FLEXIONEXTENSION, 10);
        expect(movement.type).to.be.equal(MovementType.FLEXIONEXTENSION);
        expect(movement.position).to.be.equal(10);
    });
    it('should create a ABDUCTIONADDUCTION movement', () => {
        const movement: Movement = new Movement(MovementType.ABDUCTIONADDUCTION, 10);
        expect(movement.type).to.be.equal(MovementType.ABDUCTIONADDUCTION);
        expect(movement.position).to.be.equal(10);
    });
    it('should create a ELEVATIONDEPRESSION movement', () => {
        const movement: Movement = new Movement(MovementType.ELEVATIONDEPRESSION, 10);
        expect(movement.type).to.be.equal(MovementType.ELEVATIONDEPRESSION);
        expect(movement.position).to.be.equal(10);
    });
    it('should create a ROTATION movement', () => {
        const movement: Movement = new Movement(MovementType.ROTATION, 10);
        expect(movement.type).to.be.equal(MovementType.ROTATION);
        expect(movement.position).to.be.equal(10);
    });
});
