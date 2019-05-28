/* jshint -W079 */
var Atomia = Atomia || {};
Atomia.ViewModels = Atomia.ViewModels || {};
/* jshint +W079 */

(function (exports, _, ko) {
    'use strict';

    function CustomerOrderAccountSelectorModel(model) {

        var self = this;

        self.newAccountType = `${model.newAccountType}AccountTypeId`;
        self.existingAccountType = `${model.existingAccountType}AccountTypeId`;

        self.selectorVisible = ko.observable(model.allowExistingCustomerOrders);
        self.selectedAccountType = ko.observable(self.existingAccountType);
        self.selectorGroupName = 'CustomerOrderAccountType';

        self.existingAccountFormVisible = ko.pureComputed(function () {

            if (!self.selectorVisible()) {
                return false;
            }

            if (self.selectedAccountType() == self.existingAccountType) {
                return true;
            }

            return false;

        }, self);

        self.newAccountFormVisible = ko.pureComputed(function () {

            if (self.selectedAccountType() == self.newAccountType) {
                return true;
            }

            return false;

        }, self);

    }

    _.extend(exports, {
        CustomerOrderAccountSelectorModel: CustomerOrderAccountSelectorModel
    });

})(Atomia.ViewModels, _, ko);
