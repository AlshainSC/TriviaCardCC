$(document).ready(() =>{
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(400);
    });
  
    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('slow');
        $('.frown').show();
    });
  
    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut('slow');
        $('.frown').show();
    });
  
    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut('slow');
        $('.frown').show();
    });

    $('.correct-answer').on('click', () => {
        $('.frown').hide();
        $('.smiley').show();
        $('.correct-answer-text').fadeOut('slow');
    });

    $('.reset').on('click', () => {
        $('.frown').hide();
        $('.smiley').hide();
        $('.wrong-text-one').fadeIn('fast');
        $('.wrong-text-two').fadeIn('fast');
        $('.wrong-text-three').fadeIn('fast');
        $('.correct-answer-text').fadeIn('fast');
    })
  });