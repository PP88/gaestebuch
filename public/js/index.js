console.log("index.js");

jQuery(document).ready(function ($) {
  let form = $(".new-entry");

  $(form).submit(function (event) {
    event.preventDefault();
    let title = $("#title").val();
    let content = $("#content").val();

    $.ajax({
      url: "/guestbook/new",
      method: "POST",
      data: {
        title: title,
        content: content,
      },
      success: function (data) {
        let div = $.parseHTML("<div></div>");
        
        // sets the content of the body to element div
        $(div).html(data);

        let newEntriesArray = $(".entry", div);

        $("#guestbook-entries").children([]);

        newEntriesArray.each(function (i, newEntry) {
          $("#guestbook-entries").append(newEntry);
        });
      },
    });
  });
});
