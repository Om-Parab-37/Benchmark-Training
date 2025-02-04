const items = document.querySelectorAll(".list-group-item")
const sortableList = document.querySelectorAll(".list-group")
items.forEach(item => {
    item.addEventListener("dragstart",()=>{
        item.classList.add("dragging")
        
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging")
});
});
sortableList.forEach(list => {
    list.addEventListener("dragover",(e)=>{
        e.preventDefault()
        const draggingItem = list.querySelector(".dragging")
        const siblings = [...list.querySelectorAll(".list-group-item:not(.dragging)")]
        let nextSibling = siblings.find(sibling=>{
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2;
        })
        list.insertBefore(draggingItem,nextSibling)
        })

});