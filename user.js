const BASE_URL = 'http://localhost:8000';
//2.นำ user ที่โหลดมาใส่ใน HTML
window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    console.log('loaded');

    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    const userDOM = document.getElementById('user');
    let htmlData = '<div>';
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];
        htmlData += `<div>${user.id} ${user.firstname} ${user.lastname}
        <a href= 'index.html?id=${user.id}'><button>Edit</button>
        <button class="delete" data-id="${user.id}">Delete</button>
        </div>`
    }
    
    htmlData += '</div>'
    userDOM.innerHTML = htmlData


    const deleteDOMs = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            console.log('delete', event.target.dataset.id);
            try{
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData();
            } catch (error) {
                console.error('Error:', error);
            }            
        });
    }
}