var modal = {
    RequiredUploadDocument: {
        Id: "modal-requiredVerifyDocuments",
        Open: function() {
            MicroModal.show(modal.RequiredUploadDocument.Id)
        },
        Close: function() {
            MicroModal.close(modal.RequiredUploadDocument.Id)
        },
        OnClick: {
            Ok: function(callback) {
                modal.RequiredUploadDocument.Close();
                callback;
            },
            Cancel: function(callback) {
                callback;
            }
        }
    },
    Deposit: {
        Id1: "modal-deposit-step1",
        Id2: "modal-deposit-step2",
        Step1: {
            Open: function() {
                MicroModal.show(modal.Deposit.Id1);
            },
            Close: function() {
                MicroModal.close(modal.Deposit.Id1);
            }
        },
        Step2: {
            Open: function() {
                MicroModal.show(modal.Deposit.Id2);
            },
            Close: function() {
                MicroModal.close(modal.Deposit.Id2);
            }
        }
    }
};