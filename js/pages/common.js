var common = {
    loading: function(el) {
        jQuery(el).showLoading();
    },
    hideLoading: function(el) {
        jQuery(el).hideLoading();
    }
}
$(function() {
    var inputNumeral = $(".input-numeral");
    var cleaveNumeral = new Cleave(inputNumeral, {
        numeral: true
    });
})