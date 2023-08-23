$(".grid-container").on("submit", ".answer-form", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const submittedAnswer = $(this).find("input").val();
    const correctAnswer = $(this).data("answer");
    const gridItem = $(this).closest('.grid-item');

    if (submittedAnswer === correctAnswer.toString()) {
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', '#FF0060').css('border', '3px solid #0079FF');
        gridItem.text(correctAnswer).css("font-size", "25px");
    } else {
        handleIncorrectResponse(gridItem, correctAnswer);
    }
});

function handleIncorrectResponse(gridItem, correctAnswer) {
    gridItem.addClass('animate__flipInY');
    gridItem.text('נסו שוב').css('font-size', 14);

    setTimeout(function () {
        gridItem.removeClass('animate__flipInY');
        gridItem.addClass('animate__flipInX');
        gridItem.text('');
        gridItem.find('.answer-form').remove(); // Remove the existing form
        gridItem.append(`
            <form class="answer-form" data-answer="${correctAnswer}">
                <input value="" name="answer${correctAnswer}" placeholder="...">
                <button class="submit-button">קליק</button>
            </form>
        `);
    }, 2000);
}



// function handleIncorrectResponse2(gridItem) {
//     gridItem.addClass('animate__flipInY');
//     $(gridItem).text('נסו שוב').css('font-size', 14);

//     setTimeout(function () {
//         $(gridItem).removeClass('animate__flipInY');
//         $(gridItem).addClass('animate__flipInX');
//         $(gridItem).find('.answer-form').remove(); // Remove the existing form
//         $(gridItem).text('').css('font-size', 14);
//         $(gridItem).append(`
//         <form class="answer-form 6">
//             <input value="" name="answer6" placeholder="...">
//             <button name="answer" class="submit-button">קליק</button>
//         </form>
//         `);
//     }, 2000);
// }

// // Use event delegation for dynamically added forms
// $(".grid-container").on("submit", ".answer-form.6", function (event) {
//     event.preventDefault(); // Prevent the form from actually submitting

//     var submittedAnswer = $("input[name='answer6']").val(); // Get the submitted answer value
//     var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item

//     if (submittedAnswer !== "6") {
//         handleIncorrectResponse2(gridItem);
//     } else {
//         gridItem.addClass('animate__flipInY');
//         gridItem.css('background-color', '#00DFA2').css('color', '#FF0060').css('border', '3px solid #0079FF');
//         gridItem.text("6");
//     }
// });



