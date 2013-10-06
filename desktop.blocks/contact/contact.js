modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

/**
 * @namespace
 * @name Contact
 */
DOM.decl('contact', /** @lends Contact.prototype */ {

    onSetMod : {

        js : {
            inited : function() {
                this._contacts = this.findBlockOutside('contacts');
            }
        }

    },

    getDefaultParams : function() {
        return {
            slideDuration: 200
        };
    },

    /**
     * Скрыть/показать детальные данные по контакту
     * @returns {this}
     */
    toggleDetails : function() {
        return this.hasMod('details') ? this.hideDetails() : this.showDetails();
    },

    /**
     * Показать детальные данные по контакту
     * @returns {this}
     */
    showDetails : function() {
        this._hideAllDetails();
        this.elem('more').slideDown(this.params.slideDuration);
        return this.setMod('details');
    },

    /**
     * Скрыть детальные данные по контакту
     * @returns {this}
     */
    hideDetails : function() {
        this.elem('more').slideUp(this.params.slideDuration);
        return this.delMod('details');
    },

    /**
     * Скрыть все детальные данные по всем контактам
     * @private
     */
    _hideAllDetails : function() {
        this._contacts && this._contacts.hideAllDetails();
    }

}, /** @lends Contact */ {

    live : function() {

        this
            .liveBindTo('click', function() {
                this.toggleDetails();
            })
            .liveBindTo('phone-button email-link', 'click', function(e) {
                e.stopPropagation();
            });

        return false;
    }

});

provide(DOM);

});