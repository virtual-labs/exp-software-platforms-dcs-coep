$(function () {
  	
  	$("h6").hide();
  	// Input DI
            $("#dvSource #ImgInputDI").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest #dropInputDI").droppable({
            	accept : "#ImgInputDI",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #dropInputDI");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
                    draggable.appendTo(droppable);

                     $(".DI").css('display','none');
                }
            });
            
            // Output DO
             $("#dvSource #ImgOutputDO").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest #dropOutputDO").droppable({
            	accept : "#ImgOutputDO",
                drop: function (event, ui) {
                    // if ($("#dvDest #dropInputDI img").length == 0) {
                        // $("#dvDest #dropInputDI").html("");
                    // }
                    var droppable = $("#dvDest #dropOutputDO");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                    // $("#dvDest #dropInputDI").append(draggable);
                     // draggable.css({top: '10px', left: '50px'});
                     
                     $(".DO").css('display','none');
                      // $("#dropOutputDO").css('border','none')	
	                  // $("dropOutputDO").css('display','none');
                }
            });
            
            
            // Input AO
          
            $("#dvSource #ImgInputAI").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                    if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                        // alert(image + " dropped.");
                    }
                    else {
                        // alert(image + " not dropped.");
                    }
                }
            });
            
            $("#dvDest #dropInputAI").droppable({
            	accept : "#ImgInputAI",
                drop: function (event, ui) {
                    // if ($("#dvDest #dropInputDI img").length == 0) {
                        // $("#dvDest #dropInputDI").html("");
                    // }
                    	
                    var droppable = $("#dvDest #dropInputAI");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                    // $("#dvDest #dropInputDI").append(draggable);
                     // draggable.css({top: '10px', left: '50px'});
                     
                     
                     $(".AI").css('display','none');
                     // $("#dropInputAI").css('border','none')	
	               	// $("dropInputAI").css('display','none');
                }
            });
            
            
              // Output DI
             $("#dvSource #ImgOutputAO").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                    if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                        // alert(image + " dropped.");
                    }
                    else {
                        // alert(image + " not dropped.");
                    }
                }
            });
            
            $("#dvDest #dropOutputAO").droppable({
            	accept : "#ImgOutputAO",
                drop: function (event, ui) {
                    // if ($("#dvDest #dropInputDI img").length == 0) {
                        // $("#dvDest #dropInputDI").html("");
                    // }
                    var droppable = $("#dvDest #dropOutputAO");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                    // $("#dvDest #dropInputDI").append(draggable);
                     // draggable.css({top: '10px', left: '50px'});
                     
                      $(".AO").css('display','none');
                      // $("#dropOutputAO").css('border','none')	
	                  $("dropOutputAO").css('display','none');
                }
            });
            
            
            /// memory image
            
             $("#dvSource #ImgMemory").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                    if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                        // alert(image + " dropped.");
                    }
                    else {
                        // alert(image + " not dropped.");
                    }
                }
            });
            
            $("#dvDest #dropMemory").droppable({
            	accept : "#ImgMemory",
                drop: function (event, ui) {
                    // if ($("#dvDest #dropInputDI img").length == 0) {
                        // $("#dvDest #dropInputDI").html("");
                    // }
                    var droppable = $("#dvDest #dropMemory");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                    // $("#dvDest #dropInputDI").append(draggable);
                     // draggable.css({top: '10px', left: '50px'});
                     
                      $(".Memory").css('display','none');
                      // $("#dropMemory").css('border','none')	
	                  // $("#dropMemory").css('display','none');
                }
            });
            
            
            /// PS image
            
             $("#dvSource #ImgPS").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                    if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                        // alert(image + " dropped.");
                    }
                    else {
                        // alert(image + " not dropped.");
                    }
                }
            });
            
            $("#dvDest #dropPS").droppable({
            	accept : "#ImgPS",
                drop: function (event, ui) {
                    // if ($("#dvDest #dropInputDI img").length == 0) {
                        // $("#dvDest #dropInputDI").html("");
                    // }
                    var droppable = $("#dvDest #dropPS");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                    // $("#dvDest #dropInputDI").append(draggable);
                     // draggable.css({top: '10px', left: '50px'});
                     
                      $(".PS").css('display','none');
                      // $("#dropPS").css('border','none')	
	                  // $("#dropMemory").css('display','none');
                }
            });
            
            
            
        /// DI inputs images 
        
            //DI push buttons
             $("#dvSource #dvDI #ImgPB").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI1").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI1");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI1").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            //DI level switch
             $("#dvSource #dvDI #ImgLS").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI2").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI2");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI2").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            //DI Temp switch
             $("#dvSource #dvDI #ImgTS").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI3").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI3");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI3").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            
            //DI Pressure switch
             $("#dvSource #dvDI #ImgPS").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI4").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI4");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI4").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
             //DI contactor 
             $("#dvSource #dvDI #ImgCtr").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI5").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI5");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI5").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
             //DI Flow switch 
             $("#dvSource #dvDI #ImgFS").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI6").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI6");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI6").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
              //DI Smoke Detector
             $("#dvSource #dvDI #ImgSD").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI7").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI7");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI7").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            
              //DI Heat Detector
             $("#dvSource #dvDI #ImgHD").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDI #DI8").droppable({
            	accept : ".DIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDI #DI8");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DI8").css('display','none');
                      $("#dvDI").css('border','none')
                }
            });
            
            
            
            /////// AI inputsimages 
        
            //AI Temp tx
             $("#dvSource #dvAI #ImgTTx").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI #AI1").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI #AI1");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI1").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            //AI level TX
             $("#dvSource #dvAI #ImgLTxE").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI #AI2").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI #AI2");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI2").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            //AI orifice FTx
             $("#dvSource #dvAI #ImgOFTx").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI #AI3").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI #AI3");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI3").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            
            //AI Level Tx internal
             $("#dvSource #dvAI #ImgLTxI").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI #AI4").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI #AI4");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI4").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
             //AI  ventuti  FTx
             $("#dvSource #dvAI #ImgVFTx").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI2 #AI5").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $(" #DivAI2 #AI5");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $("#AI5 .AI5").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
             //AI pitot tube 
             $("#dvSource #dvAI #ImgPT").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI2 #AI6").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI2 #AI6");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI6").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
              //AI vortex
             $("#dvSource #dvAI #ImgVtx").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI2 #AI7").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI2 #AI7");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI7").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            
              //AI magnetic 
             $("#dvSource #dvAI #ImgM").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAI2 #AI8").droppable({
            	accept : ".AIClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAI2 #AI8");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AI8").css('display','none');
                      $("#dvAI").css('border','none');	
                }
            });
            
            
            
            
     /////////// AO output images//////////
     
              //AO fan 
             $("#dvSource #dvAO #ImgFan").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAO #AO1").droppable({
            	accept : ".AOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAO #AO1");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AO1").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            // AO contril vlave
             $("#dvSource #dvAO #ImgPumpC").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAO #AO2").droppable({
            	accept : ".AOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAO #AO2");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AO2").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            // AO 3-way valve
             $("#dvSource #dvAO #ImgCV").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAO #AO3").droppable({
            	accept : ".AOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAO #AO3");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AO3").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
             // AO pump centrifugal
             $("#dvSource #dvAO #ImgTWV").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivAO #AO4").droppable({
            	accept : ".AOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivAO #AO4");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".AO4").css('display','none');
                      $("#dvAO").css('border','none')	
                }
            });
            
            
             /////////// DO output images//////////
     
              //DO level Alarm
             $("#dvSource #dvDO #ImgLA").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDO #DO1").droppable({
            	accept : ".DOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDO #DO1");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DO1").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            // DO solenoid vlave
             $("#dvSource #dvDO #ImgSV").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDO #DO2").droppable({
            	accept : ".DOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDO #DO2");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DO2").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
            // DO pressure relief valve
             $("#dvSource #dvDO #ImgPRV").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDO #DO3").droppable({
            	accept : ".DOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDO #DO3");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DO3").css('display','none');
                      // $("#AI1").css('border','none')	
                }
            });
            
             // DO pressure safety valves
             $("#dvSource #dvDO #ImgPSV").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    var image = this.src.split("/")[this.src.split("/").length - 1];
                }
            });
            
            $("#DivDO #DO4").droppable({
            	accept : ".DOClass",
                drop: function (event, ui) {
                    var droppable = $("#DivDO #DO4");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped"); draggable.appendTo(droppable);
                      $(".DO4").css('display','none');
                      $("#dvDO").css('border','none')	
                }
            });
            
            
            
         });   //END LINE