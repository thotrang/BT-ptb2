"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get A() {
        return this.a;
    }
    get B() {
        return this.b;
    }
    get C() {
        return this.c;
    }
    getDelta() {
        return this.b * this.b - 4 * this.a * this.c;
    }
    getRoot1() {
        return (-this.b + Math.sqrt(this.getDelta())) / (2 * this.a);
    }
    getRoot2() {
        return (-this.b - Math.sqrt(this.getDelta())) / (2 * this.a);
    }
    getRoot() {
        return -this.b / (2 * this.a);
    }
    getResult() {
        if (this.a == 0) {
            if (this.b == 0 && this.c != 0)
                return 'phương trình vô nghiệm';
            else if (this.b == 0 && this.c == 0)
                return 'phương trình vô số nghiệm';
            else
                return -this.c / this.b;
        }
        else {
            if (this.getDelta() < 0)
                return 'phương trình vô nghiệm';
            else if (this.getDelta() == 0)
                return this.getRoot();
            else
                return [this.getRoot1(), this.getRoot2()];
        }
    }
}
exports.QuadraticEquation = QuadraticEquation;
//# sourceMappingURL=PTB2.js.map