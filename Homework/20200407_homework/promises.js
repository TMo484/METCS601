function callPromises() {

    document.getElementById("call_promises_button").disabled = true

    let urlList = [
        "http://www.zumatra.com/teach/promise_2.php",
        "http://www.zumatra.com/teach/promise_5.php",
        "http://www.zumatra.com/teach/promise_10.php"
    ]

    urlList.forEach(url => {
        // create divs for each of the promises, to eventually hold the results
        let node = document.createElement("h3")
        let nodeText = document.createTextNode(`URL Fetched: ${url}`)
        node.appendChild(nodeText)
        node.setAttribute("id", url)
        document.getElementById("app").appendChild(node)

        // fetch the URLs using the promise API (then / catch)
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                updateDOM(json, url, "resolved")
            })
            .catch(err => {
                updateDOM(json, url, "rejected")
            })
    })
}

function updateDOM(data, url, type) {
    let childNode = document.createElement("div")
    childNode.setAttribute("class", "result_container")
    if(type === "resolved") {
        let resultCircles = ""
        data.forEach(result => {
            resultCircles += `<div class="parent_container" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" id=${result}><div class="container"><div class="vertical-bar" id="orange"></div><div class="vertical-bar" id="yellow"></div><div class="vertical-bar" id="blue"></div><div class="vertical-bar" id="green"></div><div class="vertical-bar" id="red"></div></div><div class="container overlay"><div class="relative-text">${result}</div></div></div>`
        })
        childNode.innerHTML = resultCircles
    } else {
        childNode.innerHTML = `Uh Oh! Promise was rejected: ${data}`
    }
    document.getElementById(url).appendChild(childNode)
    
    let circles = document.getElementsByClassName("parent_container")
    for(let i=0; i<circles.length; i++) {
    }
}

// I really didn't want to use the session storage here, but the dataTransfer object is a pain according to the documentation (something about read-only modes?)
function handleDragStart(event) {
    window.sessionStorage.setItem("data", event.target.id)
}

function handleDragEnd(event) {
    window.sessionStorage.removeItem("data")
}

function handleDragEnter(event) {
    event.preventDefault()
    let data = window.sessionStorage.getItem("data")
}

function handleDragOver(event) {
    event.preventDefault()
}

function handleDrop(event) {
    event.preventDefault()
    let data = window.sessionStorage.getItem("data")
    document.getElementById("drop_target").innerHTML = `<div class="parent_container"><div class="container"><div class="vertical-bar" id="orange"></div><div class="vertical-bar" id="yellow"></div><div class="vertical-bar" id="blue"></div><div class="vertical-bar" id="green"></div><div class="vertical-bar" id="red"></div></div><div class="container overlay"><div class="relative-text">${data}</div></div></div>`
    document.getElementById("clear_dropbox_button").disabled = false
}

function clearDropTarget() {
    document.getElementById("drop_target").innerHTML = ""
    document.getElementById("clear_dropbox_button").disabled = true
}