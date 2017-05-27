var AppCalendar = function() {

    return {
        //main function to initiate the module
        init: function() {
            this.initCalendar();
        },

        initCalendar: function() {

            if (!jQuery().fullCalendar) {
                return;
            }

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            var h = {};

            if (App.isRTL()) {
                if ($('#calendar').parents(".portlet").width() <= 720) {
                    $('#calendar').addClass("mobile");
                    h = {
                        right: 'title, prev, next',
                        center: '',
                        left: 'agendaDay, agendaWeek, month, today'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    h = {
                        right: 'title',
                        center: '',
                        left: 'agendaDay, agendaWeek, month, today, prev,next'
                    };
                }
            } else {
                if ($('#calendar').parents(".portlet").width() <= 720) {
                    $('#calendar').addClass("mobile");
                    h = {
                        left: 'title, prev, next',
                        center: '',
                        right: 'today,month,agendaWeek,agendaDay'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    h = {
                        left: 'title',
                        center: '',
                        right: 'prev,next,today,month,agendaWeek,agendaDay'
                    };
                }
            }

            var initDrag = function(el) {
                // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                // it doesn't need to have a start or end
                var eventObject = {
                    title: $.trim(el.text()) // use the element's text as the event title
                };
                // store the Event Object in the DOM element so we can get to it later
                el.data('eventObject', eventObject);
                // make the event draggable using jQuery UI
                el.draggable({
                    zIndex: 999,
                    revert: true, // will cause the event to go back to its
                    revertDuration: 0 //  original position after the drag
                });
            };

            var addEvent = function(title) {
                title = title.length === 0 ? "Untitled Event" : title;
                var html = $('<div class="external-event label label-default">' + title + '</div>');
                jQuery('#event_box').append(html);
                initDrag(html);
            };
            // var getDataMsg = function (){
            //     var dataArr = new Array();
            //     $.ajax({
            //         type:"GET",
            //         async: false,
            //         url:"http://edudept.chinacloudapp.cn/edudept012/single/appointment.json",
            //         dataType:"json",
            //         success:function(data){
            //            var result = eval(data);
            //            // console.log(result);
            //            if(result.length > 0){
                           
            //                 for(var i=0;i<result.length;i++){
            //                     var data = {};
            //                     data.title = result[i].start;
            //                     data.start = result[i].title,
            //                     data.allDay = true,
            //                     data.backgroundColor = '#f74814';
            //                     // data.rendering = 'background';
            //                     if(data.title=="未预约"){     
            //                         data.className="dialog_c";
            //                     }
            //                     // if(data.title=="未预约"){     
            //                     //     data.className="dialog_c";
            //                     //     data.backgroundColor = '#f74814';
            //                     // }
            //                     else if(data.title=="已预约"){
            //                         data.backgroundColor = '#898989';
            //                     }
            //                     dataArr[i]=data;
            //                 }

            //            }
            //          },
            //         error:function(){
            //             console.log("error");
            //         }
            //     });
            //      return dataArr;
            // }

            $('#external-events div.external-event').each(function() {
                initDrag($(this));
            });
            
            $('#event_add').unbind('click').click(function() {
                var title = $('#event_title').val();
                addEvent(title);
            });

            //predefined events
            // $('#event_box').html("");
            // addEvent("My Event 1");
            // addEvent("My Event 2");
            // addEvent("My Event 3");
            // addEvent("My Event 4");
            // addEvent("My Event 5");
            // addEvent("My Event 6");

            $('#calendar').fullCalendar('destroy'); // destroy the calendar

            


            // $('#calendar').fullCalendar({ //re-initialize the calendar
                
            //     defaultView: 'month', // change default view with available options from http://arshaw.com/fullcalendar/docs/views/Available_Views/ 
            //     slotMinutes: 15,
            //     editable: false,
            //     droppable: false, // this allows things to be dropped onto the calendar !!!
            //     events: getDataMsg(),
            //     eventClick: function(event) { 　
            //         if($(this).hasClass("dialog_c"))　{
            //             $(".form-time").val(event.start.format('YYYY-MM-DD'));
            //         }　　　　
            //     }

            // });

           

        }

    };

}();

jQuery(document).ready(function() {    
   AppCalendar.init(); 
});