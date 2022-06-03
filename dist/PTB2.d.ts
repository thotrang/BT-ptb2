export declare class QuadraticEquation {
    a: number;
    b: number;
    c: number;
    constructor(a: number, b: number, c: number);
    get A(): number;
    get B(): number;
    get C(): number;
    getDelta(): number;
    getRoot1(): number;
    getRoot2(): number;
    getRoot(): number;
    getResult(): number | number[] | "phương trình vô nghiệm" | "phương trình vô số nghiệm";
}
