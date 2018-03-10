

function test(request, responce)
{

  var JSONdata = {data: 'hi'};
  responce.render('results', JSONdata); // display the results page and pass data to it
}


//export the function to our server
module.exports = {test :test};
