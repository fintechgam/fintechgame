var HttpMethod = {
    Get: "get",
    Post: "post"
}
var FintechUtil = {
    Ajax: function(httpMethod, url, data, type, successCallBack, async, cache) {
        if (typeof async == "undefined") {
            async = true;
        }
        if (typeof cache == "undefined") {
            cache = false;
        }
        var ajaxObj = $.ajax({
            type: httpMethod.toUpperCase(),
            url: url,
            data: data,
            contentType: type,
            async: async,
            cache: cache,
            success: successCallBack,
            error: function(err, type, httpStatus) {
                FintechUtil.AjaxFailureCallback(err, type, httpStatus);
            },
        });
        return ajaxObj;
    },
    AjaxFailureCallback: function(err, type, httpStatus) {
        var failureMessage = 'Error occurred in ajax call' + err.status + " - " + err.responseText + " - " + httpStatus;
        console.log(failureMessage);
    },
    Validate: {
        EmailValidate: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
    },
    loading: function(el) {
        jQuery(el).showLoading();
    },
    hideLoading: function(el) {
        jQuery(el).hideLoading();
    }
}

function showLoading(el = "body", isdark = false) {
    app._loading.show($(el), {
        spinner: true,
        dark: isdark,
        text: 'Processing...'
    });
}

function hideLoading(el = "body", callback) {
    app._loading.hide($(el));
}

function addSpinner(el, static_pos) {
    var spinner = el.children('.spinner');
    if (spinner.length && !spinner.hasClass('spinner-remove')) return null;
    !spinner.length && (spinner = $('<div class="spinner' + (static_pos ? '' : ' spinner-absolute') + '"/>').appendTo(el));
    animateSpinner(spinner, 'add');
}

function removeSpinner(el, complete) {
    var spinner = el.children('.spinner');
    spinner.length && animateSpinner(spinner, 'remove', complete);
}

function animateSpinner(el, animation, complete) {
    if (el.data('animating')) {
        el.removeClass(el.data('animating')).data('animating', null);
        el.data('animationTimeout') && clearTimeout(el.data('animationTimeout'));
    }
    el.addClass('spinner-' + animation).data('animating', 'spinner-' + animation);
    el.data('animationTimeout', setTimeout(function() {
        animation == 'remove' && el.remove();
        complete && complete();
    }, parseFloat(el.css('animation-duration')) * 1000));
}