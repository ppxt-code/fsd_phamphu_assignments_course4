class Queue {
    constructor() {this.items=[];}
    enqueue(elt){this.items.push(elt);}
    toString(){return this.items.toString();}
}

function DataStructure() {
    let a = [[1,2],[4,8]];
    let b = [[3,5],[7,9]];
    let c = [];
    for (let i=0; i<a.length; i++) {
        let r=[];
        for (let j=0; j<b.length; j++)
            r.push(a[i][j]+b[i][j]);
        c.push(r);
    }
    //stack
    let stack = [];
    for (let i=0; i<a.length; i++) 
        for (let j=0; j<b.length; j++)
            stack.push(c[i][j]);
    // queue
    let queue = new Queue();
    for (let i=0; i<a.length; i++) 
        for (let j=0; j<b.length; j++)
            queue.enqueue(c[i][j]);
    return (<div><p>2D array:{c.toString()}</p>
                <p>stack:{stack.toString()}</p>
                <p>queue:{queue.toString()}</p>
            </div>)

}
export default DataStructure;