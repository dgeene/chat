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
        var sliderHeight = $chatSlider.height();

        // extend slider if retracted
        if (slider_height === configMap.retracted_height)
        {
            $chatSlider
                .animate( {height: configMap.extended_height} )
                .attr( 'title', configMap.extended_title );
            return true;
        }

        else if (slider_height === configMap.extended_height)
        {
            $chatSlider
                .animate( {height: configMap.retracted_height} )
                .attr( 'title', configMap.retracted_title);
            return true
        }

        // dont take action if the slider is in transition
        return false;
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
