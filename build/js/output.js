var Todo = (function () {
    function Todo(description) {
        this.description = description;
        this._created = Date.now();
    }
    Object.defineProperty(Todo.prototype, "created", {
        // accessors for the class
        get: function () {
            return new Date(this._created);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "dsecription", {
        set: function (description) {
            this.description = description;
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
})();
