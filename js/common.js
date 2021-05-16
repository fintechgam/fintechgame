var CommonBlazor = {
    Modal: {
        Show: function(id) {
            var modal = UIkit.modal(id);
            modal.show();
            return false;
        },
        Hide: function(id) {
            var modal = UIkit.modal(id);
            modal.hide();
            return false;
        }
    },
    Redirect: function(url) {
        console.log(url);
        window.location.href = url;
        window.reload();
        return false;
    },
    PopupWindow: function(url) {
        console.log("PopupWindow " + url);
        window.open(url, "MsgWindow", "width=800,height=800");
        return false;
    },
    GotoTop: function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'fast');
        return false;
    },
    TriggerInput: function(el) {
        var target = $(el);
        target.click();
        return false;
    },
    UploadImage: function(el, id = "", subfolder = "") {
        return new Promise(function(resolve, reject) {
            try {
                console.log("ajax uploading...");
                var formdata = new FormData();
                var _image = $(el)[0].files[0];
                formdata.append('file', _image);
                $.ajax({
                    type: "POST",
                    url: `/api/upload?id=${id}&subfolder=${subfolder}`,
                    data: formdata,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(data) {
                        resolve(data);
                    },
                    error: function() {
                        reject({
                            success: false
                        });
                    }
                });
            } catch (e) {
                console.log(e);
                reject({
                    success: false,
                    error: e,
                    data: null
                });
            }
        });
    },
    Alert: function(content) {
        alert(content);
        return false;
    },
    Click: function(el) {
        var target = $(el);
        target.click();
        return false;
    },
    Hide: function(el) {
        var target = $(el);
        target.hide();
        return false;
    },
    Show: function(el) {
        var target = $(el);
        target.Show();
        return false;
    },
    ShowModal: function(el) {
        var modal = UIkit.modal(el);
        modal.show();
        return false;
    },
    HideModal: function(el) {
        var modal = UIkit.modal(el);
        modal.hide();
        return false;
    },
    ShowConfirm: function(content) {
        var r = confirm(content);
        if (r == true) {
            return true;
        } else {
            return false;
        }
    },
    ShowPromptInput: function(title, type = "text") {
        return new Promise(function(success, error) {
            UIkit.modal.prompt(title, "", function(newvalue) {
                success(newvalue);
            });
        })
    },
    Notify: {
        Success: function(content, position = "bottom-right") {
            $.notify(content, {
                position: position,
                className: "success"
            });
            return false;
        },
        Info: function(content, position = "bottom-right") {
            $.notify(content, {
                position: position,
                className: "info"
            });
            return false;
        },
        Warning: function(content, position = "bottom-right") {
            $.notify(content, {
                position: position,
                className: "warn"
            });
            return false;
        },
        Error: function(content, position = "bottom-right") {
            $.notify(content, {
                position: position,
                className: "error"
            });
            return false;
        },
    },
    NotifyTarget: {
        Success: function(el, content, position = "top") {
            $(el).notify(content, {
                position: position,
                className: "success"
            });
            return;
        },
        Error: function(el, content, position = "top") {
            $(el).notify(content, {
                position: position,
                className: "error"
            });
            return;
        },
    },
    Loading: {
        Show: function() {
            $(".transparentCover").show();
            $(".loading").show();
            return false;
        },
        Hide: function() {
            $(".transparentCover").hide();
            $(".loading").hide();
            return false;
        }
    },
    InitDropzone: function(component) {
        var profileComponent;
        if (profileComponent) {
            profileComponent.dispose();
        }
        profileComponent = component;
        var myDropzone = new Dropzone("#my-awesome-dropzone", {
            url: "/api/upload"
        });
        myDropzone.on("success", async function(file, response) {
            console.log(response.data.url);
            await profileComponent.invokeMethodAsync("AddIdImages", response.data.url)
        });
        var myDropzoneAddress = new Dropzone("#my-awesome-dropzone-address", {
            url: "/api/upload"
        });
        myDropzoneAddress.on("success", async function(file, response) {
            console.log(response.data.url);
            await profileComponent.invokeMethodAsync("AddAddressImages", response.data.url)
        });
        console.log("init dropzone");
    }
}