class Action {
    constructor({ context, payload }) {
        let promise;

        this.context = context;

        promise = new Promise((resolve, reject) => this.execute({
            payload,
            resolve,
            reject,
            context
        }));

        return promise
            .catch(error => {
                throw new Error(error);
            });
    }

    execute() {
        throw new Error('Default execute not implemented');
    }
}

export default Action;
