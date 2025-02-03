
const http = requier('http')

const host = 'localhost'//กำหนด host ที่ server จะรองรับ request
const port = 8000//กำหนด port ที่ server จะรองรับ request

//กำหนดค่าเริ่มต้นของ server
const requestListener = function (req,res){
    res.writeHead(200)
    res.end('My first server!')
}
const server = http.createServer(requestListener)
server.listen(port, host, () => { //
    console.log(`Server is running on http://${host}:${port}`)
}