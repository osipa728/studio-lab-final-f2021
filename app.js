    //DOM load event
    window.addEventListener("DOMContentLoaded", () => {
        const spotlight = document.querySelector('.spotlight');
        let spotlightSize = 'transparent 50px, rgba(0, 0, 0, 1) 250px)';
        window.addEventListener('mousemove', e => updateSpotlight(e));
        window.addEventListener('mousedown', e => {
            spotlightSize = 'transparent 130px, rgba(0, 0, 0, 1) 150px)';
            updateSpotlight(e);
        });
        window.addEventListener('mouseup', e => {
            spotlightSize = 'transparent 50px, rgba(0, 0, 0, 1) 250px)';
            updateSpotlight(e);
        });
        function updateSpotlight(e) {
            spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
        }
    });



/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
particlesJS("particles-js", 
{
    "particles":{
        "number":{
            "value":80,
            "density":{
                "enable":true,
                "value_area":100}
            },
            "color":{
                "value":"#000000"
            },
            "shape":{
                "type":"circle",
                "stroke":{
                    "width":0,
                    "color":"#514752"
                },
                "polygon":{
                    "nb_sides":5
                },
                "image":{
                    "src":"snowbg.jpeg",
                    "width":100,
                    "height":100
                }
            },
            "opacity":{
                "value":0.5,
                "random":false,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false
                }
            },
            "size":{
                "value":6,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":40,
                    "size_min":0.1,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
                "distance":150,
                "color":"#ffffff",
                "opacity":0.4,
                "width":1},
                "move":{
                    "enable":true,
                    "speed":6,
                    "direction":"none",
                    "random":false,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":1200
                    }
                }
            },
            "interactivity":{
                "detect_on":"canvas",
                "events":{
                    "onhover":{
                        "enable":true,
                        "mode":"repulse"
                    },
                    "onclick":{
                        "enable":false,
                        "mode":"push"
                    },
                    "resize":true
                },
                "modes":{
                    "grab":{
                        "distance":400,
                        "line_linked":{
                            "opacity":1
                        }
                    },
                    "bubble":{
                        "distance":200,
                        "size":40,
                        "duration":2,
                        "opacity":8,
                        "speed":3
                    },
                    "repulse":{
                        "distance":180,
                        "duration":0.4,
                        "opacity":1
                    },
                    "push":{
                        "particles_nb":4
                    },
                    "remove":{
                        "particles_nb":2
                    }
                }
            },
            "retina_detect":false
        }
        );
        





// particlesJS("particles-js", 
// {
//     "particles":{
//         "number":{
//             "value":700,
//             "density":{
//                 "enable":true,
//                 "value_area":30
//             }
//         },
//         "color":{
//             "value":"#ffffff"
//         },
//         "shape":{
//             "type":"circle",
//             "stroke":{
//                 "width":0,
//                 "color":"#bb3333"
//             },
//             "polygon":{
//                 "nb_sides":3},
//                 "image":{
//                     "src":"img/github.svg",
//                     "width":100,
//                     "height":100
//                 }
//             },
//             "opacity":{
//                 "value":0,
//                 "random":false,
//                 "anim":{
//                     "enable":false,
//                     "speed":1,
//                     "opacity_min":0.1,
//                     "sync":false
//                 }
//             },
//             "size":{
//                 "value":1,
//                 "random":true,
//                 "anim":{
//                     "enable":false,
//                     "speed":40,
//                     "size_min":0.1,
//                     "sync":false
//                 }
//             },
//             "line_linked":{
//                 "enable":false,
//                 "distance":150,
//                 "color":"#ffffff",
//                 "opacity":0.4,
//                 "width":1},
//                 "move":{
//                     "enable":true,
//                     "speed":6,
//                     "direction":"none",
//                     "random":false,
//                     "straight":false,
//                     "out_mode":"out",
//                     "bounce":false,
//                     "attract":{
//                         "enable":false,
//                         "rotateX":600,
//                         "rotateY":1200
//                     }
//                 }
//             },
//             "interactivity":{
//                 "detect_on":"canvas",
//                 "events":{
//                     "onhover":{
//                         "enable":true,
//                         "mode":"bubble"
//                     },
//                     "onclick":{
//                         "enable":false,
//                         "mode":"grab"
//                     },
//                         "resize":true},
//                         "modes":{
//                             "grab":{
//                                 "distance":400,
//                                 "line_linked":{
//                                     "opacity":1
//                                 }
//                             },
//                             "bubble":{
//                                 "distance":200,
//                                 "size":3,
//                                 "duration":2,
//                                 "opacity":1,
//                                 "speed":3
//                             },
//                             "repulse":{
//                                 "distance":200,
//                                 "duration":0.4},
//                                 "push":{
//                                     "particles_nb":4
//                                 },
//                                 "remove":{
//                                     "particles_nb":2
//                                 }
//                             }
//                         },
//                         "retina_detect":true
//                     });
//                     var count_particles, stats, update; 
//                     stats = new Stats; 
//                     stats.setMode(0); 
//                     stats.domElement.style.position = 'absolute'; 
//                     stats.domElement.style.left = '0px'; 
//                     stats.domElement.style.top = '0px'; 
//                     document.body.appendChild(stats.domElement); 
//                     count_particles = document.querySelector('.js-count-particles'); 
//                     update = function() { stats.begin(); 
//                         stats.end(); 
//                         if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
//                             count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
//                         } 
//                         requestAnimationFrame(update); 
//                     }; 
//                     requestAnimationFrame(update);;