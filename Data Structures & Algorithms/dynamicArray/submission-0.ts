class DynamicArray {
    private length: number
    public capacity: number
    private array: Array<unknown>
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.array = new Array(this.capacity).fill(0)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i] as number;
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) {
            this.resize();
        }

        this.array[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if (this.length > 0) {
            this.length--;
        }

        return this.array[this.length] as number;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newArray = new Array<unknown>(this.capacity).fill(0);

        for (let i: number = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }

        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
