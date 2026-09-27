
class Node {
    constructor(data) {this.data=data; this.next=null;}
}
class SingleLinkedList {
    constructor() {this.head=null;}
    insert(data) {
        let node = new Node(data);
        if (this.head === null) {this.head=node; return;}
        let current = this.head;
        while (current.next !== null)current = current.next;
        current.next = node;
    } 
    append(singlelinkedlist) {
        if (singlelinkedlist === null) return;
        if (this.head === null) {this.head = singlelinkedlist; return;}
        let current = this.head;
        while (current.next != null) current = current.next;
        current.next = singlelinkedlist.head; 
    }
    display() {
        let current = this.head;
        let str="";
        while(current !=null) {str += "->"+current.data; current = current.next;}
        return str;
    }
}
function DataStructure2() {
    let str="";
    let linkedlist1 = new SingleLinkedList();
    linkedlist1.insert(1);linkedlist1.insert(2);linkedlist1.insert(3);
    str = " linkedlist1 :"+linkedlist1.display();
    let linkedlist2 = new SingleLinkedList();
    linkedlist2.insert(4);linkedlist2.insert(5);linkedlist2.insert(6);
    str += " linkedlist2 :"+linkedlist2.display();
    linkedlist1.append(linkedlist2);
    str += " after linkedlist1.append(linkedlist2) linkedlist1 :"+linkedlist1.display();
    return (<div>{str}</div>);
}
export default DataStructure2;
