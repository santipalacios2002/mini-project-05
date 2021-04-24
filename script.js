
setInterval(function () {
    var currentTime = moment().format('MMM DD, YYYY [at] h:mm:ss a')
    $('#currentTime').text(currentTime)
  }, 1000);