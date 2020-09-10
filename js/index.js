document.addEventListener('DOMContentLoaded', () => {

    const fetchInstagramData = async () => {

        await fetch('https://v1.nocodeapi.com/Camilo/instagram/uygIOuIWfqofPANl')
        .then( response => (response.json()))
        .then( data => renderInstagramPosts(data));
    }

    const renderInstagramPosts = data => {
        
        const posts = data.data;
        console.log(posts);
        
        for(let i = 0; i < 9; i++){
            const { media_url, permalink } = posts[i]; 

            let POST_LIST = document.querySelector('#post-list');

            POST_LIST.innerHTML +=`
                <a href="${permalink}" class="post">
                    <figure class="post-image">
                        <img src="${media_url}" alt="" width="200" height="200">
                    </figure>
                    <span class="overlay">
                        <p>
                            <span class="comments">150</span>
                            <span class="likes">200</span>
                        </p>
                    </span>
                </a>
            `;
        }
    }

    fetchInstagramData();

});

function openMenu(){ 
    document.getElementById("menu").style.display="flex"
    document.getElementById("boton").style.display="none"
    document.getElementById("closemenu").style.display="block"
}

function closeMenu(){
    document.getElementById("menu").style.display="none"
    document.getElementById("boton").style.display="block"
    document.getElementById("closemenu").style.display="none"
}
