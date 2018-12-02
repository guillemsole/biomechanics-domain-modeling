import {expect} from 'chai';
import {MotionType} from '../../src/model/MotionType';
import {Movement} from '../../src/model/Movement';

describe('Movement', () => {
    it('should create a FLEXIONEXTENSION movement', () => {
        const movement: Movement = new Movement(MotionType.FLEXIONEXTENSION, 10);
        expect(movement.type).to.be.equal(MotionType.FLEXIONEXTENSION);
        expect(movement.position).to.be.equal(10);
    });
    it('should create a ABDUCTIONADDUCTION movement', () => {
        const movement: Movement = new Movement(MotionType.ABDUCTIONADDUCTION, 10);
        expect(movement.type).to.be.equal(MotionType.ABDUCTIONADDUCTION);
        expect(movement.position).to.be.equal(10);
    });
    it('should create a ELEVATIONDEPRESSION movement', () => {
        const movement: Movement = new Movement(MotionType.ELEVATIONDEPRESSION, 10);
        expect(movement.type).to.be.equal(MotionType.ELEVATIONDEPRESSION);
        expect(movement.position).to.be.equal(10);
    });
    it('should create a ROTATION movement', () => {
        const movement: Movement = new Movement(MotionType.ROTATION, 10);
        expect(movement.type).to.be.equal(MotionType.ROTATION);
        expect(movement.position).to.be.equal(10);
    });
});
