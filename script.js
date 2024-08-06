let iframe;
let title;
let cards;
let view


function card( iframe,title){
     cards=`<div class="cards" >
     <iframe ${iframe}></iframe>
                <div class="dis">
              <img
                class="pimage"
                width="30px"
                height="30px"
                src="assets/logo.jpeg"
                alt="gd"
              />

              <div class="side">
                <h3>${title}</h3>
                <h4 class="poppins-light">Astro</h4>
                <h4 class=" poppins-light">23k views</h4>
              </div>
            </div>
          </div>`;
    return document.getElementById('videos').innerHTML=document.getElementById('videos').innerHTML+=cards;
}




card(` src="https://drive.google.com/file/d/1HSTjXLo8EsGpxZ-iF3MZfOvt67q64YYn/preview"`,"Actify Learning")
card(`src="https://drive.google.com/file/d/1KbUradpdXw5S2avcgz51TOwbhyfacLAd/preview"`,"ML use case ")
card(` src="https://drive.google.com/file/d/1K1blMbjrlf89MQNuB2oIitarDAwuwvD1/preview"`,"Actify Job Portal")
card(`src="https://drive.google.com/file/d/1hVcd1I4h8JCMgO2oXYTjUXHgzp99jXSR/preview"`,"Dextero & Actify")
card(`src="https://drive.google.com/file/d/1M5VTTfMNBKGoKSczLELn0GSupcviCOev/preview"`,"Actify Startup")
card(`src="https://drive.google.com/file/d/1oPiYZ7E0EH1AJvr1jMzHI9V03uCSlJDY/preview"`,"Edureka thane")


let link;
// Define the designs function
function designs(iframe,link,title) {
  // Create the design HTML
  let design = `<div class="cards" >
     <iframe ${iframe}></iframe>
                <div class="dis">
              <img
                class="pimage"
                width="30px"
                height="30px"
                src="assets/logo.jpeg"
                alt="gd"
              />

              <div class="side">
                <h3><a href=${link}>${title}</a></h3>
                <h4 class="poppins-light">Astro</h4>
                <h4 class=" poppins-light">23k views</h4>
              </div>
            </div>
          </div>`;
  
  // Get the element with ID 'figma'
  const figmaElement = document.getElementById("figma");
  
  // Ensure the element exists
  if (figmaElement) {
      // Append the new design to the existing content
      figmaElement.innerHTML += design;
  } else {
      console.error("Element with ID 'figma' not found.");
  }
}

// Define an async function to call the designs function
async function loadDesigns() {
  // You could perform some asynchronous operations here if needed
  // For now, we're just calling the designs function
designs(`src="https://drive.google.com/file/d/1U_0AxtK0S1CO2fg2eVyIuH-P180wwxp7/preview"`,"https://www.figma.com/design/75ERsbmzqCzeJ2LzEu29aU/Actify-Attendance?node-id=0-1&t=sGyRhQ4W9Y79JH5M-1","Actify Attendence")
designs(`src="https://drive.google.com/file/d/1lBnzNkic3uVqBX8jR57WNTixEEJzAj0a/preview"`,"https://www.figma.com/design/eUohAE2V4CcEgKTcIdKtqX/Graphic-portfolio?m=auto&t=sGyRhQ4W9Y79JH5M-6","Graphic Portfolio")
designs(`src="https://drive.google.com/file/d/1qz-Wb7G_loTD90nNI4W3YYAqBCZESg4Y/preview"`,"https://www.figma.com/design/KPy9LoakzzWfwysNDh0QNK/first-design?m=auto&t=sGyRhQ4W9Y79JH5M-6","E-card Store")
designs(`src="https://drive.google.com/file/d/1GIEf4WScHUAquRMzAeZfCxg6OJu4h8CM/preview"`,"https://www.figma.com/design/ulR6o8XoEOJWMS8EsEWiTS/Untitled?m=auto&t=sGyRhQ4W9Y79JH5M-6","Date and Time")

}

// Call the async function
loadDesigns();

// function designs(link){
// let design=`<div class="designcard">
//             <iframe
//               style="border: 1px solid rgba(0, 0, 0, 0.1)"
//               width="600"
//               height="400"
//               src=${link}
//               allowfullscreen
//             >
//             </iframe>
//           </div>`
//         return  document.getElementById("figma").innerHTML=document.getElementById("figma").innerHTML+=design;
// }
// designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F75ERsbmzqCzeJ2LzEu29aU%2FUntitled%3Fnode-id%3D0-1%26t%3DySGwQtqoC8CrwDqt-1")
// designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F3o0l4MTyioCa8D7EmUC0on%2Fselfdefence%3Fnode-id%3D0-1%26t%3Dy0kL9LKsOW7BhXyU-1")
// designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FmpFR3TuVM4kmIKv8bZxevh%2FDreamBlog%3Ft%3Doi2bEp7R6qseSzI7-1")
// designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FeUohAE2V4CcEgKTcIdKtqX%2FGraphic-portfolio%3Fnode-id%3D0-1%26t%3DbYue7kfeimHNlCNC-1")