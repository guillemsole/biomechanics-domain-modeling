export class Ligament {
    public readonly minExtension: number;
    public readonly maxExtension: number;
    constructor(minExtension: number, maxExtension: number) {
        this.minExtension = minExtension;
        this.maxExtension = maxExtension;
    }
}