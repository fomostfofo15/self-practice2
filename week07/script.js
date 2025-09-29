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

//📝 ชุดโจทย์ฝึก DOM (Level 2)


//เข้าถึง <h1> แล้วเปลี่ยนข้อความเป็น "Welcome to DOM Practice"
const heading = document.querySelector("h1");

heading.textContent = "Welcome to DOM Practice!";
console.log(heading)

//สร้าง <p> ใหม่ที่มีข้อความ "This is a new paragraph." แล้ว append เข้าไปใน body
const newPara = document.createElement("p");

newPara.textContent = "This is a new paragraph.";

document.body.appendChild(newPara);
console.log(newPara)

//ลบ <div> ตัวที่มี <span> อยู่ข้างในออกจาก <body>
const divToRemove = document.querySelector("div");
divToRemove.remove();

//เปลี่ยนสีตัวอักษรของ <p> ทั้งหมดให้เป็น "blue"
const paragraph = document.querySelectorAll("p");
for (let p of paragraph) {
    p.style.color = "blue";
}
//เพิ่ม <button> ลงใน body และเมื่อกดปุ่ม ให้ alert ข้อความ "Button clicked!"
const btn = document.createElement("button");
btn.textContent = "Click Me!";

function handleClick(){
    alert("Button clicked!");
}

btn.addEventListener("click", handleClick);
document.body.appendChild(btn);