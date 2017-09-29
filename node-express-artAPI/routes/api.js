var express = require('express');
var router = express.Router();
var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUwNzI4OTYyNSwiaWF0IjoxNTA2Njg0ODI1LCJhdWQiOiI1OWFlOGI2YzEzOWIyMTIxMDcwZjk5NWUiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNTljZTJmOTk4YjBjMTQwNzA0ZjBlZTkzIn0.QldSaDhyyq8Kqi5v8Oor1uSx9v2zxbl9eLL_f07SaEI';



/* GET users listing. */
router.get('/', function(req, res, next) {

  traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
  api = traverson.from('https://api.artsy.net/api').jsonHal();

  api.newRequest()
    .follow('artist')
    .withRequestOptions({
      headers: {
        'X-Xapp-Token': xappToken,
        'Accept': 'application/vnd.artsy-v2+json'
      }
    })
    .withTemplateParameters({ id: 'andy-warhol' })
    .getResource(function(error, andyWarhol) {
      console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
    res.send(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
        });
});

module.exports = router;