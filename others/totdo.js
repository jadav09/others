// let nextid = 3
let data = [

    {
        id: "1",
        name: "jadav"
    },
    {
        id: "12",
        name: "dharmesh"
    }
]

let div1 = document.getElementById("d1")
let inp = document.getElementById("inp1")
let btn = document.getElementById("btn")

let fun = () => {

    let obj = { id: data.length + 1, name: inp.value }

    data.push(obj)
    console.log(data)

    fun2()
}

btn.addEventListener("click", fun)


// ************

function fun2() {
    var h = `<table border="1" class="table my-3">
<thead class="table-dark"> 
    <tr>
        <th>id</th>
        <th>name</th>
        <th>Action</th>
    </tr>
</thead>
`
    data.map((v) => {

        h = h + `<tbody>
    <tr key={v.id}>
         <td >${v.id}</td>
         <td id="td1">${v.name}</td>
         <td>
         <button id="edit">edit</button>
         <button id="dlt">delete</button>
         </td>
     </tr>
 </tbody>`

    })

    div1.innerHTML = h + `</table>`
}

fun2()


let edit = document.getElementById("edit")
let td1 = document.getElementById("td1")
// let dlt = document.getElementById("dlt")

console.log(td1)
console.log(edit)

function editfun() {

    let pro = prompt("")
    console.log(pro)
    td1.innerHTML = `${pro}`

}

edit.addEventListener("click", editfun)
// dlt.addEventListener("click",dltfun)

// fun2()
