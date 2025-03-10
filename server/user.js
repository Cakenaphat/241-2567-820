//1. Load user ทั้งหมดออกจาก api

//2. นำ user ที่โหลดมาใส่ใน html

window.onload = () => {
    console.log('loaded');
    const response = await axios.get('http://localhost:8000/users');
    console.log(response.data);

    const userDOM = document.getElementById('user');
    let htmlData = '<div>'
    for (let i = 0; i < response.data.lenght;i++){
        let user = response.data[i];
        htmlData += `<div>
        ${user.id} ${user.firstname}${user.lastname}
        <a href='index.html?id=${user.id}'><button>Edit</button></a>
        <button class ='delete' data-id='${user.id}')">Delete</button>
        </div>`
        
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteDOMs.length;i++){
        deleteDOMs[i].addEventListener('click', async (event) => {
            const id = event.target.dataset.id;
            try{
                await axios.delete(${BASE_URL}/users/${id});
                loadData();//recursive function = เรียกใช้ฟังก์ชั่นตัวเอง

            } catch {
                console.log('error',error);
            }

        });
    }

}