document.arrive('article', function() {
    //document.querySelectorAll('.player-autoplay-interrupter button.button.continue-playing')[0].click();
    console.log(this.innerHTML);
    setTimeout(function() { document.getElementsByClassName("load-more J_listLoadMore product_notes_next_link")[0].click();}, 5000); 
    
});