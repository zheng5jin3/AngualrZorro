// 父类
class Person {
    protected name: string;
    static age: number = 20;
    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return this.name;
    }
    static print(): string {
        return '我是静态方法';
    }
}

// 子类
class UserVIP extends Person {
    constructor(name: string) {
        super(name);
    }
}

