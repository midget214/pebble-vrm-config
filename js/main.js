(function() {
  loadOptions();
  advancedOptionsToggleHandler();
  submitHandler();
})();

function advancedOptionsToggleHandler() {
	var $toggle = $('#tglAdvanced');
	var $container = $('#dvAdvanced');

	$toggle.on('click', function() {
		if ($toggle[0].checked) {
			$container.css('visibility', 'visible');
			$container.css('height', 'auto');
		} else {
			$container.css('visibility', 'hidden');
			$container.css('height', '0px');
		}
	});
}

function submitHandler() {
  /*var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });*/
}

function loadOptions() {
 
}

function getAndStoreConfigData() {
  /*var $backgroundColorPicker = $('#backgroundColorPicker');
  var $timeFormatCheckbox = $('#timeFormatCheckbox');

  var options = {
    backgroundColor: $backgroundColorPicker.val(),
    twentyFourHourFormat: $timeFormatCheckbox[0].checked
  };

  localStorage.backgroundColor = options.backgroundColor;
  localStorage.twentyFourHourFormat = options.twentyFourHourFormat;

  console.log('Got options: ' + JSON.stringify(options));
  return options;*/
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
