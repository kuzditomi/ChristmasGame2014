// Xmass gift for all my friends
// A simple stopmotion game in which you have to open your gift :) Enjoy!
// Copyright © 2014, All rights reserved. - Tamás Küzdi

$(function () {
    // 3216 x 2136
    var imageWidth = 1608;
    var imageHeight = 1068;

    var quality = 'bad'; // or good
    setImageSize();
    function setImageSize() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        $('#story').height(windowWidth > windowHeight ? windowHeight : (windowWidth / imageWidth) * imageHeight);
        $('#story').width(windowWidth > windowHeight ? (windowHeight / imageHeight) * imageWidth : windowWidth);
    }

    $(window).on('resize', setImageSize);

    var game = new Karacsony();
    game.Start();

    $('.final').on('click', game.Restart);
});

var Karacsony = function(){
    var that = this;
    var version = "?v=7";
    var quality = "bad";

    var anims1 = [
        'DSC_2930.JPG',
        'DSC_2931.JPG',
        'DSC_2932.JPG',
        'DSC_2933.JPG',
        'DSC_2934.JPG',
        'DSC_2935.JPG',
        'DSC_2936.JPG',
        'DSC_2937.JPG',
        'DSC_2938.JPG',
        'DSC_2939.JPG',
        'DSC_2940.JPG',
        'DSC_2941.JPG',
        'DSC_2942.JPG',
        'DSC_2943.JPG',
        'DSC_2944.JPG',
        'DSC_2946.JPG',
        'DSC_2947.JPG',
        'DSC_2948.JPG',
        'DSC_2949.JPG',
        'DSC_2950.JPG',
        'DSC_2951.JPG',
        'DSC_2954.JPG',
        'DSC_2955.JPG',
        'DSC_2956.JPG',
        'DSC_2957.JPG',
        'DSC_2958.JPG',
        'DSC_2959.JPG',
        'DSC_2960.JPG',
        'DSC_2961.JPG',
        'DSC_2962.JPG',
        'DSC_2963.JPG',
        'DSC_2964.JPG',
        'DSC_2965.JPG',
        'DSC_2967.JPG',
        'DSC_2968.JPG',
        'DSC_2969.JPG',
        'DSC_2970.JPG',
        'DSC_2972.JPG',
        'DSC_2973.JPG',
        'DSC_2975.JPG',
        'DSC_2976.JPG',
        'DSC_2977.JPG',
        'DSC_2978.JPG',
        'DSC_2979.JPG',
        'DSC_2980.JPG',
        'DSC_2981.JPG',
        'DSC_2982.JPG',
        'DSC_2983.JPG',
        'DSC_2984.JPG',
        'DSC_2985.JPG',
        'DSC_2986.JPG',
        'DSC_2987.JPG',
        'DSC_2988.JPG',
        'DSC_2989.JPG',
        'DSC_2990.JPG',
        'DSC_2991.JPG',
        'DSC_2992.JPG',
        'DSC_2993.JPG',
        'DSC_2994.JPG',
        'DSC_2995.JPG',
        'DSC_2996.JPG',
        'DSC_2997.JPG',
        'DSC_2998.JPG',
        'DSC_2999.JPG',
        'DSC_3000.JPG',
        'DSC_3001.JPG',
        'DSC_3002.JPG'
    ];
    var anims2 = [
        'DSC_3002.JPG',
        'DSC_3022.JPG',
        'DSC_3024.JPG',
        'DSC_3025.JPG',
        'DSC_3026.JPG',
        'DSC_3027.JPG',
        'DSC_3028.JPG',
        'DSC_3029.JPG',
        'DSC_3030.JPG',
        'DSC_3033.JPG',
        'DSC_3034.JPG',
        'DSC_3035.JPG',
        'DSC_3036.JPG',
        'DSC_3037.JPG',
        'DSC_3038.JPG',
        'DSC_3040.JPG',
        'DSC_3041.JPG',
        'DSC_3042.JPG',
        'DSC_3043.JPG',
        'DSC_3044.JPG',
        'DSC_3045.JPG',
        'DSC_3046.JPG',
        'DSC_3047.JPG',
        'DSC_3048.JPG',
        'DSC_3049.JPG',
        'DSC_3050.JPG',
        'DSC_3051.JPG',
        'DSC_3052.JPG',
        'DSC_3054.JPG',
        'DSC_3055.JPG',
        'DSC_3056.JPG',
        'DSC_3057.JPG',
        'DSC_3058.JPG',
        'DSC_3059.JPG',
        'DSC_3060.JPG',
        'DSC_3061.JPG',
        'DSC_3062.JPG',
        'DSC_3063.JPG',
        'DSC_3064.JPG',
        'DSC_3066.JPG',
        'DSC_3067.JPG',
        'DSC_3068.JPG',
        'DSC_3069.JPG',
        'DSC_3070.JPG',
        'DSC_3071.JPG',
        'DSC_3072.JPG',
        'DSC_3073.JPG',
        'DSC_3074.JPG',
        'DSC_3075.JPG',
        'DSC_3076.JPG',
        'DSC_3078.JPG',
        'DSC_3080.JPG',
        'DSC_3081.JPG',
        'DSC_3082.JPG',
        'DSC_3083.JPG'
    ];
    var anims3 = [
        'DSC_3104.JPG',
        'DSC_3105.JPG',
        'DSC_3106.JPG',
        'DSC_3107.JPG',
        'DSC_3108.JPG',
        'DSC_3110.JPG',
        'DSC_3111.JPG',
        'DSC_3112.JPG',
        'DSC_3113.JPG',
        'DSC_3114.JPG',
        'DSC_3115.JPG',
        'DSC_3116.JPG',
        'DSC_3117.JPG',
        'DSC_3118.JPG',
        'DSC_3119.JPG',
        'DSC_3120.JPG',
        'DSC_3121.JPG',
        'DSC_3122.JPG',
        'DSC_3123.JPG',
        'DSC_3124.JPG',
        'DSC_3125.JPG',
        'DSC_3126.JPG',
        'DSC_3127.JPG',
        'DSC_3128.JPG',
        'DSC_3129.JPG',
        'DSC_3130.JPG',
        'DSC_3131.JPG',
        'DSC_3132.JPG',
        'DSC_3133.JPG',
        'DSC_3134.JPG',
        'DSC_3135.JPG',
        'DSC_3136.JPG',
        'DSC_3137.JPG',
        'DSC_3138.JPG',
        'DSC_3139.JPG',
        'DSC_3140.JPG',
        'DSC_3141.JPG',
        'DSC_3143.JPG',
        'DSC_3144.JPG',
        'DSC_3145.JPG',
        'DSC_3146.JPG',
        'DSC_3147.JPG',
        'DSC_3148.JPG',
        'DSC_3149.JPG',
        'DSC_3150.JPG',
        'DSC_3151.JPG',
        'DSC_3152.JPG',
        'DSC_3153.JPG',
        'DSC_3154.JPG',
        'DSC_3155.JPG',
        'DSC_3156.JPG',
        'DSC_3157.JPG',
        'DSC_3158.JPG',
        'DSC_3159.JPG',
        'DSC_3160.JPG',
        'DSC_3162.JPG',
        'DSC_3163.JPG',
        'DSC_3164.JPG',
        'DSC_3165.JPG',
        'DSC_3166.JPG',
        'DSC_3167.JPG',
        'DSC_3168.JPG',
        'DSC_3169.JPG',
        'DSC_3170.JPG',
        'DSC_3171.JPG',
        'DSC_3172.JPG',
        'DSC_3173.JPG',
        'DSC_3174.JPG',
        'DSC_3175.JPG',
        'DSC_3176.JPG',
        'DSC_3178.JPG',
        'DSC_3179.JPG',
        'DSC_3180.JPG',
        'DSC_3181.JPG',
        'DSC_3182.JPG',
        'DSC_3183.JPG',
        'DSC_3184.JPG',
        'DSC_3185.JPG',
        'DSC_3186.JPG'
    ];

    var openBox1states = [
        "DSC_3019.JPG",//0000
        "DSC_3016.JPG",//0001
        "DSC_3017.JPG",//0010
        "DSC_3011.JPG",//0011
        "DSC_3018.JPG",//0100
        "DSC_3012.JPG",//0101
        "DSC_3013.JPG",//0110
        "DSC_3009.JPG",//0111
        "DSC_3004.JPG",//1000
        "DSC_3015.JPG",//1001
        "DSC_3014.JPG",//1010
        "DSC_3008.JPG",//1011
        "DSC_3005.JPG",//1100
        "DSC_3006.JPG",//1101
        "DSC_3010.JPG",//1110
        "DSC_3007.JPG" //1111
    ];
    var openBox2states = [
        "DSC_3097.JPG",//0000
        "DSC_3085.JPG",//0001
        "DSC_3094.JPG",//0010
        "DSC_3095.JPG",//0011
        "DSC_3096.JPG",//0100
        "DSC_3086.JPG",//0101
        "DSC_3088.JPG",//0110
        "DSC_3087.JPG" //0111
    ];

    // disable click while animation
    var started = false;

    var interactionStates;
    var interactionState;
    var interactionFolder;

    // prevent double click handlers
    var subscribed = false;

    function createOptionsForPreload(){
        var options = {
            "images": []
        };

        var images = [];
        addImagesToArray(anims1, 'anim1', options.images);
        addImagesToArray(anims2, 'anim2', options.images);
        addImagesToArray(anims3, 'anim3', options.images);
        addImagesToArray(openBox1states, 'ragaszto1', options.images);
        addImagesToArray(openBox2states, 'ragaszto2', options.images);

        var imageLoaded = 0;

        // progress bar
        options.onImageLoaded = function (evt, image) {
            var totallength = anims1.length + anims2.length + anims3.length + openBox1states.length + openBox2states.length;
            images.push(image);
            $('.progress-bar').css('width', (++imageLoaded / totallength) * 100 + '%');
        };

        options.onAllLoaded = function () {
            $('.progress').hide();
            $('body').addClass('ready');
            $('#story .szalag').on('click', function () {
                if (!started) {
                    started = true;
                } else {
                    return;
                }
                $('#masni').hide();
                $('#instruction1').hide();

                play(anims1, 'anim1', setupInteraction1);
            });
        };

        return options;
    }

    function addImagesToArray(arrayFrom, folderName, arrayTo){
        for (var i = 0; i < arrayFrom.length; i++) {
             arrayTo.push({id: i, file: 'img/' + quality + '/' +folderName +'/' + arrayFrom[i] + version})
        }
    }

    function play(images, folderName, readyCallback){
        // current frame
        var current = 0;

        var playing = setInterval(function () {
            if (++current == images.length) {
                clearInterval(playing);
                readyCallback();
                return;
            }
            $('.story-container').css('background-image', 'url(img/' + quality + '/'+ folderName +'/' + images[current - 1] + version + ')');
        }, 150);
    }

    function loadInteraction(states, folder){
        interactionStates = states;
        interactionState = states.length - 1;
        interactionFolder = folder;
        updateBackground();

        function updateMethod(step, readyCallback) {
            interactionState -= step;
            updateBackground();
            if (interactionState == 0) {
                readyCallback();
            }
        }

        return updateMethod;
    }

    function updateBackground(){
        $('.story-container').css('background-image', 'url(img/' + quality + '/'+ interactionFolder +'/' + interactionStates[interactionState] + version + ')');
    }

    function setupInteraction1(){
        $('#masni').hide();
        $('#ragaszto1, #instruction2, #ragaszto1 .ragaszto').show();

        var states = [
            "DSC_3019.JPG",//0000
            "DSC_3016.JPG",//0001
            "DSC_3017.JPG",//0010
            "DSC_3011.JPG",//0011
            "DSC_3018.JPG",//0100
            "DSC_3012.JPG",//0101
            "DSC_3013.JPG",//0110
            "DSC_3009.JPG",//0111
            "DSC_3004.JPG",//1000
            "DSC_3015.JPG",//1001
            "DSC_3014.JPG",//1010
            "DSC_3008.JPG",//1011
            "DSC_3005.JPG",//1100
            "DSC_3006.JPG",//1101
            "DSC_3010.JPG",//1110
            "DSC_3007.JPG" //1111
        ];

        var updateMethod = loadInteraction(states, 'ragaszto1');

        var onReady = function(){
            $('#instruction2').hide();
            play(anims2, 'anim2', setupInteraction2);
        };

        if(!subscribed) {
            $('#ragaszto1 .fenthatul').click(function () {
                $('#ragaszto1 .fenthatul').hide();
                updateMethod(1, onReady);
            });

            $('#ragaszto1 .fentelol').click(function () {
                $('#ragaszto1 .fentelol').hide();
                updateMethod(2, onReady);
            })


            $('#ragaszto1 .balralent').click(function () {
                $('#ragaszto1 .balralent').hide();
                updateMethod(4, onReady);
            })

            $('#ragaszto1 .jobbralent').click(function () {
                $('#ragaszto1 .jobbralent').hide();
                updateMethod(8, onReady);
            });
        }
    }

    function setupInteraction2(){
        $('#ragaszto1').hide();
        $('#ragaszto2, #instruction3, #ragaszto2 .ragaszto').show();

        var states = [
            "DSC_3097.JPG",//0000
            "DSC_3085.JPG",//0001
            "DSC_3094.JPG",//0010
            "DSC_3095.JPG",//0011
            "DSC_3096.JPG",//0100
            "DSC_3086.JPG",//0101
            "DSC_3088.JPG",//0110
            "DSC_3087.JPG" //0111
        ];

        var updateMethod = loadInteraction(states, 'ragaszto2');

        var onReady = function(){
            $('#instruction3').hide();
            play(anims3, 'anim3', function(){
                $('#instruction4').show();
                $('.final').show();
            });
        };

        if(!subscribed) {
            $('#ragaszto2 .fent').click(function () {
                $('#ragaszto2 .fent').hide();
                updateMethod(1, onReady);
            });

            $('#ragaszto2 .bal').click(function () {
                $('#ragaszto2 .bal').hide();
                updateMethod(2, onReady);
            });


            $('#ragaszto2 .jobb').click(function () {
                $('#ragaszto2 .jobb').hide();
                updateMethod(4, onReady);
            });
        }
    }

    this.Start = function(){
        var options = createOptionsForPreload();
        var imageLoader = new ImageLoader(options);
    };

    this.Restart = function () {
        started = false;
        subscribed = true;
        $('.final').off('click', that.Restart);
        $('.final, #ragaszto2, #instruction4').hide();
        $('.story-container').css('background-image', 'url(img/' + quality + '/start.jpg' + version + ')');
        $('#masni, #instruction1').show();
    };

    return this;
};