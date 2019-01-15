var doc=$(document);
var window=$(window);
doc.ready(function(){
    doc.scroll(function(){
    console.log(doc.scrollTop());
    if(doc.scrollTop()>85)
    {
        $('.nav-bar').addClass('scroll');
    }
    else{
        $('.nav-bar').removeClass('scroll');
    }
});
});