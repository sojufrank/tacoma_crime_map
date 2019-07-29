class Node{
    constructor(num){
        this.data = num
        this.next
    }
}

class Linkedlist{
    constructor(){
        this.head = null

    }

    add(num){
        const node = new Node(num)
        node.next = this.head
        this.head = node
    }

    print(){
        let c = this.head
        while(c){
            console.log(c.data)
            c = c.next
        }
    }


}