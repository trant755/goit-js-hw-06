const categories = document.querySelector('#categories');

const listInfo = () => {
    let result = `Number of categories: ${categories.children.length}
    `

    for (let i = 0; i < categories.children.length; i += 1){
        result += `
Category: ${categories.children[i].children[0].textContent}
Elements: ${categories.children[i].children[1].children.length}
`
    }
    return result;
}
console.log(listInfo())