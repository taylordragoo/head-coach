import Dexie from 'dexie';

export function cloneDatabase (sourceName, destinationName) {
    //
    // Open source database
    //
    const origDb = new Dexie(sourceName);
    return origDb.open().then(()=> {
        // Create the destination database
        const destDb = new Dexie(destinationName);

        //
        // Clone Schema
        //
        const schema = origDb.tables.reduce((result,table)=>{
            result[table.name] = [table.schema.primKey]
                .concat(table.schema.indexes)
                .map(indexSpec => indexSpec.src)
                .toString();
            return result;
        }, {});
        destDb.version(origDb.verno).stores(schema);

        //
        // Clone Data
        //
        return origDb.tables.reduce(

            (prev, table) => prev
                .then(() => table.toArray())
                .then(rows => destDb.table(table.name).bulkAdd(rows)),

            Promise.resolve()

        ).then(()=>{
            //
            // Finally close the databases
            //
            origDb.close();
            destDb.close();
        });
    });
}
