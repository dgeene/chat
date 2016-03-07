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
        var slider_height = $chatSlider.height();

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
    onClickSlider = function(event)
    {
        toggleSlider();
        return false;
    };




    // public: sets initial state
    initModule = function($container) {
        $container.html(configMap.template_html);
        $chatSlider = $container.find('.spa-slider');
        $chatSlider
            .attr('title', configMap.retracted_title)
            .click(onClickSlider);

        return true;
    };



    // export public
    return { initModule : initModule };
}(jQuery))




//start the SPA
$(function() {
    spa.initModule( $('#spa') );
});
