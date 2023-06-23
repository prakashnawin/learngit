const {google} = require('googleapis');


const blogger = google.blogger({
  version: 'v3',
  auth: 'YOUR API KEY'
});

const params = {
  blogId: '3213900'
};

// get the blog details
blogger.blogs.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`The blog url is ${res.data.url}`);
});





module.exports = google