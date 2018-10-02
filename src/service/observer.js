class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber !== observer);
    }

    broadcast(obj) {
        this.observers.forEach(observer => observer.call(this, obj));
    }
}

export default Observer;
