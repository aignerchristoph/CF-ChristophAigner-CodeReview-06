// insert task to todolist
$(document).ready(function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li class="element">' + toAdd + '<span ><i class:"checkbox" class="fa">&#xf058;</i></span></li>');
                 var numAll = $("li").length;
                 var numComplete = $('.checkboxChecked').length;
                 $('#allTasks').text(numAll);
                 $("#openTasks").text(numAll - numComplete)
            });        


// coloring the checkmarks - and counting the tasks

      $(document).on("click",".fa", function(){
        $(this).toggleClass("checkboxChecked");
        var numComplete = $('.checkboxChecked').length;
        var numAll = $("li").length;
        $(this).parentsUntil(".ui-sortable").toggleClass("done")
        $("#complete").text(numComplete);
        $("#openTasks").text(numAll - numComplete)
      });
     



// remove tasks by doubleclick --- and counting tasks 

      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').animate({
                        opacity: 0.0,
                        paddingLeft: '+=80'
                    }, 500, function() {
                        $(this).remove();
                    });
        var numComplete = $('.checkboxChecked').length;
        var numAll = $("li").length;
        $("#complete").text(numComplete);
        $("#openTasks").text(numAll - numComplete);
        $('#allTasks').text(numAll);
      });
      

// sorting the tasks 
//       
      $(document).on("click","#allTasks", function(){
        $(".element").show();
        $(".done").show();

      });
      
      $(document).on("click","#complete", function(){
        $(".element").hide()
        $(".done").show();


       })

      $(document).on("click","#openTasks", function(){
        $(".element").show()
        $(".done").hide();

      })




      $('input').focus(function() {
        $(this).val('');
      });
      

      // sorting the tasks with drag and drop
      $('ol').sortable();
      
    }
);