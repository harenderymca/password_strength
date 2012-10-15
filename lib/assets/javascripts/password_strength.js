jQuery.fn.password_strength = function() {
	var password_field = $(this[0])
	var id = password_field.attr('id')
	//password_field.css("float","left")
	password_field.keyup(updatePasswordStrengthIndicator);
	password_field.focus(updatePasswordStrengthIndicator)
	password_field.blur(function(){
		var container_div = password_field.parent()
		var c = container_div.children()
		$.each(c,function(key,value){
			if (key != 0) {
				$(c[key]).remove();
			};
		})
	})
}

function updatePasswordStrengthIndicator(){
	var password_field = $(this)
	var password = this.value
	var password_length = password.length
	var container_div = password_field.parent()
	if (password_length < 6) {
		var c = container_div.children()
		$.each(c,function(key,value){
			if (key != 0) {
				$(c[key]).remove();
			};
		})
		container_div.append("<span class='password_strength_warning'>Password must be atleast SIX characters</span>");
		return;
	}
	else{
		var c = container_div.children()
		$.each(c,function(key,value){
			if (key != 0) {
				$(c[key]).remove();
			};
		})
		container_div.append("<span class='password_strength_strength'>Strength : </span>").append("<div class='password_strength_bar_holder'><div class='password_strength_meter'></div></div>").append("<span style='font-size:12px;color:blue;margin-left:4px'></span>");
	}
	var meter = $(container_div.children()[2]).children()
    var strongnessHeader = $(container_div.children()[3])
	if (strongStrengthed(password)) {
		meter.css("width","80%").css("background-color","green")
		strongnessHeader.empty().append("Strong").css("color","green")
	}
	else if (mediumStrengthed(password)) {
		meter.css("width","50%").css("background-color","blue")
		strongnessHeader.empty().append("Medium").css("color","blue")
	}
	else if (weakStrengthed(password)) {
		meter.css("width","20%").css("background-color","red")
		strongnessHeader.empty().append("Weak").css("color","red")
	}
}

function mediumStrengthed(password){
	if ( hasSpecialCharacter(password) & password.length >=6 & password.length < 10 || (!hasSpecialCharacter(password) & password.length >= 8) ) {
		return true;
	};
}

function strongStrengthed (password) {
	if (hasSpecialCharacter(password) & password.length >= 10 || (password.length > 12)) {
		return true;
	};
}

function weakStrengthed(password){
	if (!hasSpecialCharacter(password) & password.length >=6 & password.length < 10) {
		return true;
	};
}

function hasSpecialCharacter(string)
{
	var patt = /[^a-z]/;
	return patt.test(string)
}