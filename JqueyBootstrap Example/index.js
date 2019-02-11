
    function getUsers()
    {
      $.ajax({
          url: "http://localhost:51708/api/User"
      }).then(function(data) {
        var items = [];
        $.each(data.value, function(index, item) {
          items.push( "<li class='list-group-item' id='" + item.UserId + "'>" + item.Name + "</li>" );
        });

        $("#containerBody").html('');

        $( "<ul/>", {
          "class": "list-group",
          html: items.join( "" )
        }).appendTo("#containerBody");
      });
  }
