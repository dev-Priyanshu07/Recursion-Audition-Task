function getData(evt){
    evt.preventDefault();
    console.log("Frontend Connected")
    const handle = document.getElementById("inputPassword2").value;
    fetch("https://codeforces.com/api/user.info?handles=" + handle).then((response)=>{return response.json();}).then(data => {
        console.log("API Linked",data.result[0])
        document.getElementById('name').innerText = data.result[0].email
        document.getElementById('city').innerText = data.result[0].city
        document.getElementById('country').innerText = data.result[0].country
        document.getElementById('MaxRank').innerText = data.result[0].maxRank
        document.getElementById('MaxRating').innerText = data.result[0].maxRating
        
        
    })


}

// function show(data){
//     let deails = `<p>`
// }

window.onload = () => {
    document.getElementById("submit-form").addEventListener("submit", getData);
}



  