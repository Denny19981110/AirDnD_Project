$(function () {
    let len = 50; // 超過50個字以"..."取代
    $(".comment-box-text>p").each(function (i) {
        if ($(this).text().length > len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, len - 1) + "...More";
            $(this).text(text);
        }
    });
});