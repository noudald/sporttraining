function generateTraining(attentionPoint, swimTraining, swimSpeed) {
    return "This is a new training with " + attentionPoint
        + " " + swimTraining + " " + swimSpeed + ".";
}

$(document).ready(function() {
    $("#attentionPoint, #swimTraining, #swimSpeed").click(function() {
        var attentionPoint = $(':radio[name=attentionPoint]:checked').val();
        var swimTraining = $(':radio[name=swimTraining]:checked').val();
        var swimSpeed = $(':radio[name=swimSpeed]:checked').val();

        console.log(attentionPoint, swimTraining, swimSpeed);

        var completeTraining = generateTraining(attentionPoint, swimTraining, swimSpeed);

        $('#trainingTextBox').fadeOut('slow');
        $('#trainingTextBox').promise().done(function() {
            $('#trainingTextBox').html(completeTraining);
        });
        $('#trainingTextBox').fadeIn('slow');
    });
});
