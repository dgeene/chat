/* jslint settings */
// Module /spa/
// Provides chat slider capability

var spa = (function($)
{
    var configMap = {
            extended_height: 434,
            extended_title: 'Click to retract',
            retracted_height: 16,
            retracted_title: 'Click to extend',
            template_html: '<div class="spa-slider"><\/div>'
        },
        $chatSlider,
        toggleSlider,
        onClickSlider,
        initModule;

    // toggle slider height
    toggleSlider = function()
    {
    };

    // receives click event and calls toggleSlider
    onClickSlider = function(event) {};

    // public: sets initial state
    initModule = function($container) {
        //render html
        // init slider hght
        // bind click
    };
}())
