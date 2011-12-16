//jQuery is required.

$(document).ready(function(){
   //inition translator tool
   $('.to_translate_content').before('<div class="multi-translator-tool-div"><select class="multi-translator-tool-language-selector"></select></div>');
   //get allowed 
   var url = Drupal.settings.ajaxtranslate_url+'?method=GetLanguagesForTranslate';
   $.getJSON(url, function(data) {
        initLanguagesSelector(data);
    });
});

/**
 * initional language selector 
 */
function initLanguagesSelector(languages){
   $('.multi-translator-tool-language-selector');
}


