const ajax = options => {
    let { url, method, success, error, data } = options

    const xhr = new XMLHttpRequest()

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== 4) return
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let json = JSON.parse(xhr.responseText)
                success(json)
            } catch (err) {
                success(xhr.responseText)
            }
        } else {
            error("An error occured")
        }
    })
    xhr.open(method || "GET", url)
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    if (data) xhr.send(JSON.stringify(data))
    else xhr.send()
}
export { ajax }