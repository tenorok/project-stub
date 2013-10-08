modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

/**
 * @namespace
 * @name Contacts
 */
DOM.decl('contacts', /** @lends Contacts.prototype */ {

    onSetMod : {

        js : {
            inited : function() {

                this._contacts = this.findBlocksInside('contact');

                var that = this;

                this._contacts.forEach(function(contact) {
                    contact.on('show', that.hideAllDetails.bind(that));
                });
            }
        }

    },

    /**
     * Скрыть все детальные данные по всем контактам
     */
    hideAllDetails : function() {
        this._contacts.forEach(function(contact) {
            contact.hide();
        });
    }

});

provide(DOM);

});
