#main api
# we can use this api to get contact details from contact us section
https://contactform-ivory.vercel.app/api/form # userForm

# we can use this api this api to conditionaly navigate user to blog page if user submits the from 
https://contactform-ivory.vercel.app/api/form/postForm







# data fileds for both contact form and post Form
{
    name: String,
    email: String,
    contact: String,
    content: String
}

# using fetch
 fetch("sample url", {
    method: 'POST',
    body: JSON.stringify(data) //the data sholud be in object format
}).then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
# using axios
axios.post('/user', {
  data                        //the data should be in object format
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
