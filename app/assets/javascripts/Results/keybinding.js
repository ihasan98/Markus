// Open the keyboard shortcuts help modal
Mousetrap.bind('?', function() {
  modal_help.open();
});

// Go to the previous submission with <
Mousetrap.bind('shift+left', function() {
  $('#submission-selector>.left>a')[0].click();
});

// Go to next submission with >
Mousetrap.bind('shift+right', function() {
  $('#submission-selector>.right>a')[0].click();
});

// Go to the previous criterion with shift + up
Mousetrap.bind('shift+up', function(e) {
  e.preventDefault();
  prevCriterion();
  return false;
});

// Go to the next criterion with shift + down
Mousetrap.bind('shift+down', function(e) {
  e.preventDefault();
  nextCriterion();
  return false;
});

// When on rubric criterion, use the arrow keys to hover over the next rubric
Mousetrap.bind('up', function(e) {
  $current_criteria = $('.active-criterion');
  if ($current_criteria.length &&
    $current_criteria.hasClass('rubric_criterion') &&
    !$current_criteria.hasClass('unassigned')) {
    e.preventDefault();
    $selected = $('.active-rubric');
    if ($selected.length) {
      $next = $selected.parent().prev();
      if (!$next.length) {
        // if no next element exists, loop back to the last of the list
        $next = $selected.parent().siblings().last();
      }
      $selected.removeClass('active-rubric');
      $next.children().addClass('active-rubric');
    }
    return false;
  }
});

// When on rubric criteria, use the arrow keys to hover over the next rubric
Mousetrap.bind('down', function(e) {
  $current_criteria = $('.active-criterion');
  if ($current_criteria.length &&
    $current_criteria.hasClass('rubric_criterion') &&
    !$current_criteria.hasClass('unassigned')) {
    e.preventDefault();
    $selected = $('.active-rubric');
    if ($selected.length) {
      $next = $selected.parent().next();
      if (!$next.length) {
        // if no next element exists, loop back to the front of the list
        $next = $selected.parent().siblings().first();
      }
      $selected.removeClass('active-rubric');
      $next.children().addClass('active-rubric');
    }
    return false;
  }
});

// When enter is pressed, and there is an active rubric selected, trigger select and collapse
Mousetrap.bind('enter', function(e) {
  if ($('.active-rubric').length) {
    e.preventDefault();
    $('.active-rubric').trigger('onclick');
  }
});

// Press shift+n for new annotation modal to appear
Mousetrap.bind('shift+n', function(e) {
  if ($('#annotation_dialog:visible').length == 0) {
    resultComponent.newAnnotation();
  }
});

// When mod+enter is pressed and the annotation modal is open, submit it
var aside = document.getElementById('annotation_dialog');
Mousetrap(aside).bind('mod+enter', function(e) {
  if ($('#annotation_dialog:visible').length) {
    e.preventDefault();
    $('#submit_annotation').click();
  }
});

// When alt+enter is pressed, toggle compact mode
Mousetrap.bind('alt+enter', function(e) {
    compact_view_toggle();
});
