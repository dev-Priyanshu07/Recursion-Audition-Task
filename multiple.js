const card = `<div class=" columnq card-container" style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
margin-top: 16px;">
<label for="staticEmail2">First username</label>

<span class="pro">CodeForces</span>
<img class="round" src="{{avatar_src}}" alt="user" id="Avatar3" />
<h3 id="handle3">{{handle}}</h3>
<h6 id="city3">{{city}}</h6>
<h4 id="name3">{{name}}</h4>
<div class="buttons">
  <button class="primary" id="MaxRating3">{{maxrating}}</button>
  <button class="primary" id="country3">{{country}}</button>
</div>
<div class="skills">
  <h6>Skills</h6>
  <ul>
    <li id="MaxRank3">{{maxrank}}</li>
  </ul>
</div>
</div>`

function getDataMultiple(evt){
    evt.preventDefault();
    console.log("Frontend Connected")
    const handle =document.getElementById('inputPassword3').value;
    const resultHolder = document.getElementById("results-holder");
    fetch("https://codeforces.com/api/user.info?handles=" + handle).then((response)=>{return response.json();}).then(data => {
        resultHolder.innerHTML = ""    
        for(var i=0;i<data.result.length;i++){
            var template = card.slice();
            template = template.replace("{{name}}", data.result[i].email)
            .replace('{{name}}', data.result[i].email)
            .replace('{{city}}', data.result[i].city)
            .replace('{{country}}', data.result[i].country)
            .replace('{{maxrank}}', data.result[i].maxRank)
            .replace('{{maxrating}}', data.result[i].maxRating)
            .replace('{{handle}}', data.result[i].handle)
            .replace('{{avatar_src}}', data.result[i].avatar);
            resultHolder.innerHTML += template;
        }
        


        
        
    })
    

}


window.onload = () => {
    document.getElementById("submit-form-3").addEventListener("click", getDataMultiple);
}



  