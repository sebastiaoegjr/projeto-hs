var $btns = $('.btn').click(function() {
    if (this.id == 'tudo') {
      $('#todos > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#todos > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  })

