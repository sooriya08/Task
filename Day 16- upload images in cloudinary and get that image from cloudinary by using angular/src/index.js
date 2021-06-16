import { config, v2 } from 'cloudinary';

config({
 cloud_name: "dhf39kzim", // add your cloud_name
 api_key: "x998116872498694", // add your api_key
 api_secret: "xgPVc3PyyuYvbrqJL_cctlqlRTQg", // add your api_secret
 secure: true
});

v2.api.resources({
  type: 'upload',
  prefix: 'sooriya' // add your folder
},
  function(error, result) { console.log(result, error) });