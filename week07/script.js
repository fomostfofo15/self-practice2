// เข้าถึง root node ทั้งหมด
console.log(document);

// เข้าถึง root element (html)
console.log(document.documentElement);

// เข้าถึง head
console.log(document.head);

// เข้าถึง body
console.log(document.body);

// แสดง child nodes ของ root document
console.log(document.childNodes);

// แสดง child nodes ของ body
console.log(document.body.childNodes);

//📝นับจำนวน Child Nodes

function countBodyChildren() {
    return document.body.childNodes.length;
}
console.log("Number of children in body:", countBodyChildren());

// วนลูป childNodes ของ body
const bodyChildren = document.body.childNodes; //คืนค่า NodeList ของลูก ๆ

for (let node of bodyChildren) { //วนลูปทุก node
    console.log("Node:", node.nodeName) //คืนชื่อของ node เช่น
}

function traverse(node, depth = 0) {
    //เว้นวรรคตามระดับ
    let indent = " ".repeat(depth * 2);
    //แสดง nodeName
    console.log(indent + node.nodeName);
    //วนลูก ๆ ของ node
    for(let child of node.childNodes) {
        traverse(child, depth + 1); //recursive
    }
}
traverse(document);