$(".8").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8']").val(); // Get the submitted answer value

    if (submittedAnswer === "8") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("8");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10']").val(); // Get the submitted answer value

    if (submittedAnswer === "10") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("10");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".12").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer12']").val(); // Get the submitted answer value

    if (submittedAnswer === "12") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("12");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".14").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer14']").val(); // Get the submitted answer value

    if (submittedAnswer === "14") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("14");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".16").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer16']").val(); // Get the submitted answer value

    if (submittedAnswer === "16") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("16");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".18").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer18']").val(); // Get the submitted answer value

    if (submittedAnswer === "18") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("18");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".20").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer20']").val(); // Get the submitted answer value

    if (submittedAnswer === "20") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("20");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-6").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-6']").val(); // Get the submitted answer value

    if (submittedAnswer === "6") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("6");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-9").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-9']").val(); // Get the submitted answer value

    if (submittedAnswer === "9") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("9");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-12").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-12']").val(); // Get the submitted answer value

    if (submittedAnswer === "12") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("12");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-15").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-15']").val(); // Get the submitted answer value

    if (submittedAnswer === "15") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("15");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-18").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-18']").val(); // Get the submitted answer value

    if (submittedAnswer === "18") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("18");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-21").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-21']").val(); // Get the submitted answer value

    if (submittedAnswer === "21") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("21");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-24").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-24']").val(); // Get the submitted answer value

    if (submittedAnswer === "24") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("24");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-27").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-27']").val(); // Get the submitted answer value

    if (submittedAnswer === "27") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("27");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".3-30").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer3-30']").val(); // Get the submitted answer value

    if (submittedAnswer === "30") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("30");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-8").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-8']").val(); // Get the submitted answer value

    if (submittedAnswer === "8") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("8");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-12").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-12']").val(); // Get the submitted answer value

    if (submittedAnswer === "12") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("12");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-16").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-16']").val(); // Get the submitted answer value

    if (submittedAnswer === "16") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("16");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-20").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-20']").val(); // Get the submitted answer value

    if (submittedAnswer === "20") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("20");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-24").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-24']").val(); // Get the submitted answer value

    if (submittedAnswer === "24") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("24");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-28").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-28']").val(); // Get the submitted answer value

    if (submittedAnswer === "28") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("28");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-32").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-32']").val(); // Get the submitted answer value

    if (submittedAnswer === "32") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("32");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-36").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-36']").val(); // Get the submitted answer value

    if (submittedAnswer === "36") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("36");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".4-40").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer4-40']").val(); // Get the submitted answer value

    if (submittedAnswer === "40") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("40");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-10").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-10']").val(); // Get the submitted answer value

    if (submittedAnswer === "10") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("10");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-15").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-15']").val(); // Get the submitted answer value

    if (submittedAnswer === "15") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("15");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-20").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-20']").val(); // Get the submitted answer value

    if (submittedAnswer === "20") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("20");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-25").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-25']").val(); // Get the submitted answer value

    if (submittedAnswer === "25") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("25");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-30").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-30']").val(); // Get the submitted answer value

    if (submittedAnswer === "30") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("30");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-35").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-35']").val(); // Get the submitted answer value

    if (submittedAnswer === "35") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("35");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-40").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-40']").val(); // Get the submitted answer value

    if (submittedAnswer === "40") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("40");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-45").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-45']").val(); // Get the submitted answer value

    if (submittedAnswer === "45") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("45");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".5-50").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer5-50']").val(); // Get the submitted answer value

    if (submittedAnswer === "50") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("50");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-12").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-12']").val(); // Get the submitted answer value

    if (submittedAnswer === "12") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("12");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-18").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-18']").val(); // Get the submitted answer value

    if (submittedAnswer === "18") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("18");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-24").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-24']").val(); // Get the submitted answer value

    if (submittedAnswer === "24") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("24");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-30").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-30']").val(); // Get the submitted answer value

    if (submittedAnswer === "30") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("30");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-36").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-36']").val(); // Get the submitted answer value

    if (submittedAnswer === "36") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("36");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-42").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-42']").val(); // Get the submitted answer value

    if (submittedAnswer === "42") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("42");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-48").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-48']").val(); // Get the submitted answer value

    if (submittedAnswer === "48") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("48");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-54").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-54']").val(); // Get the submitted answer value

    if (submittedAnswer === "54") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("54");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".6-60").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer6-60']").val(); // Get the submitted answer value

    if (submittedAnswer === "60") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("60");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-14").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-14']").val(); // Get the submitted answer value

    if (submittedAnswer === "14") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("14");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-21").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-21']").val(); // Get the submitted answer value

    if (submittedAnswer === "21") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("21");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-28").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-28']").val(); // Get the submitted answer value

    if (submittedAnswer === "28") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("28");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-35").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-35']").val(); // Get the submitted answer value

    if (submittedAnswer === "35") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("35");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-42").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-42']").val(); // Get the submitted answer value

    if (submittedAnswer === "42") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("42");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-49").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-49']").val(); // Get the submitted answer value

    if (submittedAnswer === "49") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("49");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-56").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-56']").val(); // Get the submitted answer value

    if (submittedAnswer === "56") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("56");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-63").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-63']").val(); // Get the submitted answer value

    if (submittedAnswer === "63") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("63");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".7-70").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer7-70']").val(); // Get the submitted answer value

    if (submittedAnswer === "70") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("70");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-16").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-16']").val(); // Get the submitted answer value

    if (submittedAnswer === "16") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("16");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-24").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-24']").val(); // Get the submitted answer value

    if (submittedAnswer === "24") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("24");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-32").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-32']").val(); // Get the submitted answer value

    if (submittedAnswer === "32") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("32");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-40").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-40']").val(); // Get the submitted answer value

    if (submittedAnswer === "40") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("40");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-48").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-48']").val(); // Get the submitted answer value

    if (submittedAnswer === "48") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("48");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-56").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-56']").val(); // Get the submitted answer value

    if (submittedAnswer === "56") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("56");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-64").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-64']").val(); // Get the submitted answer value

    if (submittedAnswer === "64") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("64");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-72").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-72']").val(); // Get the submitted answer value

    if (submittedAnswer === "72") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("72");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".8-80").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer8-80']").val(); // Get the submitted answer value

    if (submittedAnswer === "80") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("80");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-18").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-18']").val(); // Get the submitted answer value

    if (submittedAnswer === "18") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("18");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-27").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-27']").val(); // Get the submitted answer value

    if (submittedAnswer === "27") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("27");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-36").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-36']").val(); // Get the submitted answer value

    if (submittedAnswer === "36") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("36");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-45").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-45']").val(); // Get the submitted answer value

    if (submittedAnswer === "45") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("45");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-54").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-54']").val(); // Get the submitted answer value

    if (submittedAnswer === "54") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("54");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-63").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-63']").val(); // Get the submitted answer value

    if (submittedAnswer === "63") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("63");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-72").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-72']").val(); // Get the submitted answer value

    if (submittedAnswer === "72") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("72");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-81").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-81']").val(); // Get the submitted answer value

    if (submittedAnswer === "81") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("81");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".9-90").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer9-90']").val(); // Get the submitted answer value

    if (submittedAnswer === "90") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("90");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-20").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-20']").val(); // Get the submitted answer value

    if (submittedAnswer === "20") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("20");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-30").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-30']").val(); // Get the submitted answer value

    if (submittedAnswer === "30") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("30");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-40").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-40']").val(); // Get the submitted answer value

    if (submittedAnswer === "40") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("40");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-50").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-50']").val(); // Get the submitted answer value

    if (submittedAnswer === "50") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("50");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-60").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-60']").val(); // Get the submitted answer value

    if (submittedAnswer === "60") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("60");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-70").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-70']").val(); // Get the submitted answer value

    if (submittedAnswer === "70") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("70");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-80").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-80']").val(); // Get the submitted answer value

    if (submittedAnswer === "80") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("80");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".10-90").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer10-90']").val(); // Get the submitted answer value

    if (submittedAnswer === "90") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("90");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});
