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




card(` src="https://drive.google.com/file/d/1HSTjXLo8EsGpxZ-iF3MZfOvt67q64YYn/preview" width="640" height="480" allow="autoplay">`,"Actify Learning")
card(`src="https://drive.google.com/file/d/1oPiYZ7E0EH1AJvr1jMzHI9V03uCSlJDY/preview"`,"Edureka thane")
card(`src="https://drive.google.com/file/d/1hVcd1I4h8JCMgO2oXYTjUXHgzp99jXSR/preview"`,"Dextero+Actify")


let link;
// Define the designs function
function designs(link) {
  // Create the design HTML
  let design = `<div class="designcard">
                  <iframe
                    style="border: 1px solid rgba(0, 0, 0, 0.1)"
                    width="600"
                    height="400"
                    src="${link}"
                    allowfullscreen
                  >
                  </iframe>
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
designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F75ERsbmzqCzeJ2LzEu29aU%2FUntitled%3Fnode-id%3D0-1%26t%3DySGwQtqoC8CrwDqt-1")
designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F3o0l4MTyioCa8D7EmUC0on%2Fselfdefence%3Fnode-id%3D0-1%26t%3Dy0kL9LKsOW7BhXyU-1")
designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FmpFR3TuVM4kmIKv8bZxevh%2FDreamBlog%3Ft%3Doi2bEp7R6qseSzI7-1")
designs("https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FeUohAE2V4CcEgKTcIdKtqX%2FGraphic-portfolio%3Fnode-id%3D0-1%26t%3DbYue7kfeimHNlCNC-1")

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