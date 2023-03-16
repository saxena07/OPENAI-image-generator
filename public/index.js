function onSubmit(e){
    e.preventDefault();

    prompt = document.querySelector('#prompt').value;
    imgsize = document.querySelector('#size').value;
    console.log(document.querySelector('#prompt').value);
    console.log(document.querySelector('#size').value);

    generateImageRequest(prompt, imgsize);
}

async function generateImageRequest (prompt, size){
try{
  showSpinner();
  const response = await fetch('/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      size,
    }),
  });
  if (!response.ok) {
    removeSpinner();
    throw new Error('That image could not be generated');
  }

  const data = await response.json();
  const imageUrl = data.imageurl;
  document.querySelector('#image').src = imageUrl;

  
  
  console.log(data);
  console.log(imageUrl);

  removeSpinner();

}catch (error) {
  document.querySelector('.msg').textContent = error;
}
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
  }
  
  function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show');
  }

document.querySelector('#image-form').addEventListener('submit', onSubmit);