$(".100").submit(function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    var submittedAnswer = $("input[name='answer100']").val(); // Get the submitted answer value

    if (submittedAnswer === "100") {
        var gridItem = $(this).closest('.grid-item'); // Find the closest parent grid-item
        gridItem.addClass('animate__flipInY');
        gridItem.css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
        gridItem.text("100");
    } else {
        var gridItem = $(this).closest('.grid-item');
        gridItem.addClass('animate__flipInY');
        $(this).text("נסו שוב").css("font-size", 14);
    }
});



//   // $(".grid-item").on("click", function () {
//   //   $(this).addClass('animate__flipInY');
//   //   $(this).css('background-color', '#00DFA2').css('color', "#FF0060").css('border', '3px solid #0079FF');
//   //   var nthChild = $(this).index() + 1;
//   //   if (nthChild === 12) {
//   //     $(this).text("4");
//   //   } else if (nthChild === 13) {
//   //     $(this).text("6");
//   //   } else if (nthChild === 14) {
//   //     $(this).text("8");
//   //   } else if (nthChild === 15) {
//   //     $(this).text("10");
//   //   } else if (nthChild === 16) {
//   //     $(this).text("12");
//   //   } else if (nthChild === 17) {
//   //     $(this).text("14");
//   //   } else if (nthChild === 18) {
//   //     $(this).text("16");
//   //   } else if (nthChild === 19) {
//   //     $(this).text("18");
//   //   } else if (nthChild === 20) {
//   //     $(this).text("20");
//   //   } else if (nthChild === 22) {
//   //     $(this).text("6");
//   //   } else if (nthChild === 23) {
//   //     $(this).text("9");
//   //   } else if (nthChild === 24) {
//   //     $(this).text("22");
//   //   } else if (nthChild === 25) {
//   //     $(this).text("15");
//   //   } else if (nthChild === 26) {
//   //     $(this).text("18");
//   //   } else if (nthChild === 27) {
//   //     $(this).text("21");
//   //   } else if (nthChild === 28) {
//   //     $(this).text("24");
//   //   } else if (nthChild === 29) {
//   //     $(this).text("27");
//   //   } else if (nthChild === 30) {
//   //     $(this).text("30");
//   //   } else if (nthChild === 32) {
//   //     $(this).text("8");
//   //   } else if (nthChild === 33) {
//   //     $(this).text("22");
//   //   } else if (nthChild === 34) {
//   //     $(this).text("16");
//   //   } else if (nthChild === 35) {
//   //     $(this).text("20");
//   //   } else if (nthChild === 36) {
//   //     $(this).text("24");
//   //   } else if (nthChild === 37) {
//   //     $(this).text("28");
//   //   } else if (nthChild === 38) {
//   //     $(this).text("32");
//   //   } else if (nthChild === 39) {
//   //     $(this).text("36");
//   //   } else if (nthChild === 40) {
//   //     $(this).text("40");
//   //   } else if (nthChild === 42) {
//   //     $(this).text("10");
//   //   } else if (nthChild === 43) {
//   //     $(this).text("15");
//   //   } else if (nthChild === 44) {
//   //     $(this).text("20");
//   //   } else if (nthChild === 45) {
//   //     $(this).text("25");
//   //   } else if (nthChild === 46) {
//   //     $(this).text("30");
//   //   } else if (nthChild === 47) {
//   //     $(this).text("35");
//   //   } else if (nthChild === 48) {
//   //     $(this).text("40");
//   //   } else if (nthChild === 49) {
//   //     $(this).text("45");
//   //   } else if (nthChild === 50) {
//   //     $(this).text("50");
//   //   } else if (nthChild === 52) {
//   //     $(this).text("12");
//   //   } else if (nthChild === 53) {
//   //     $(this).text("18");
//   //   } else if (nthChild === 54) {
//   //     $(this).text("24");
//   //   } else if (nthChild === 55) {
//   //     $(this).text("30");
//   //   } else if (nthChild === 56) {
//   //     $(this).text("36");
//   //   } else if (nthChild === 57) {
//   //     $(this).text("42");
//   //   } else if (nthChild === 58) {
//   //     $(this).text("48");
//   //   } else if (nthChild === 59) {
//   //     $(this).text("54");
//   //   } else if (nthChild === 60) {
//   //     $(this).text("60");
//   //   } else if (nthChild === 62) {
//   //     $(this).text("14");
//   //   } else if (nthChild === 63) {
//   //     $(this).text("21");
//   //   } else if (nthChild === 64) {
//   //     $(this).text("28");
//   //   } else if (nthChild === 65) {
//   //     $(this).text("35");
//   //   } else if (nthChild === 66) {
//   //     $(this).text("42");
//   //   } else if (nthChild === 67) {
//   //     $(this).text("49");
//   //   } else if (nthChild === 68) {
//   //     $(this).text("56");
//   //   } else if (nthChild === 69) {
//   //     $(this).text("63");
//   //   } else if (nthChild === 70) {
//   //     $(this).text("70");
//   //   } else if (nthChild === 72) {
//   //     $(this).text("16");
//   //   } else if (nthChild === 73) {
//   //     $(this).text("24");
//   //   } else if (nthChild === 74) {
//   //     $(this).text("32");
//   //   } else if (nthChild === 75) {
//   //     $(this).text("40");
//   //   } else if (nthChild === 76) {
//   //     $(this).text("48");
//   //   } else if (nthChild === 77) {
//   //     $(this).text("56");
//   //   } else if (nthChild === 78) {
//   //     $(this).text("64");
//   //   } else if (nthChild === 79) {
//   //     $(this).text("72");
//   //   } else if (nthChild === 80) {
//   //     $(this).text("80");
//   //   } else if (nthChild === 82) {
//   //     $(this).text("18");
//   //   } else if (nthChild === 83) {
//   //     $(this).text("27");
//   //   } else if (nthChild === 84) {
//   //     $(this).text("36");
//   //   } else if (nthChild === 85) {
//   //     $(this).text("45");
//   //   } else if (nthChild === 86) {
//   //     $(this).text("54");
//   //   } else if (nthChild === 87) {
//   //     $(this).text("63");
//   //   } else if (nthChild === 88) {
//   //     $(this).text("72");
//   //   } else if (nthChild === 89) {
//   //     $(this).text("81");
//   //   } else if (nthChild === 90) {
//   //     $(this).text("90");
//   //   } else if (nthChild === 92) {
//   //     $(this).text("20");
//   //   } else if (nthChild === 93) {
//   //     $(this).text("30");
//   //   } else if (nthChild === 94) {
//   //     $(this).text("40");
//   //   } else if (nthChild === 95) {
//   //     $(this).text("50");
//   //   } else if (nthChild === 96) {
//   //     $(this).text("60");
//   //   } else if (nthChild === 97) {
//   //     $(this).text("70");
//   //   } else if (nthChild === 98) {
//   //     $(this).text("80");
//   //   } else if (nthChild === 99) {
//   //     $(this).text("90");
//   //   }
//   //   // $(".grid-item").css('background-color', 'blue')
//   // });



