/**
 * Generated by Apache Royale Compiler from Main.as
 * Main
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('Main');
goog.require('org.apache.royale.utils.Language');
goog.require('openfl.display.Sprite');
/* Royale Dependency List: openfl.display.Sprite,org.apache.royale.utils.Language*/




/**
 * @constructor
 */
Main = function() {
  var /** @type {openfl.display.Sprite} */ sprite = new openfl.display.Sprite();
  org.apache.royale.utils.Language.trace(sprite);
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('Main', Main);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
Main.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Main', qName: 'Main', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
Main.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'Main': { type: '', declaredBy: 'Main'}
      };
    }
  };
};
