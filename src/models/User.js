export class User {

    log() {
        console.log(JSON.stringify(this));
    }

    // Prototype method
    save(db) {
        return db.user.put(this); // Will only save own props.
    }

    // Prototype property
    get age() {
        return moment(Date.now()).diff (this.age, 'years');
    }
}
