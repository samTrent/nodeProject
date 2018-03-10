

function test(request, responce)
{

  var JSONdata = {data: 'hi'};
  responce.render('results', JSONdata); // display the results page and pass data to it
}

function sendData(request, responce)
{
  var userSelectionFromForm = request.query.userSelection
  var JSONdata = {data: userSelectionFromForm};
  responce.render('results', JSONdata); // display the results page and pass data to it
}


//export the function to our server
module.exports = {sendData :sendData};
